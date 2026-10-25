---
name: Neon Next Generation
description: Australian VPS, containers and web hosting in the incumbent near-black violet identity, refined for scanning and purchase.
colors:
  ground: "#050208"
  surface: "#0d0a14"
  raised: "#130f1d"
  raised-2: "#1a1527"
  border: "rgb(140 120 200 / 0.16)"
  border-strong: "rgb(155 93 229 / 0.38)"
  fg: "#f0f0fa"
  fg-2: "#c9c3dc"
  muted: "#9a93b0"
  lavender: "#d4c8ef"
  violet: "#9b5de5"
  violet-deep: "#7b2ff2"
  violet-glow: "#b47aff"
  green: "#34d399"
  amber: "#fbbf24"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  display-page:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6.5vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  price:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "tnum"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.375
  prose:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.9
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  card: "20px"
  xl: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "56px"
  section: "96px"
  section-lg: "128px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.violet-deep}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hero:
    backgroundColor: "{colors.violet-deep}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-ghost:
    backgroundColor: "rgb(155 93 229 / 0.08)"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "rgb(155 93 229 / 0.16)"
  button-sold-out:
    backgroundColor: "rgb(251 191 36 / 0.05)"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    height: "48px"
  card:
    backgroundColor: "{colors.raised-2}"
    rounded: "{rounded.card}"
    padding: "24px"
  spec-cell:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  status-pill-available:
    backgroundColor: "rgb(52 211 153 / 0.12)"
    textColor: "{colors.green}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  status-pill-out-of-stock:
    backgroundColor: "rgb(251 191 36 / 0.12)"
    textColor: "{colors.amber}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  tab-list:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "6px"
  tab-active:
    backgroundColor: "{colors.violet-deep}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 20px"
  tab-inactive:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 20px"
  nav-link-active:
    backgroundColor: "rgb(155 93 229 / 0.15)"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link:
    textColor: "{colors.fg-2}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
---

# Design System: Neon Next Generation

## Overview

**Creative North Star: "The Original, Done Properly"**

The incumbent Neon Next Generation identity, kept by decision and refined: a near-black violet ground, brand violet from the fox logo, a green secondary and amber reserved for stock and schedule warnings. A returning customer recognises it immediately; what changed is rhythm and legibility. Every section of a page owns its own soft radial glow wash, so the page reads as a sequence of distinct places inside one brand rather than one undifferentiated dark scroll.

The density is commercial and scannable. Plan cards are the unit of purchase, and each carries a three-cell spec strip (vCPU, RAM, NVMe) and an AU$ price set large in tabular numerals so plans compare at a glance. Product evidence is real or labelled: the hosting-panel window is an illustrative mock and is captioned as such; the deploy terminal is an example run. Proof is specs, prices, stock status, hardware partners, the real team and the Discord community, never invented ratings or counts.

Confirmed rejections: the "Harbour Light Festival" world (condensed display face, square corners, projector colours) and the generic white SaaS template.

