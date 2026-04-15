# Design Brief: Sodhi Physiotherapy Clinic

## Direction

**Cool Serene Medical** — premium healthcare aesthetic with ocean blue primary, teal accents, and spacious professional layout.

## Tone

Trustworthy minimalism: every design choice communicates medical credibility and calm expertise without decoration.

## Differentiation

Medical-grade color palette (deep ocean blue + healing teal) paired with premium spacing and breathing room — rejects wellness-brand clichés.

## Color Palette

| Token      | OKLCH              | Role                             |
|------------|-------------------|----------------------------------|
| background | 0.98 0.008 230    | Cool off-white base              |
| foreground | 0.18 0.015 230    | Deep text, medical authority     |
| card       | 1.0 0.004 230     | Pure white surface for content   |
| primary    | 0.42 0.14 240     | Deep ocean blue (trust, health)  |
| accent     | 0.6 0.15 170      | Teal (healing, wellness action)  |
| muted      | 0.94 0.01 230     | Subtle backgrounds, section alt  |
| destructive| 0.55 0.22 25      | Red alert only                   |

## Typography

- Display: Space Grotesk — geometric, modern, medical-grade clarity for headings
- Body: General Sans — neutral, highly readable, professional for all body text
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base`

## Elevation & Depth

Subtle soft shadows (`shadow-subtle` 0.04 opacity, `shadow-elevated` 0.08/0.04 layered) for premium feel. No harsh shadows. Depth through layered backgrounds, not blur.

## Structural Zones

| Zone    | Background            | Border             | Notes                          |
|---------|----------------------|-------------------|--------------------------------|
| Header  | `bg-white`          | `border-b border-border` | Crisp separation, navigation   |
| Hero    | `gradient-primary`   | —                 | Subtle gradient, CTA emphasis  |
| Content | Alternating `bg-background` / `bg-muted/10` | — | Rhythm without distraction |
| Footer  | `bg-muted text-muted-foreground` | `border-t border-border` | De-emphasized, contact info |

## Spacing & Rhythm

Spacious 6-8 section gaps (`gap-12` / `gap-16`), generous card padding (6-8 units), micro-spacing 2-4 units. Creates breathing room for medical professionalism.

## Component Patterns

- **Buttons**: `bg-primary text-primary-foreground` (appointment booking), `bg-accent text-accent-foreground` (secondary action/WhatsApp), hover `opacity-90 transition-smooth`
- **Cards**: `bg-card rounded-lg shadow-subtle`, image + text stacked on mobile, side-by-side on desktop
- **Badges**: `bg-muted text-muted-foreground text-xs font-semibold rounded-full px-3 py-1`

## Motion

- Entrance: fade-in on scroll via intersection observer (no bounce, no flick)
- Hover: subtle color shift + `shadow-elevated` on cards, `opacity-80` on buttons, all `transition-smooth`
- Decorative: none — focus on content clarity

## Constraints

- Light mode only (medical professionalism)
- No decorative gradients or animations
- Minimum 44px touch targets for buttons (mobile accessibility)
- Clear visual hierarchy through size/weight, not color contrast games

## Signature Detail

Medical-grade color credibility (deep ocean blue primary inspired by healthcare UI standards) combined with premium spacing and zero decorative flourish — this is a clinic for healing, not a lifestyle brand.
