# 3D Website Reproduction Goal Template

Use this template after the reference has been inspected and the user has answered key scope questions.

## Development Goal

Develop a high-fidelity 3D visual prototype inspired by `[reference]`, without copying private source, branding, or proprietary assets. The target is `[fidelity target]` subjective visual similarity focused on `[primary visual effect]`, with `[device target]` as the primary runtime.

## Scope

- Rendering stack: `Vite + TypeScript + Three.js`
- Data: `[mock / synthetic structured / real]`
- Output: `[visual prototype / reusable component / production page]`
- Default theme: `[black-white / dark-color / branded]`
- Interaction: `[drag, zoom, play, trigger event, filters, search]`

## Milestone 1: Visual Checkpoint

Deliver the core 3D scene before full UI:

- Deterministic seeded layout
- Fixed camera "golden shot"
- Source/licensing boundary noted
- Core geometry/particles/nodes/lines
- Primary motion model
- Minimal controls: play/pause, trigger event, seed, density
- Reference overlay or side-by-side comparison
- Screenshot export
- Short mismatch ledger after each visual pass

Acceptance:

- Subjective similarity: `[target]%`
- Default particle count: `[count]`
- FPS target: `[fps]`
- Fixed camera screenshot visually matches the reference composition

## Milestone 2: Interaction/Data System

- Implement event/data model
- Connect controls to visual state
- Add richer path/particle transitions
- Add theme and parameter presets

## Milestone 3: Reusable Packaging

- Encapsulate engine as a class/component
- Document input API and theme options
- Add responsive and reduced-density modes
- Verify build, desktop, mobile, and screenshot output

## Phase 2 Escalation

Escalate from shader-driven animation to GPGPU feedback simulation if:

- Motion feels like static jitter, not an organic system
- Event particles do not blend into the scene
- CPU updates bottleneck particle scale
- The fixed screenshot is below the agreed fidelity target
- The user explicitly rejects the checkpoint as "not close enough"