**Key Characteristics:**
- Near-black violet ground (#050208) with tonal surfaces, never a light theme.
- Inter throughout; uppercase, tight-tracked display headings with a solid lavender second line.
- One gradient word on the whole site: "hosting" in the home hero.
- A distinct radial glow wash per section, separated by a violet-to-green hairline.
- Translucent glass cards (20px) with hairline violet borders; pill buttons, tabs and status chips.
- Green means available or done, amber means out of stock, planned or a warning figure.

## Colors

A dark, single-hue violet world with green as the secondary voice and amber held back for status.

### Primary
- **Fox Violet** (violet): the brand colour. Ghost-button tint and border, active nav and tab tints, selection highlight, section-wash glow, hero grid lines, in-progress roadmap state.
- **Deep Ultraviolet** (violet-deep): start of the primary gradient (deep to Fox Violet at 135deg) on primary buttons, active tabs and the "Most popular" badge; the main glow colour for shadows and washes.
- **Glow Lilac** (violet-glow): icon tint in spec cells, inline links, prose links, focus outline, pulsing announcement dot.

### Secondary
- **Uptime Green** (green): "Available" status pills, feature checkmarks, completed roadmap items, terminal prompt and success lines, community perk icons, the cool counter-glow in infra, community and page washes.

### Tertiary
- **Stock Amber** (amber): out-of-stock pills and the disabled sold-out button, "Planned" / coming-soon roadmap and FAQ notes, and the terminal's ready-time figure. Nothing decorative.

### Neutral
- **Void** (ground): page background, scrollbar track, spec-cell fill at 60%.
- **Night Surface** (surface): footer, tab-list track, the darker end of section washes.
- **Raised** / **Raised 2** (raised, raised-2): panel-mock tiles, active billing toggle, glass-card gradient stops.
- **Hairline** (border) and **Hairline Lit** (border-strong): all card and divider borders; the lit value on hover.
- **Starlight** (fg): headings and primary text. **Mist** (fg-2): ledes, feature lists, prose body. **Dusk** (muted): captions, labels, secondary metadata.
- **Lavender** (lavender): the second line of every display and section heading.

### Named Rules
**The One Gradient Word Rule.** Gradient text (pale lilac #c9a4ff into Fox Violet into Uptime Green, 100deg) appears exactly once: the word "hosting" in the home hero. Every other heading accent is solid Lavender.

**The Status Colour Rule.** Green is available, completed or online; amber is out of stock, planned, coming soon or a warning figure; violet is in progress. Never swap them, never use amber decoratively.

## Typography

**Display Font:** Inter (with ui-sans-serif, system-ui)
**Body Font:** Inter (with ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono, only for terminal output, the panel mock's server IDs, Discord channel names and the invite link.

**Character:** One family carrying everything, from heavy uppercase display to quiet 14px feature lists; the mono face appears only where the content is literally code or machine output.

### Hierarchy
- **Display** (700, clamp(2.3rem, 4.5vw, 4rem), 1.04, uppercase, -0.025em, balanced wrap): home hero headline.
- **Display, page** (700, clamp(2.25rem, 6.5vw, 4.75rem)): inner-page heroes (Pricing, About, Roadmap, FAQ, Contact, Legal).
- **Headline** (700, clamp(2.25rem, 4.6vw, 3.75rem)): section headings, first words in Starlight, accent word in Lavender.
- **Price** (700, 44px, tabular): plan price, preceded by a 14px "AU$" and followed by a 14px muted "/mo".
- **Title** (700, 19px, tight): plan names and card titles.
- **Lede** (400, 18px, 1.625): hero and section intros in Mist, max about 36rem.
- **Body** (400, 15px / 14px): card copy, feature lists, contact rows. Prose (FAQ, legal) runs at 1.75 line height in Mist with Starlight bold.
- **Label** (600-700, 11px, uppercase, 0.05em tracking): status pills and the popular badge only.
- **Mono** (400, 12.5-13px, 1.9): terminal lines.

### Named Rules
**The Two-Tone Heading Rule.** Display and section headings are uppercase Inter 700 with the final word or phrase in solid Lavender; never a second weight, never a second family.

**The Tabular Figures Rule.** Prices, spec values and stats always set in tabular numerals.

## Layout

A 1280px container with 16 / 24 / 32px gutters at mobile / sm / lg. Sections stack full-bleed with 96px vertical padding, 128px at lg; each section begins with a 1px violet-to-green hairline divider and carries its own wash. The home hero is a 12-column split (6 / 6): headline, lede, two pill CTAs and an inline facts row on the left; panel mock on the right with the deploy terminal overlapping its lower edge (offset right on desktop) and the "illustrative preview" caption beneath, stacking to one column below lg. Plan grids run 1 / 2 / 3 columns (md / xl) with 24px column and 40px row gaps so the badge that overhangs each popular card never collides. Section headings centre on persuasion bands and left-align beside a companion figure in two-column bands (community, contact). Partner chips run as two opposing edge-masked marquees.

## Elevation & Depth

Depth is light, not shadow: glow washes behind sections, translucent glass cards with a 10px backdrop blur, and violet-tinted diffuse shadows that read as emitted light. Cards sit flat at rest and lift on hover.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 24px 48px -24px rgb(123 47 242 / 0.45)` with translateY(-4px) and border-strong): hover state for interactive cards.
- **Popular ring** (`box-shadow: 0 0 0 1px rgb(155 93 229 / 0.25), 0 30px 70px -30px rgb(123 47 242 / 0.7)`, border at violet 60%): the one featured plan card per grid.
- **Primary button glow** (`box-shadow: 0 10px 30px -10px rgb(123 47 242 / 0.8)`, hover `0 16px 40px -12px rgb(123 47 242 / 0.95)`).
- **Active tab glow** (`box-shadow: 0 8px 24px -10px rgb(123 47 242 / 0.9)`).
- **Panel float** (`box-shadow: 0 40px 80px -40px rgb(123 47 242 / 0.6)`): the hero panel mock only.

### Named Rules
**The Own-Atmosphere Rule.** Every section uses a different wash (hero, pricing, infra, community, contact; inner-page heroes share the page wash). Two adjacent sections never share a wash.

**The Coloured Light Rule.** Shadows are always violet-tinted and diffuse with negative spread; no neutral grey drop shadows, no hard offsets.

## Shapes

Soft and consistent. Glass cards are 20px; large framed containers (stat strips, contact directory, Discord card) step up to 24px; window mocks, terminal, FAQ items and partner chips use 16px; spec cells and icon tiles 12px. Everything interactive that is not a card is a full pill: buttons, tabs, nav links, status pills, filter links. Borders are 1px hairlines. A faint 72px violet grid, masked to fade from centre, sits behind the home and page heroes.

## Components

### Buttons
- **Shape:** full pill (999px), 48px tall, 600 weight at 15px; hero CTAs 56px at 16px; header CTA 40px.
- **Primary:** Deep Ultraviolet to Fox Violet gradient (135deg), white text, violet glow shadow. Lifts 1px on hover with a stronger glow. A trailing muted price ("from AU$5.94/mo") may sit inside at normal weight.
- **Ghost:** Fox Violet at 8% fill with a 32% violet border, Starlight text; hover doubles the fill and lights the border fully.
- **Sold out:** amber text, amber 30% border, amber 5% fill, not-allowed cursor, aria-disabled; replaces the CTA on an out-of-stock plan.
- **Focus:** 2px Glow Lilac outline, 3px offset.

### Chips
- **Status pill:** 11px uppercase label, 12% tint of its status colour, status-colour text, optional 6px leading dot. Available green, out of stock amber, in progress violet, planned amber.

### Cards / Containers
- **Corner Style:** 20px (see Shapes for the 16 / 24px steps).
- **Background:** translucent gradient from raised-2 at 72% to surface at 60%, 10px backdrop blur.
- **Shadow Strategy:** flat at rest; Card lift on hover; Popular ring for the featured plan (see Elevation & Depth).
- **Border:** 1px Hairline, Hairline Lit on hover.
- **Internal Padding:** 24px; framed containers 24-32px.

### Plan Card (signature)
The purchase unit. Order: name (19px) with status pill right-aligned; muted tagline; price block (AU$ / 44px tabular figure / period, optional "Starts at"); three-cell spec strip (vCPU, RAM, NVMe: 12px cells on Void at 60%, Glow Lilac icon, 15px semibold value, 12px muted label); full-width CTA (primary on the popular card, ghost otherwise, sold-out variant when out of stock); hairline rule; remaining features with green checks. The popular card carries the Popular ring and a gradient "Most popular" pill overhanging its top edge; out-of-stock cards drop to 80% opacity.

### Plan Switcher
A pill tablist (VPS / Containers / Web hosting) on a Night Surface track with a hairline border; the active tab takes the primary gradient and Active tab glow. Arrow keys move between tabs. Web hosting reveals a secondary monthly / yearly pill toggle whose active state is Raised 2. Switching crossfades the grid with a 450ms fade-up.

### Navigation
A sticky, frosted header: one shared layer of Void at 55% with a heavy backdrop blur and saturation boost behind both the dismissible announcement bar (violet-to-green tinted strip, pulsing lilac dot) and the 64px nav row. Logo and wordmark left, pill nav links centred (14px, Mist; active gets a violet 15% pill fill), Client login and a 40px primary "Get started" right. Below lg, a menu button opens a full-width list with ghost and primary buttons.

### Panel Mock and Deploy Terminal
The hero's product evidence. The panel mock is a 16px glass window with traffic-light chrome, an address bar reading the real panel domain, a sidebar and server tiles with violet / lilac / green usage bars; it always carries a visible caption stating it is an illustrative preview. The terminal is a 16px glass window with a green-dot title bar and JetBrains Mono output: green prompt and success lines, muted progress, amber ready time, blinking caret.

## Do's and Don'ts

### Do:
- **Do** keep the ground at Void (#050208) and build depth with glow washes, glass cards and violet-tinted shadows.
- **Do** give every new section its own radial wash and open it with the violet-to-green hairline divider.
- **Do** set display and section headings uppercase Inter 700 with the accent phrase in solid Lavender (#d4c8ef).
- **Do** present every purchasable plan as a plan card with the vCPU / RAM / NVMe spec strip, an AU$ tabular price and a status pill.
- **Do** caption any product mock with figures that are not live as illustrative.
- **Do** keep JetBrains Mono for literal code, terminal and machine identifiers.
- **Do** respect reduced motion: marquees, caret, pulse dot and grid swap stop; hover lifts flatten.

### Don't:
- **Don't** use gradient text anywhere except the single home-hero word "hosting".
- **Don't** use amber for anything other than out-of-stock, planned / coming-soon and warning figures, or green for anything other than available, completed and success.
- **Don't** invent proof: no star ratings, customer counts, testimonials or logos the business cannot back.
- **Don't** reintroduce the rejected festival world: no condensed display face, square corners or cyan / magenta projector colours.
- **Don't** drift toward a light, white SaaS template.
- **Don't** let two adjacent sections share a wash.
