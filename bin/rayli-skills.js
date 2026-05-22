#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "..");
const skillsRoot = path.join(packageRoot, "skills");

const args = process.argv.slice(2);

function usage() {
  console.log(`rayli-skills

Usage:
  rayli-skills list
  rayli-skills install <skill-name|all> [--target codex|claude|both] [--dir <path>] [--force]

Examples:
  npx github:RayLi-Muye/skills list
  npx github:RayLi-Muye/skills install replicate-3d-website --target codex
  npx github:RayLi-Muye/skills install all --target both --force

Options:
  --target   Install into ~/.codex/skills, ~/.claude/skills, or both. Default: codex.
  --dir      Install into a custom skills directory instead of a known agent target.
  --force    Replace an existing installed skill directory.
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = args[index + 1];
  if (!value || value.startsWith("--")) fail(`${name} requires a value`);
  return value;
}

function hasFlag(name) {
  return args.includes(name);
}

function parseSkillName(skillDir) {
  const skillFile = path.join(skillDir, "SKILL.md");
  const text = fs.readFileSync(skillFile, "utf8");
  const match = text.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return path.basename(skillDir);

  const nameLine = match[1]
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith("name:"));

  return nameLine ? nameLine.split(":").slice(1).join(":").trim() : path.basename(skillDir);
}

function discoverSkills(dir = skillsRoot, found = []) {
  if (!fs.existsSync(dir)) return found;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;

    if (fs.existsSync(path.join(entryPath, "SKILL.md"))) {
      found.push({
        name: parseSkillName(entryPath),
        dir: entryPath,
        rel: path.relative(skillsRoot, entryPath),
      });
      continue;
    }

    discoverSkills(entryPath, found);
  }

  return found.sort((a, b) => a.name.localeCompare(b.name));
}

function targetDirs() {
  const customDir = readOption("--dir");
  if (customDir) return [path.resolve(customDir.replace(/^~/, os.homedir()))];

  const target = readOption("--target") ?? "codex";
  const home = os.homedir();

  if (target === "codex") return [path.join(home, ".codex", "skills")];
  if (target === "claude") return [path.join(home, ".claude", "skills")];
  if (target === "both") {
    return [path.join(home, ".codex", "skills"), path.join(home, ".claude", "skills")];
  }

  fail(`unknown target "${target}". Use codex, claude, both, or --dir.`);
}

function copySkill(skill, targetRoot, force) {
  const destination = path.join(targetRoot, skill.name);

  if (fs.existsSync(destination)) {
    if (!force) {
      fail(`${skill.name} already exists at ${destination}. Re-run with --force to replace it.`);
    }
    fs.rmSync(destination, { recursive: true, force: true });
  }

  fs.mkdirSync(targetRoot, { recursive: true });
  fs.cpSync(skill.dir, destination, {
    recursive: true,
    filter: (source) => !source.endsWith(".DS_Store"),
  });

  console.log(`Installed ${skill.name} -> ${destination}`);
}

function listSkills(skills) {
  if (!skills.length) fail(`no skills found under ${skillsRoot}`);
  for (const skill of skills) {
    console.log(`${skill.name}\t${skill.rel}`);
  }
}

const command = args[0];
const skills = discoverSkills();

if (!command || command === "help" || command === "--help" || command === "-h") {
  usage();
  process.exit(0);
}

if (command === "list") {
  listSkills(skills);
  process.exit(0);
}

if (command !== "install") {
  usage();
  fail(`unknown command "${command}"`);
}

const requested = args[1];
if (!requested || requested.startsWith("--")) fail("install requires a skill name or all");

const selected =
  requested === "all" ? skills : skills.filter((skill) => skill.name === requested);

if (!selected.length) {
  listSkills(skills);
  fail(`skill "${requested}" was not found`);
}

const force = hasFlag("--force");
for (const targetRoot of targetDirs()) {
  for (const skill of selected) {
    copySkill(skill, targetRoot, force);
  }
}
