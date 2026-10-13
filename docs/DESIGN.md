---
name: Dev/Null
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#303031'
  secondary-container: '#464747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#342f2d'
  tertiary-container: '#eae1dd'
  on-tertiary-container: '#696360'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#eae1dd'
  tertiary-fixed-dim: '#cec5c1'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: JetBrains Mono
    fontSize: 4rem
    fontWeight: '500'
    lineHeight: 4.5rem
    letterSpacing: -0.05em
  display-xl-mobile:
    fontFamily: JetBrains Mono
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.02em
  title-sm:
    fontFamily: JetBrains Mono
    fontSize: 1rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1rem
    letterSpacing: 0.08em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.12em
spacing:
  gutter: 1px
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style
This design system embodies an uncompromising intersection of minimalist streetwear and utility-focused techwear, tailored specifically for software engineers. The design movement is technical brutalism refined through Japanese minimalism—austere, engineered, and mathematically precise. 

The aesthetic evokes the quiet focus of an advanced terminal environment late at night: calm, confident, restrained, and intentional. Every element exists by function or structural necessity. There are no ornamental flourishes, decorative drop-shadows, or artificial gradients. Contrast is achieved purely through typographic scale, razor-thin wireframe framing, and deliberate negative space. The UI treats garments not as fashion whims, but as wearable specifications and compiled artifacts.

## Colors
The palette is strictly achromatic, mirroring a high-contrast dark code editor. No chromatic hues or saturated accents are permitted under any circumstance; state changes and highlights must rely exclusively on luminance inversion and value shifts.

- **Canvas Base (`#0D0D0D`):** Deep void black for the primary viewport background.
- **Surface Elevation 1 (`#141414`):** Subdued dark gray for cards, drawer panels, and structural sidebars.
- **Surface Elevation 2 (`#1A1A1A`):** Interactive inputs, active row fills, and hovered surfaces.
- **Structural Border (`#2A2A2A`):** Universal 1px boundary stroke used for dividers, containers, and data cells.
- **Primary Text (`#F2F2F2`):** Pure off-white for headers, terminal tags, primary actions, and key values.
- **Secondary / Meta Text (`#8A8A8A`):** Neutral mid-gray for labels, syntax comments, and narrative descriptions.
- **Subtle / Ghost Text (`#4A4A4A`):** Disabled states, grid line anchors, and inactive index numbers.
- **Inverted State (`#F2F2F2` background with `#0D0D0D` text):** Reserved exclusively for active selection states and solid primary button fills.

## Typography
Typographic rhythm balances raw machine logic with clean editorial readability through a deliberate dual-font architecture:

- **JetBrains Mono:** Governs all machine-like semantics—display headlines, structural navigation, product codes, SKU identifiers, monetary prices, technical specs, tab titles, and interactive trigger elements. Render headers in lowercase or clean uppercase with tight tracking to simulate code tokens.
- **Inter:** Reserved for long-form narrative, fabric composition breakdowns, care guidelines, and human-readable body copy. It prevents visual fatigue over extended reading sessions while maintaining a clean, neutral modernist baseline.

Labels and annotations should routinely feature code formatting syntax (e.g., `// 001`, `[spec_02]`, `NULL_SET_v1.0`) to reinforce the architectural, developer-centric lineage.

## Layout & Spacing
The layout relies on a strict, boundary-defined structural grid derived from blueprint drafting tables and code-splitting panes.

- **Grid Architecture:** 12-column layout on desktop screens (>1024px), 8-column layout on tablet screens (768px–1023px), and a 4-column stack on mobile viewports (<767px).
- **Partition Dividers:** For product grids and specs, columns and rows are separated directly by crisp `1px` lines (`#2A2A2A`), creating a seamless mosaic of bordered quadrants where elements share mutual borders without gaps.
- **Negative Space:** Outer layouts feature generous, architectural breathing room (`space-2xl` to `space-3xl`) around typography and imagery, juxtaposing raw wireframe tightness inside the product containers with spacious macro framing.
- **Vertical Rhythm:** Content clusters should align strictly on an 8px base module (multiples of `0.5rem`), ensuring uniform vertical scans.

