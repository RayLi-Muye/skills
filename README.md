# Skills

Personal agent skills for repeatable workflows.

## Install

Install directly from GitHub:

```bash
npx github:RayLi-Muye/skills install replicate-3d-website --target codex
```

Other targets:

```bash
npx github:RayLi-Muye/skills install replicate-3d-website --target claude
npx github:RayLi-Muye/skills install all --target both --force
npx github:RayLi-Muye/skills list
```

After this package is published to npm as `rayli-skills`, the shorter form will also work:

```bash
npx rayli-skills install replicate-3d-website --target codex
```

## Structure

- `skills/visual/` - visual and frontend workflow skills
- `.claude-plugin/plugin.json` - plugin manifest for skill installers that understand Claude-style skill repositories
- `bin/rayli-skills.js` - npm/npx installer for copying skills into Codex or Claude skill directories

## Skills

- [`replicate-3d-website`](./skills/visual/replicate-3d-website/SKILL.md) - analyze and recreate high-fidelity 3D/WebGL website effects with scoped goals and Three.js prototypes.
