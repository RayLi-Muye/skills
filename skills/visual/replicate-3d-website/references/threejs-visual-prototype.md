# Three.js Visual Prototype Patterns

## Preferred Structure

Use small modules:

- `layout/`: seeded positions, graph/tree/radial layout
- `particles/`: particle attributes and count presets
- `render/`: scene, camera, renderer, shaders
- `events/`: event particles, path activation, state changes
- `controls/`: UI controls and camera interaction
- `calibration/`: reference overlay and screenshots

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

## Visual Calibration

Always support:

- Fixed seed
- Fixed camera state
- Named visual presets so successful looks can be recovered
- Reference overlay or side-by-side screenshot
- Screenshot export
- Density controls such as `5k / 10k / 20k / 40k`
- A mismatch ledger after visual QA: mismatch, evidence, fix, or intentional deviation

## Common Failure Modes

- Additive blending with black particles makes them disappear on white backgrounds. Use normal blending for black-on-white point clouds.
- Random layouts without fixed seed cannot be tuned.
- Successful screenshots without saved seed/camera/preset cannot be reproduced.
- Continuous `Line` geometry used for independent segments creates incorrect spaghetti lines. Use `LineSegments`.
- Per-frame CPU updates of all positions can bottleneck; move stable motion to shader uniforms/attributes.
- UI chrome can hide the scene; verify against the reference viewport.

## Verification Checklist

- Build/type check passes.
- WebGL context exists in browser.
- Default particle count renders.
- Highest intended density does not collapse.
- Play/pause and trigger event work.
- Drag/zoom camera works.
- Reference overlay works.
- Screenshot export works.
- Desktop and mobile viewports have no clipped critical controls.
- Use `view_image` on reference and implementation screenshots before final handoff.