## Elevation & Depth
This system is completely planar. Drop shadows, directional blurs, frosted translucent filters, and 3D skeuomorphic extrusions are entirely prohibited.

- **Structural Borders:** Depth is communicated exclusively through clean `#2A2A2A` 1px line networks. Contained zones use these razor borders to delineate themselves against the `#0D0D0D` canvas.
- **Tonal Stepping:** Surfaces that sit forward in the visual hierarchy (e.g., flyout terminal drawers, command palettes, product inspection panels) shift from `#0D0D0D` to `#141414` or `#1A1A1A`.
- **Active Focus:** Focus or hover states are signaled by upgrading border color from `#2A2A2A` to `#F2F2F2`, or inverting the surface fill completely to solid `#F2F2F2` with `#0D0D0D` content.
- **Layer Overlays:** Modals and code trays anchor to the viewport edge via full-height drawer architecture with an uncompromising opaque background (`#0D0D0D`) and a single `#2A2A2A` perimeter divider.

## Shapes
Every component features completely unyielding, razor-sharp edges (`border-radius: 0`). 

- Curves, rounded pills, and softened corners do not exist anywhere in this system.
- Images, buttons, containers, text fields, chips, and overlays must be rendered as clean rectangles or squares.
- Visual variety is achieved through geometric proportions (e.g., golden ratio boxes, precise 1:1 square media cells, long horizontal divider strips) and hairline decorative corner notches or bracket motifs (`[ ]`), never through radii.

## Components

### Buttons
- **Primary:** Solid `#F2F2F2` background with `#0D0D0D` monospaced text. 0px border radius, uppercase or strict lowercase token formatting (e.g., `[ INITIALIZE_CHECKOUT ]`). Hover state drops opacity to `0.85` or inverts to a transparent fill with a `#F2F2F2` 1px solid border.
- **Secondary / Ghost:** `#0D0D0D` background, `#2A2A2A` 1px border, `#F2F2F2` text. Hover state shifts border to `#F2F2F2`.
- **Dimensions:** High-density padding (`space-xs` vertical, `space-md` horizontal). All actions retain sharp corners.

### Chips & Badges
- Encased in 1px `#2A2A2A` borders. Background `#141414`.
- Typographic style: `label-code` (JetBrains Mono).
- Often prefixed with code comment slashes or bracketed numbers: `// OUT_OF_STOCK`, `[ WATERPROOF: 20K ]`, `VER_2.4`.

### Lists & Tables
- Border-collapse grid logic with 1px `#2A2A2A` horizontal rules dividing entries.
- Row hover states trigger an immediate shift from `#0D0D0D` to `#141414`.
- Left-aligned metadata indexed with zero-padded monospaced counter columns (e.g., `01`, `02`, `03`).

### Checkboxes & Radios
- **Checkboxes:** Sharp 14px × 14px square, 1px `#2A2A2A` border. Checked state renders a solid `#F2F2F2` square or an internal solid crosshair (`X`), with no curved checkmarks.
- **Radio Buttons:** Sharp 14px × 14px square (never circular), containing a centered 6px solid square when active.

### Input Fields
- Flat `#0D0D0D` or `#141414` fill with a persistent 1px `#2A2A2A` border.
- Active/focus state snaps the border instantly to `#F2F2F2` with zero glow/box-shadow.
- Text rendered in JetBrains Mono. Blinking cursor is a solid rectangular block rather than a thin vertical bar.
- Metadata labels sit outside the field top-left in uppercase `label-caps` (`#8A8A8A`).

### Product & Content Cards
- Bordered modular cells (`#2A2A2A`) with 0px corner radius.
- Imagery framed within 1:1 or 4:5 aspect ratio containers, featuring minimal high-contrast monochrome apparel photography against dark neutral settings.
- Card footer sectioned off by a horizontal 1px rule containing title, technical spec tags, and price in JetBrains Mono.

### Technical Callouts & Terminal Drawers
- Dedicated metadata panels for technical specs (e.g., Schoeller® fabric weight, seam-taping grades, pocket configurations).
- Outlined with hairline borders, utilizing collapsible trees formatted like JSON or shell terminal logs.