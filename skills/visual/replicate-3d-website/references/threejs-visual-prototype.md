# Three.js Visual Prototype Patterns

## Preferred Structure

Use small modules:

- `layout/`: seeded positions, graph/tree/radial layout
- `particles/`: particle attributes and count presets
- `render/`: scene, camera, renderer, shaders
- `events/`: event particles, path activation, state changes
- `controls/`: UI controls and camera interaction
- `calibration/`: reference overlay and screenshots
- `capabilities/`: WebGL/WebGPU support checks and fallback density
- `metrics/`: FPS, particle count, render path, debug toggles

## Particle Rendering

For thousands of points:

- Use one `BufferGeometry` for ambient particles.
- Store per-particle attributes such as anchor, seed, size, amplitude, cluster id, target id.
- Use `ShaderMaterial` and `gl_PointSize`.
- In fragment shader, discard outside `gl_PointCoord` circle.
- Avoid one Mesh per particle.

For larger or feedback-driven systems:

- Use `DataTexture` for `position / velocity / target / state`.
- Use ping-pong render targets or `GPUComputationRenderer`.
- Read back only for labels/picking when necessary.

If using WebGPU:

- Check adapter availability and required limits before initializing the main scene.
- Preserve enough state to recreate the scene after device loss.
- Keep a WebGL or reduced-density fallback unless the user accepts WebGPU-only.

## Motion Design

Separate motion layers so they can be tuned independently:

- Ambient: breathing, curl/noise drift, slight orbital or anchor-relative motion
- Event: fast particles, radial bursts, path activation, fading trails
- Camera: slow drift or user-controlled movement; avoid hiding golden-shot framing
- State: presets and seed must recover the same visual after reload

## Visual Calibration

Always support:

- Fixed seed
- Fixed camera state
- Named visual presets so successful looks can be recovered
- Reference overlay or side-by-side screenshot
- Screenshot export
- Density controls such as `5k / 10k / 20k / 40k`
- Current render path display: WebGL shader, WebGL GPGPU, WebGPU, or fallback
- A mismatch ledger after visual QA: mismatch, evidence, fix, or intentional deviation

## Common Failure Modes

- Additive blending with black particles makes them disappear on white backgrounds. Use normal blending for black-on-white point clouds.
- Random layouts without fixed seed cannot be tuned.
- Successful screenshots without saved seed/camera/preset cannot be reproduced.
- Continuous `Line` geometry used for independent segments creates incorrect spaghetti lines. Use `LineSegments`.
- Per-frame CPU updates of all positions can bottleneck; move stable motion to shader uniforms/attributes.
- UI chrome can hide the scene; verify against the reference viewport.
- WebGPU-only prototypes can fail silently on unsupported browsers; show a clear fallback state.
- Dense post-processing can make a composition look "premium" while reducing reference fidelity; add it only when the reference needs it.

## Verification Checklist

- Build/type check passes.
- WebGL context exists in browser.
- Preferred GPU path and fallback path are visible or testable.
- Default particle count renders.
- Highest intended density does not collapse.
- Play/pause and trigger event work.
- Drag/zoom camera works.
- Reference overlay works.
- Screenshot export works.
- Desktop and mobile viewports have no clipped critical controls.
- Use `view_image` on reference and implementation screenshots before final handoff.
