# Implementation Ladder

Use this when selecting how far to push the technical implementation. The skill's job is to reproduce a visual effect, not to use the most advanced renderer by default.

## Visual Decomposition

Describe the reference in this order before coding:

- Composition: viewport framing, empty space, focal points, camera angle
- Geometry: points, lines, meshes, surfaces, labels, UI chrome
- Distribution: clusters, branches, fields, density gradients, outliers
- Motion: ambient drift, pulses, event bursts, trails, camera motion
- Rendering: color, alpha, point size, blending, post-processing, depth
- Interaction: drag, zoom, hover, click, scroll, timeline, triggers
- Constraints: target FPS, particle count, browser/device, mobile behavior

## Path A: CPU/Layout Prototype

Use for static or low-count scenes:

- Seeded layout generation
- `BufferGeometry` populated once
- Shader uniforms for time-based breathing
- CPU only for controls, event spawning, and coarse state changes

Exit when composition and geometry are visibly close.

## Path B: WebGL Shader Prototype

Default path for 85%-90% fidelity:

- `BufferGeometry` plus custom attributes
- `ShaderMaterial` for point size, alpha, motion, circular sprites, and color
- Instanced meshes for large repeated nodes
- `LineSegments` or tubes for independent links/trails
- Post-processing only if the reference depends on glow, blur, depth, or grading

Exit when the golden screenshot, motion character, and density tiers hold up.

## Path C: WebGL GPGPU Feedback

Escalate here when shader-only motion looks fake or CPU updates bottleneck:

- Store particle position, velocity, target, and state in textures or floating buffers
- Use ping-pong render targets, `DataTexture`, or `GPUComputationRenderer`
- Keep CPU readback rare; use it only for labels, picking, or debug
- Preserve deterministic seeds and presets so the result remains tunable

Require capability checks for float textures/render targets and a reduced-density fallback.

## Path D: WebGPU/TSL Compute

Use only when the effect needs heavy compute and the user accepts browser-support tradeoffs:

- Check `navigator.gpu`, adapter availability, and required limits/features
- Keep a WebGL or reduced fallback when possible
- Save app state needed to recreate the scene after GPU/device loss
- Prefer small compute examples/spikes before rewriting the whole scene

Avoid WebGPU if the target is mainly visual parity on broad browsers and WebGL can meet the fidelity target.

## Companion Knowledge

When exact Three.js details are needed, load only the narrow domain material:

- Scene/camera/renderer setup: fundamentals
- Point clouds, custom geometry, instancing: geometry
- GLSL, uniforms, sprite shaping, displacement: shaders
- Procedural motion and clips: animation
- Bloom, DOF, grading, screen passes: postprocessing
- Controls, raycasting, picking: interaction

Do not paste broad API tutorials into the reproduction skill.
