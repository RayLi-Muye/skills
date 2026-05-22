---
name: replicate-3d-website
description: Analyzes visually rich 3D/WebGL reference websites and turns them into scoped reproduction goals, technical plans, and runnable Three.js/Vite prototypes. Use when the user wants to recreate, study, approximate, or build a similar 3D website effect such as point clouds, particles, shader scenes, spatial timelines, or interactive WebGL visuals.
---

# Replicate 3D Website

Turn a reference 3D site into a bounded visual reproduction plan and prototype. Optimize for visual fidelity while avoiding private source, proprietary assets, and brand copying.

## Workflow

1. **Inspect**
   - Browse/fetch the reference page, assets, CSS, JS bundles, network requests, console logs, and screenshots.
   - Try sourcemaps. If unavailable, say so and infer implementation from public artifacts only.
   - Identify the stack: Three.js, Babylon, Pixi, raw WebGL, Canvas, SVG, CSS, or hybrid.

2. **Define the visual contract**
   - Capture reference screenshots.
   - Name the must-match qualities: composition, density, geometry, motion, camera, controls, theme, and performance.
   - Separate visual behavior from replaceable data/content.
   - Record source/licensing boundaries before implementation.

3. **Grill the goal**
   Ask one decision at a time until scope is unambiguous:
   - Fidelity target: 70%, 85%-90%, or 95%+.
   - Visual engine only vs full product/site.
   - Desktop-first vs mobile parity.
   - Mock/synthetic/real data.
   - Shader-driven approximation vs GPGPU feedback simulation.
   - 3D checkpoint first vs full UI.
   - Acceptance: golden screenshot, reference overlay, FPS, density tiers.

4. **Spike before building**
   - Build the smallest risky visual first: shader, particle field, camera, or motion model.
   - Use fixed seed, fixed camera, reference overlay, and screenshot export from the start.
   - Stop and escalate if the spike cannot reach the agreed visual direction.

5. **Implement**
   - Default stack: Vite + TypeScript + Three.js.
   - Use `BufferGeometry`, `ShaderMaterial`, instancing, or `DataTexture`; avoid one object per particle.
   - Expose controls for seed, density, play/pause, event trigger, reference overlay, and screenshot.

6. **Verify**
   - Run build/type checks.
   - Compare reference and implementation screenshots with `view_image`.
   - Check desktop 16:9, mobile viewport, WebGL availability, FPS, density tiers, and core interactions.
   - Write a short mismatch ledger: what differs, what was fixed, what remains intentional.

## Rules

- Do not overbuild real data when the user mainly wants the visual effect.
- Start shader-driven for 85%-90% fidelity; reserve GPGPU for failed checkpoints or scale/performance limits.
- Prefer deterministic presets over random-only visuals.
- Keep reusable prototypes modular: layout, particles, render, events, controls, calibration.

## References

- Goal template: [references/goal-template.md](references/goal-template.md)
- Three.js patterns/checklist: [references/threejs-visual-prototype.md](references/threejs-visual-prototype.md)
