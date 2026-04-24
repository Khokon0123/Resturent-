# Asia Bazaar — Engineering & Design Rules

> **YOUR ROLE — READ THIS FIRST, EVERY SINGLE SESSION**
>
> You are a senior UX engineer maintaining a professional website for a local South Asian grocery
> and halal meat store. Every file you touch must look like a top design studio made it.
> No shortcuts. No generic output. If it wouldn't screenshot well on Dribbble, it's not done.

## Project Type
Marketing website for a local brick-and-mortar grocery store. Primary CTA is phone calls — no cart, no checkout.

## Store Identity
- **Name:** Asia Bazaar
- **Address:** 7864 Richmond Hwy, Alexandria, VA 22306
- **Phone:** +1-703-555-0192 ← UPDATE THIS before launch
- **Email:** info@asiabazaarak.com
- **Social:** Facebook, Instagram, WhatsApp

## Design Tokens (CSS Variables in globals.css)
| Token | Value | Usage |
|---|---|---|
| `--color-red` | `#DC2626` | Primary CTAs, badges, urgency |
| `--color-red-dark` | `#B91C1C` | Red hover states |
| `--color-amber` | `#F59E0B` | Deals, offers, sale badges |
| `--color-halal` | `#16A34A` | Halal certification |
| `--color-fresh` | `#0891B2` | Fresh product badges |
| `--color-surface` | `#FFF8F0` | Warm card backgrounds |
| `--color-surface-2` | `#FEF3C7` | Deal section bg |
| `--color-text` | `#111827` | Primary text |
| `--color-muted` | `#6B7280` | Secondary text |

## Fonts
- **`font-hind`** — Hind Siliguri. Use for: H1, H2, H3, product names, logo. Bengali-Latin hybrid, warm.
- **`font-nunito`** — Nunito. Use for: body text, labels, buttons, nav links. Friendly rounded sans.
- **NEVER** use Inter, Roboto, or Arial as visible display fonts in this project.

## Component Conventions
| Rule | Reason |
|---|---|
| All colors via CSS vars, never hardcoded hex in JSX | One source of truth |
| `"use client"` only where needed (interactive components) | Server components are faster |
| All images via `next/image` with `fill` + `sizes` | Avoids layout shift, optimizes delivery |
| `storeInfo.phone` from `@/lib/data` for all tel: links | Change phone in one place |
| Max border-radius 4px (except pills/badges which can be `rounded-full`) | Consistent design language |
| `section-padding` utility class for all major sections | Consistent 80px vertical rhythm |
| `container-inner` utility class for all section containers | Consistent 1280px max-width |

## "use client" Boundary
**Client (interactive):** AnnouncementBar, Navbar, HeroBanner, FeaturedDeal, ShopByCategory, FeaturedProducts, ProductCard, WhyChooseUs, CustomerReviews, ScrollReveal, CategoryPageLayout, FeaturedDeal

**Server (no directive):** LocationContact, Footer, all page.tsx files, SectionHeading, Badge, Button, PhoneButton, StarRating

## Data — All Content Lives in `/src/lib/data.ts`
- `storeInfo` — phone, address, hours, social links
- `products[]` — 18 products with images, prices, badges
- `categories[]` — 6 categories with icons, hrefs, colors
- `deals[]` — 3 current deals/combos
- `reviews[]` — 4 verified customer reviews
- `storeHours[]` — 7-day hours table
- `announcementMessages[]` — rotating top-bar messages

## File Structure
```
src/
├── app/                    ← 7 pages (all statically generated)
├── components/
│   ├── ui/                 ← Button, PhoneButton, Badge, SectionHeading, ScrollReveal, StarRating
│   ├── layout/             ← AnnouncementBar, Navbar, Footer
│   └── sections/           ← All homepage and page sections
├── lib/                    ← fonts, utils, data
├── store/ui.ts             ← Zustand: mobile menu only
└── types/index.ts          ← TypeScript interfaces
```

## Phone CTA Pattern (3 levels)
Every page maintains three levels of phone CTA prominence:
1. **AnnouncementBar** (top strip) — passive, always visible
2. **Section-level PhoneButton** — in Hero, FeaturedDeal, LocationContact, Contact page
3. **ProductCard overlay** — appears on hover for every product

## SEO
- Per-page `metadata` exports with title + description
- `public/structured-data.json` — LocalBusiness/GroceryStore JSON-LD schema

## NEVER Do These
- ❌ Lorem Ipsum placeholder text
- ❌ Hardcode hex colors in JSX (use CSS variables)
- ❌ Gradient backgrounds (except Hero which explicitly uses them)
- ❌ Drop shadows on cards (use borders + subtle box-shadow on hover only)
- ❌ `border-radius` > `4px` on cards/sections (pills are fine)
- ❌ Bounce/spring animations
- ❌ Import unused variables (ESLint will fail the build)
- ❌ Unescaped `'` or `"` in JSX text (use `&apos;` and `&quot;`)
- ❌ `[...new Set()]` spread — use `Array.from(new Set())` for TypeScript compatibility
- ❌ Number arrays for Framer Motion `ease` — use string easing names or `type: "tween"`
- ❌ Adding a cart/checkout — this store uses phone orders only

## Before You Ship
- [ ] Update `storeInfo.phone` in `/src/lib/data.ts` to the real phone number
- [ ] Verify all `tel:` links dial correctly on mobile
- [ ] Replace Unsplash placeholder images with real store photos
- [ ] Update `mapsEmbed` URL in `storeInfo` with the real Google Maps embed code
- [ ] Run `npm run build` — must be 0 errors
- [ ] Test on mobile at 375px width

## Commands
```bash
npm run dev    # Development server at localhost:3000
npm run build  # Production build
npm run lint   # ESLint check
```
