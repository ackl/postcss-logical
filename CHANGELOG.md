# Changes to PostCSS Logical Properties

### 5.0.3
- Fixed: allow use with styled-components props interpolation values

### 5.0.2
- Fixed: allow use with nested @media queries

### 5.0.1
- put [dir] attr selector at beginning of selector chain

### 5.0.0
- Fixed: allow use with jsx syntax

### 4.0.2 (June 10, 2019)

- Fixed: Restored transforms for `max-block-size`, `max-inline-size`,
  `min-block-size`, and `min-inline-size`.

### 4.0.1 (June 10, 2019)

- Fixed: An issue with `block-size` and `inline-size` being miscalculated.

### 4.0.0 (June 5, 2019)

- Added: Logical border-radius properties, which include
  `border-end-end-radius`, `border-end-start-radius`, `border-start-end-radius`,
  and `border-start-start-radius`.
- Removed: All unknown logical properties, which include `border-end`,
  `border-end-color`, `border-end-style`, `border-end-width`, `border-start`,
  `border-start-color`, `border-start-style`, `border-start-width`, `inset-end`,
  `inset-start`, `margin-end`, `margin-start`, `padding-end`, `padding-start`
  and `border` with `logical`.
- Updated: `transition` and `transition-property` to support the changes.
- Updated: `postcss` to 7.0.16 (patch)
- Updated: Node 8+ compatibility (major)

### 3.0.0 (September 20, 2018)

- Added: Support for logical properties within `transition` and
  `transition-property`.
- Changed: Physical rule fallbacks are written as full selectors rather than
  as nesting selectors.

### 2.0.0 (September 17, 2018)

- Updated: Support for PostCSS v7+
- Updated: Support for Node v6+

### 1.1.1 (March 21, 2017)

- Fix `dir` option to allow falsey value

### 1.1.0 (March 20, 2017)

- Add `preserve` option to preserve logical properties and values

### 1.0.2 (Aug 15, 2017)

- Improve flow-relative clear support

### 1.0.1 (Aug 13, 2017)

- Improve flow-relative border support

### 1.0.0 (Aug 8, 2017)

- Initial version
