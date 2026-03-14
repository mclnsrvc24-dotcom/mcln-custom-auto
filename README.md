# McLN Custom Auto

A production-ready Next.js 14 landing page for **McLN Custom Auto** — a luxury automotive detailing, ceramic coating, vinyl wrap, and paint protection film business.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Lucide React** | Icons |
| **Vercel** | Hosting |

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## Deploy to GitHub + Vercel

### GitHub
```bash
git init
git add .
git commit -m "Initial commit — McLN Custom Auto landing page"
git remote add origin https://github.com/YOUR_USERNAME/mcln-custom-auto.git
git push -u origin main
```

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live in ~60 seconds

No configuration needed — `vercel.json` handles framework detection.

---

## Customization Guide

### Replace Placeholder Images
Update image URLs in:
- `components/Hero.tsx` — hero background
- `components/Gallery.tsx` — portfolio grid

Use your own photos or replace Unsplash URLs with your Cloudinary/S3 URLs. If using a different domain, add it to `next.config.mjs`:
```js
remotePatterns: [{ protocol: 'https', hostname: 'your-cdn.com' }]
```

### Update Business Info
- **Contact details** (phone, email, address, hours): `components/BookingCTA.tsx`
- **SEO metadata** (title, description, location): `app/layout.tsx`
- **Footer links**: `components/Footer.tsx`

### Connect the Contact Form
The form in `components/ContactForm.tsx` currently shows a success state on submit. Connect it to a real backend:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Create `app/api/contact/route.ts` and POST form data to Resend's API.

**Option B — Formspree**
Replace the `handleSubmit` function with a fetch to your Formspree endpoint.

**Option C — Email.js**
Use the EmailJS browser SDK for zero-backend form handling.

### Change Brand Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  accent: {
    DEFAULT: '#YOUR_HEX', // primary brand color
  }
}
```
Then update `text-red-*`, `bg-red-*`, `border-red-*` class references throughout components.

---

## Project Structure

```
mcln-custom-auto/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata + fonts
│   ├── page.tsx          # Main page — composes all sections
│   └── globals.css       # Tailwind directives + global styles
├── components/
│   ├── Navbar.tsx        # Sticky nav with scroll effect (client)
│   ├── Hero.tsx          # Full-screen hero section
│   ├── Services.tsx      # 5-service grid with hover effects
│   ├── WhyUs.tsx         # Stats and brand story
│   ├── Gallery.tsx       # Portfolio image grid
│   ├── Testimonials.tsx  # 4 customer reviews
│   ├── BookingCTA.tsx    # Booking section with contact info
│   ├── ContactForm.tsx   # Form with validation (client)
│   └── Footer.tsx        # Footer with links + socials
├── public/               # Static assets (add your logo here)
├── next.config.mjs       # Next.js config + image domains
├── tailwind.config.ts    # Design tokens + font config
├── vercel.json           # Vercel deployment config
└── tsconfig.json         # TypeScript config
```

---

## Future Additions

| Feature | Recommendation |
|---------|---------------|
| Online booking calendar | [Cal.com](https://cal.com) embed or Calendly widget |
| Customer portal | Add Next.js Auth (next-auth) + Supabase for job tracking |
| Google Reviews | Fetch via Google Places API and display in testimonials |
| Live chat | Intercom or Crisp widget in `app/layout.tsx` |
| Analytics | Vercel Analytics (free) or Google Analytics via `@next/third-parties` |
| Blog/SEO | Add `app/blog/` route with MDX for content marketing |
| Payment deposits | Stripe Checkout for booking deposits |

---

## Image Credits

Placeholder images sourced from [Unsplash](https://unsplash.com). Replace with your own vehicle photography for best results.

---

## License

Private — all rights reserved by McLN Custom Auto.
