# Rooted Furniture Landing Page

Build a premium landing page for **Rooted Sustainable Furniture Co.** using React + Tailwind CSS + Framer Motion.

## Design Direction (from reference image)

- **Palette**: Deep warm browns (`#3C2415`, `#5C3D2E`, `#8B6F4E`), warm cream (`#F5F0EB`), off-white (`#FAF8F5`), dark green from logo (`#2D5A3D`)
- **Typography**: Large serif headings (Playfair Display), clean sans-serif body (Inter)
- **Layout**: Full-width hero with oversized typography, grid-based collections, alternating light/dark sections
- **Style**: Minimal, warm, nature-inspired — matching the "NATURAL" theme from reference

## Proposed Changes

### Project Setup

#### [NEW] React + Vite + Tailwind CSS project

Initialize with `npx create-vite@latest ./ --template react` in the Rooted repo, install Tailwind CSS v4 and Framer Motion.

---

### Core Components

#### [NEW] `src/components/Navbar.jsx`
- Fixed top nav with logo (using provided [rootedlogo.jpeg](file:///home/conste/repos/Rooted/rootedlogo.jpeg)), nav links (Home, Collections, About, Contact), and a CTA button
- Transparent on scroll, becomes solid on scroll-down

#### [NEW] `src/components/Hero.jsx`
- Full-viewport hero with large "NATURAL" / "ROOTED" serif typography
- Subtle fade-in + parallax animations with Framer Motion
- Tagline from brand: *"Crafted for the Earth. Built to Last Generations."*

#### [NEW] `src/components/Collections.jsx`
- Grid showcasing furniture categories (Living Room, Bedroom, Dining, Outdoor)
- Uses placeholder images via Unsplash for furniture categories
- Hover effects with scale + overlay transitions

#### [NEW] `src/components/FeaturedProducts.jsx`
- "New Arrivals" style section showing 4-6 products from the CSV
- Card-based layout with product name, category, and base price
- Staggered reveal animation on scroll

#### [NEW] `src/components/MaterialsSection.jsx`
- Split layout: text on one side, image on other
- Highlights "Refined Natural Materials, Responsible, Modern"
- Animated text reveal

#### [NEW] `src/components/BrandStatement.jsx`
- Full-width dark section: **"STRONG, MINIMAL & MODERN"**
- Large serif typography with scroll-triggered animation

#### [NEW] `src/components/About.jsx`
- Brand story section with sustainability values
- Mentions FSC certification, GREENGUARD Gold, zero-waste packaging

#### [NEW] `src/components/Footer.jsx`
- Multi-column footer with navigation links, newsletter signup, and social media
- Brand motto and copyright

---

### Styling & Configuration

#### [MODIFY] `tailwind.config.js`
- Add custom color palette (browns, cream, green)
- Add Playfair Display + Inter fonts
- Custom spacing/breakpoints if needed

#### [MODIFY] `src/index.css`
- Import Google Fonts
- Reset styles, smooth scrolling
- Custom utility classes

#### [MODIFY] `src/App.jsx`
- Compose all sections in order

---

### Assets

- Copy [rootedlogo.jpeg](file:///home/conste/repos/Rooted/rootedlogo.jpeg) to `public/` for use
- Use high-quality Unsplash URLs for furniture imagery (living room, dining, bedroom, etc.)

## Verification Plan

### Browser Visual Testing
- Run `npm run dev` and open in browser
- Verify all sections render correctly with proper spacing and colors
- Test scroll animations fire correctly
- Test responsive behavior at mobile (375px), tablet (768px), and desktop (1440px) widths
- Verify logo displays properly in navbar

### Manual Verification
- User reviews the landing page in browser at `localhost:5173` and confirms it matches the desired aesthetic
