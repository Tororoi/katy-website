# Handoff: Katy Wang Studio Website Redesign

## Overview
Full redesign of katywangstudio.com — a Bay Area botanical watercolor artist and instructor's site. Goals: let the art dominate (minimal chrome), make class registration the #1 conversion, consolidate thin CV pages, and be mobile-first. Pages: Home, Gallery (with lightbox), Classes & Workshops (with venue filter), About, Exhibitions & Projects (merged from Exhibitions + Residencies), Contact. The Shop and a separate Commissions page were explicitly cut. Nav is 5 items: Gallery · Classes · About · Contact (+ wordmark → Home); "Exhibitions & Projects" lives in the footer and is linked from About.

## About the Design Files
`Katy Wang Redesign.dc.html` is a **design reference created in HTML** — a prototype showing intended look and behavior, NOT production code to copy. The task is to **recreate these designs in the existing codebase** (React 18 + React Router + Tailwind, CRA) using its established patterns: `src/Components/*.jsx`, `tailwind.config.js` theme extensions, `src/data.json` as the data source. The file contains multiple design iterations stacked in "turns"; **implement the final direction only**:
- Desktop Home = option **1b** (as later amended: 3 square thumbnails, no Commissions button)
- Desktop Gallery/Classes/About/Exhibitions/Contact = options **2a, 2b, 2d, 2e, 2f**
- Mobile = options **3a–3d** plus **2g** (gallery) and **2h** (classes)
- Ignore options 1a, 1c, 1d (rejected explorations). There is no 2c (removed).

## Fidelity
**High-fidelity.** Colors, type, spacing, and copy are final. Recreate pixel-perfectly with Tailwind utilities; exact values below.

## Design Tokens
Extend `tailwind.config.js`:
- **Colors**: keep `forest-green #4A5D3E` (primary accent, buttons, active nav, wordmark) and `cream #F5F1E8`; add `terracotta #9C6B48` (Pacific Art League venue dot), `slate #6E7480` (corporate venue dot), `ink #26261F` (body headings), `body-gray #5f5e53`, `hairline #EDEBE3`, `panel #F5F4EC` (form/credibility panels), `paper #F4F2E9` (text on green), `sage-tint #F3F5EC` + `sage-border #A7B18C` + `sage-text #55603F` (series tags), `tag-terracotta #A8683C` (one-day tag fill).
- **Fonts**: headings `Playfair Display` (400/500/600), body/UI **`Source Sans 3`** (replaces Inter — update the Google Fonts import and `fontFamily.sans`). Load with `font-display: swap`. Two families max.
- **Radius**: buttons/cards 3–4px; venue dots & filter pills fully rounded.
- **Type scale (desktop)**: page titles 40px Playfair 500; section titles 32–34px; card/row titles 22px Playfair 500; body 15–16.5px/1.6–1.7; meta 13–14.5px; tags 12px 600 uppercase tracking .07em.

## Screens / Views

