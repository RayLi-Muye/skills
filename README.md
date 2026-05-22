# Skills

Personal agent skills for repeatable workflows.

## Install

Recommended: install through the open `skills` CLI:

```bash
npx skills@latest add RayLi-Muye/skills -g -a codex -s replicate-3d-website
```

List available skills without installing:

```bash
npx skills@latest add RayLi-Muye/skills --list
```

Install to Claude Code instead:

```bash
npx skills@latest add RayLi-Muye/skills -g -a claude-code -s replicate-3d-website
```

Package-specific installer:

```bash
npx github:RayLi-Muye/skills list
npx github:RayLi-Muye/skills install replicate-3d-website --target codex
npx rayli-skills list
npx rayli-skills install replicate-3d-website --target codex
```

The official `skills` CLI is preferred for multi-agent installs and updates. The `rayli-skills` package is a small fallback installer for this repository only.

Update skills installed through `skills`:

```bash
npx skills@latest update replicate-3d-website -g
```

## Structure

- `skills/visual/` - visual and frontend workflow skills
- `.claude-plugin/plugin.json` - plugin manifest for skill installers that understand Claude-style skill repositories
- `bin/rayli-skills.js` - npm/npx installer for copying skills into Codex or Claude skill directories
- `LICENSE` - MIT license

## Skills

- [`replicate-3d-website`](./skills/visual/replicate-3d-website/SKILL.md) - analyze and recreate high-fidelity 3D/WebGL website effects with scoped goals and Three.js prototypes.

## License

MIT
