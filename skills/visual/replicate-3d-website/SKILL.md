---
name: replicate-3d-website
description: Coordinates reference-driven reproduction of visually rich 3D/WebGL websites into scoped visual goals, technical paths, and runnable Three.js/Vite prototypes. Use when the user wants to recreate, study, approximate, or build a similar 3D website effect such as point clouds, particle systems, shader scenes, spatial timelines, WebGPU/GPGPU visuals, or interactive WebGL compositions.
---

# Replicate 3D Website

Turn a reference 3D site into a bounded visual reproduction plan and prototype. This is a visual reproduction coordinator, not a general Three.js API reference. Optimize for fidelity, measurable checkpoints, and legal/source boundaries.

## Workflow

1. **Collect evidence**
   - Browse/fetch the reference page, assets, CSS, JS bundles, network requests, console logs, and screenshots.
   - Capture screenshots and, when motion matters, short screen recordings or frame observations.
   - Try sourcemaps. If unavailable, say so and infer from public artifacts only.
   - Identify the stack: Three.js, Babylon, Pixi, raw WebGL, Canvas, SVG, CSS, or hybrid.

2. **Define the visual contract**
   - Name the must-match qualities: composition, density, geometry, motion, camera, controls, theme, and performance.
   - Separate visual behavior from replaceable data/content.
   - Record source/licensing boundaries before implementation: what can be inspected, inspired by, reused, or must be replaced.
   - Fix seed, viewport, camera, density tier, and golden screenshot for acceptance.

3. **Grill the goal**
   Ask one decision at a time until scope is unambiguous:
   - Fidelity target: 70%, 85%-90%, or 95%+.
   - Visual engine only vs full product/site.
   - Desktop-first vs mobile parity.
   - Mock/synthetic/real data.
   - Shader-driven approximation vs GPGPU feedback simulation.
   - 3D checkpoint first vs full UI.
   - Acceptance: golden screenshot, reference overlay, FPS, density tiers.

4. **Choose the technical ladder**
   - Default to WebGL + `BufferGeometry` + `ShaderMaterial` for 85%-90% visual fidelity.
   - Escalate to WebGL GPGPU/DataTexture when feedback motion, particle memory, or scale demands it.
   - Use WebGPU/TSL only when the target effect truly needs compute or the user accepts browser-support tradeoffs.
   - For exact API details, use only the relevant Three.js domain reference/skill: fundamentals, geometry, shaders, animation, postprocessing, or interaction.

5. **Spike before building**
   - Build the smallest risky visual first: shader, particle field, camera, or motion model.
   - Use fixed seed, fixed camera, reference overlay, and screenshot export from the start.
   - Stop and escalate if the spike cannot reach the agreed visual direction.

6. **Implement**
   - Default stack: Vite + TypeScript + Three.js.
   - Split modules by visual responsibility: layout, particles, render, motion/events, controls, calibration, capabilities, metrics.
   - Use `BufferGeometry`, `ShaderMaterial`, instancing, `DataTexture`, or render-target ping-pong; avoid one object per particle.
   - Expose controls for seed, preset, density, play/pause, event trigger, reference overlay, and screenshot.

7. **Verify**
   - Run build/type checks.
   - Compare reference and implementation screenshots with `view_image`.
   - Check desktop 16:9, mobile viewport, GPU capability fallback, FPS, density tiers, and core interactions.
   - Write a short mismatch ledger: what differs, what was fixed, what remains intentional.

## Rules

- Do not overbuild real data when the user mainly wants the visual effect.
- Start shader-driven for 85%-90% fidelity; reserve GPGPU for failed checkpoints or scale/performance limits.
- Prefer deterministic presets over random-only visuals.
- Treat UI and data as supporting surfaces unless the user explicitly asks for product parity.
- Keep `SKILL.md` lean; put implementation ladders, templates, and checklists in references.

## References

- Goal template: [references/goal-template.md](references/goal-template.md)
- Implementation ladder: [references/implementation-ladder.md](references/implementation-ladder.md)
- Three.js patterns/checklist: [references/threejs-visual-prototype.md](references/threejs-visual-prototype.md)