### Home (desktop = 1b, mobile = 3a)
- Nav: white bar, wordmark "Katy Wang" left (Playfair 26px 600, forest-green), links right (14px 500, #44443c), 22px/56px padding.
- Hero: full-bleed `Wang_Phellinus_robiniae.jpg`, 600px tall (440px mobile), bottom gradient scrim `linear-gradient(180deg, rgba(20,24,16,0) 40%, rgba(20,24,16,.62) 100%)`. Text bottom-left in #FDFCF8: "Katy Wang" 54px Playfair, tagline "Botanical & mushroom watercolors · Classes in the Bay Area" 18px, then two buttons: filled white "Take a class" (bg #FDFCF8, text #33402A) and outlined "View the work" (1.5px border rgba(253,252,248,.75)). **Eager-load this image with `fetchpriority="high"`; never lazy-load it.** Mobile stacks the buttons full-width.
- Selected work: heading "Selected work" 32px Playfair + hairline rule + "All work →" link (forest-green 600). **Exactly 3 square (1:1, object-fit: cover) thumbnails** in a row (single column on mobile), caption below each, centered, italic 14px #6b6a5f: "*Binomial*, year".
- Upcoming classes band: full-width forest-green (#4A5D3E) section, text #F4F2E9. 3 cards (2 on mobile) bg rgba(255,255,255,.07), border rgba(255,255,255,.14), radius 4px: venue eyebrow (12.5px uppercase #CBD6B8), title (22px Playfair), dates/time (14.5px #DDDACB), underlined "Register at CSMA ↗" link.
- Footer (all pages): wordmark, links "Exhibitions & Projects · Instagram · katywangwebsite@gmail.com", "© {year} Katy Wang", 13px #8a897d, top hairline.

### Gallery (2a desktop, 2g mobile)
- Title "Gallery" 40px. **No filters** (deliberate — too few works).
- Masonry: CSS `columns: 3` (2 on mobile), 22px gap, `break-inside: avoid`, 26px bottom margin per item. All current thumbs are square; preserve native aspect ratios if new work is added — never hard-crop grid images.
- Caption under each: centered italic "*Binomial*, year".
- Click → lightbox: full-viewport overlay `rgba(20,22,17,.94)`, image centered `object-fit: contain`, "Close ✕" top right, ‹ › arrows (34px, #DDDACB), caption row: title (21px Playfair) + italic binomial (#CBD6B8), right-aligned "medium · size" meta, bottom centered "status · n of 13" (13px #9aa588). Support arrow keys, Escape, swipe (the existing `react-swipeable` dep), prev/next wraps around.
- Every artwork needs descriptive alt text: medium + subject + key detail, e.g. "Watercolor of cracked cap polypore fungi on a fallen tree". Data for all 13 works is in `src/data.json` (`artwork`); collection field optional for future filtering.

### Classes & Workshops (2b desktop, 2h mobile)
- Title + intro: "In-person watercolor and botanical drawing classes for adults across the Bay Area. Registration is handled by each venue — the Register button opens the venue's site in a new tab."
- **Venue filter pills**: All venues / CSMA / Pacific Art League / Corporate. Active = filled forest-green pill (white text, 99px radius); inactive = 1px #DDDACB border, #5f5e53 text.
- Rows (soonest first), 4-col grid `200px 1fr 250px 190px`, 24px gap, hairline top borders:
  1. Dates (14.5px 600) + time (13.5px #8a897d)
  2. Title (22px Playfair) + **duration tag** below: uppercase 12px 600 tag, 4px/10px padding, radius 3px. Three styles: series = sage outline (`#F3F5EC` bg, `#A7B18C` border, `#55603F` text) with computed text "4-Week Series" / "6-Week Series" / "8-Week Series"; one-day = **filled** `#A8683C` bg, cream text, "One-Day Workshop"; corporate = gray outline (#F4F5F7 / #C4C7CE / #5B616E), "7-Week Series · Corporate".
  3. Location with **venue dot** (9px circle): CSMA `#4A5D3E`, Pacific Art League `#9C6B48`, corporate `#6E7480`.
  4. Register button: **consistent forest-green** for every row (deliberate — venue color lives only in the dot), text `Register at CSMA ↗` / `Register at Pacific Art League ↗` / `Register at Arts4All ↗` — **spell out Pacific Art League, never "PAL"**; bind the ↗ to the last word with `&nbsp;` so it can't wrap alone; padding 12px 10px, line-height 1.35, radius 3px, hover #5c7350. `target="_blank" rel="noopener"`.
- Class data + registration URLs: `src/data.json` (`classes`).
- Below list: "Private lessons" panel (#F5F4EC, radius 4px): title, one-liner, outlined "Get in touch" button → Contact.
- Mobile: stacked cards with tag, title, dot+venue line, dates line, full-width green register button (≥44px tall).

### About (2d desktop, 3b mobile)
- Two columns `440px 1fr`, 64px gap: bio photo `KatyBioPhoto.png` left; right: "About the artist" 40px + the 4 existing bio paragraphs (see design file; last paragraph extended with "— and teaches watercolor and botanical drawing in person across the Peninsula."). **No CTA buttons** (deliberate).
- Credibility strip: full-width #F5F4EC band, eyebrow "SELECTED EXHIBITIONS & RESIDENCIES", 3 columns: NYBG (5th Triennial 2024), Wave Hill (ASBA International 2018 & 2020), Hort Society of NY (Solo 2021 · AiR 2020). Link "Full exhibitions & projects record →".

### Exhibitions & Projects (2e desktop, 3c mobile) — merged page
- Route replaces `/exhibitions`; content max-width 820px centered. Title + "Download CV (PDF)" link.
- Section eyebrows with solid dark underline: "Selected exhibitions", then "Residencies". Rows: `64px 1fr` grid — year (18px Playfair #7d8a68) | name (16.5px 600) + venue/date line (14.5px #5f5e53), hairline separators, reverse-chronological. Data: `data.json` `exhibitions` + `residencies`.
- Off the top nav; reachable from footer + About.

### Contact (2f desktop, 3d mobile)
- Two columns: left — "Get in touch" 40px, copy "Questions about classes, artwork, commissions, or anything else — send a note.", then Email / Studio / Instagram rows (label #8a897d). Right — form panel #F5F4EC radius 4px: Name, Email, Message (min 120px), forest-green "Send message" button. **Only these 3 fields.** Keep the existing mailto submission or wire a form service; keep it low-friction.

## Interactions & Behavior
- Lightbox: open on thumb click, arrow-key/swipe nav with wraparound, Escape/✕ close. Body scroll locked while open.
- Class filter: client-side, instant; filters rows only.
- All external registration links open new tab; label the venue in the button text.
- Hovers: nav links → forest-green; buttons darken/lighten one step (e.g. #4A5D3E → #5c7350); gallery thumbs may keep the existing subtle scale-on-hover.
- Active nav item: forest-green text + 2px forest-green underline (3px padding-bottom).
- Mobile: hamburger (existing MobileNav pattern), single column, ≥44px tap targets, full-width CTAs.

## State Management
- Gallery: `lightboxIndex: number | null` (replaces the Redux `CHOOSE_PROJECT`/`PREV_NEXT`/`DISPLAY_FULL_IMAGE` flow — local state or the existing store, either is fine).
- Classes: `venueFilter: 'all' | 'csma' | 'pal' | 'other'`. Derive duration tags from session count in data (add a `sessions`/`durationLabel` field to data.json rather than parsing date strings at runtime).
- Contact: existing controlled form state.

## Performance & SEO (from the design brief)
- Hero: eager + `fetchpriority="high"`; all below-fold images `loading="lazy"`; always set width/height or aspect-ratio (no CLS).
- Serve WebP/AVIF with fallback via `srcset`/`sizes` where feasible.
- The CRA SPA serves crawlers an empty shell — add prerendering (e.g. `react-snap`) or migrate to SSG so each route has real HTML, unique title/meta.

## Assets
All images already exist in the codebase at `public/images/` (same filenames as this bundle's `images/` folder). No new assets. Fonts from Google Fonts: Playfair Display, Source Sans 3.

## Files
- `Katy Wang Redesign.dc.html` — the design reference (open in a browser; turns stack newest-first; implement 1b + turn 2 + turn 3 options only)
- `images/` — copies of the artwork/bio images used
