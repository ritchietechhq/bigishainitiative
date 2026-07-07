# BIG ISHA Initiative Website

A modern, mobile-first website for BIG ISHA Initiative, a non-governmental organization based in Owerri, Imo State, Nigeria. The site communicates the organization's mission, programs, impact, and provides easy ways for visitors to donate, volunteer, and get involved.

## Overview

This website is built with **React 19**, **Tailwind CSS 4**, **Express**, and **tRPC**, featuring:

- **Mobile-first design** optimized for low-bandwidth environments common in Nigeria
- **Responsive navigation** with hamburger menu on mobile and persistent sticky donate button
- **Comprehensive pages** covering mission, programs, impact, blog, volunteer opportunities, and donations
- **Payment integration placeholders** for Paystack and Flutterwave
- **Elegant, professional design** with warm, hopeful color palette (green accent) reflecting Nigerian cultural warmth
- **Accessibility compliance** following WCAG 2.1 AA standards
- **SEO-ready** with meta tags, structured data, and sitemap support

## Project Structure

```
big_isha_initiative/
├── client/                          # Frontend React application
│   ├── src/
│   │   ├── pages/                   # Page components
│   │   │   ├── HomePage.tsx         # Home page with hero, counters, programs, testimonials
│   │   │   ├── AboutPage.tsx        # About, mission, vision, team, timeline
│   │   │   ├── ProgramsPage.tsx     # Programs grid with detailed descriptions
│   │   │   ├── GetInvolvedPage.tsx  # Volunteer, partner, ambassador, internship forms
│   │   │   ├── ImpactPage.tsx       # Gallery, stories, impact reports
│   │   │   ├── BlogPage.tsx         # Blog listing with search and filtering
│   │   │   ├── ContactPage.tsx      # Contact form, office info, map placeholder
│   │   │   ├── DonatePage.tsx       # Donation module with payment methods
│   │   │   └── LegalPages.tsx       # Privacy, Terms, Donation Policy
│   │   ├── components/
│   │   │   ├── Layout.tsx           # Main layout wrapper with Header, Footer, Sticky Donate
│   │   │   ├── Header.tsx           # Navigation bar with logo and menu
│   │   │   ├── Footer.tsx           # Footer with links, social, contact, credit
│   │   │   ├── HeroSection.tsx      # Reusable hero component
│   │   │   ├── StatCounter.tsx      # Animated counter component
│   │   │   ├── ProgramCard.tsx      # Program card component
│   │   │   ├── CTABanner.tsx        # Call-to-action banner component
│   │   │   └── StickyDonateButton.tsx # Mobile-persistent donate button
│   │   ├── App.tsx                  # Route definitions
│   │   ├── main.tsx                 # React entry point
│   │   └── index.css                # Global styles with design tokens
│   ├── public/                      # Static files (favicon, robots.txt, etc.)
│   └── index.html                   # HTML template
├── server/
│   ├── routers.ts                   # tRPC procedure definitions
│   ├── db.ts                        # Database query helpers
│   └── _core/                       # Framework infrastructure
├── drizzle/
│   └── schema.ts                    # Database schema definitions
├── shared/                          # Shared types and constants
└── README.md                        # This file
```

## Getting Started

### Prerequisites

- Node.js 22.13.0+
- pnpm 10.4.1+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Key Features

### 1. Home Page
- Hero section with emotional headline and dual CTAs (Donate, Learn More)
- Animated impact counters showing lives impacted, communities reached, volunteers
- Programs preview with 4 main initiative cards
- Trust/partners logo strip with registration info
- Testimonials carousel with beneficiary stories
- Latest news preview (3 articles)
- Newsletter signup section
- Final CTA banner encouraging engagement

### 2. About Us Page
- Organizational story and founding narrative
- Mission, Vision, and Core Values (6-value icon grid)
- Leadership and team profiles with placeholder avatars
- Governance and transparency information
- Visual timeline of organizational milestones

### 3. Programs Page
- Grid layout of 6 program areas:
  - Education & Youth Empowerment
  - Health & Wellness Outreach
  - Women Empowerment
  - Community Development & Emergency Relief
  - Poverty Alleviation & Skills Acquisition
  - Strategic Partnerships
- Each program includes goals, beneficiary stats, and impact metrics

### 4. Get Involved Page
- Tabbed interface with 4 sections:
  - **Volunteer**: Application form for volunteers
  - **Partner With Us**: Corporate/government partnership inquiry
  - **Ambassador**: Social media ambassador program
  - **Internship**: Internship opportunities
- All forms include validation and placeholder submission logic

### 5. Impact & Gallery Page
- Photo and video gallery grid (placeholder images)
- Success stories section with beneficiary narratives
- Annual impact reports (2022-2024) with download placeholders

### 6. Blog/News Page
- Article listing with category filtering
- Search functionality across titles and excerpts
- Category tags (Education, Health, Women Empowerment, News, Impact)
- Individual article cards with date, author, and read-more links

### 7. Contact Us Page
- Contact form (name, email, subject, message)
- Office location: Owerri, Imo State, Nigeria
- Phone, email, WhatsApp contact options
- Office hours display
- Social media links (Instagram, Facebook, X, LinkedIn, YouTube)
- Google Maps embed placeholder

### 8. Donation Module
- One-time and recurring (monthly) donation options
- 5 cause categories (General, Education, Health, Women, Emergency)
- Preset amounts in Naira (₦1,000 - ₦50,000) plus custom input
- **Payment Methods:**
  - Paystack (placeholder integration)
  - Flutterwave (placeholder integration)
  - Bank transfer with details display
- Transparency breakdown showing fund allocation (70% programs, 20% operations, 10% fundraising)
- Email receipt confirmation logic (backend placeholder)

## Design System

### Color Palette
- **Primary Accent**: Green (`oklch(0.55 0.15 142)`) - warm, hopeful, reflecting community and growth
- **Background**: Light neutral (`oklch(0.99 0.001 286.375)`)
- **Foreground**: Dark text (`oklch(0.18 0.02 65)`)
- **Muted**: Soft grays for secondary content
- **Accent Foreground**: White/light for contrast on accent backgrounds

### Typography
- **Display Font**: Playfair Display (headings) - elegant, distinctive
- **Body Font**: Inter (body text) - highly legible, modern
- **Responsive sizing**: Scales from mobile to desktop

### Spacing & Layout
- Mobile-first breakpoints: 360px, 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Container with responsive padding: 16px mobile, 24px tablet, 32px desktop
- Generous whitespace for premium feel

## Content Management

### Placeholder Content

All content marked with `[Insert ...]` placeholders should be replaced with real organizational data:

- `[Insert CAC Registration Number]` - Company registration number
- `[Insert Phone Number]` - Organization phone
- `[Insert specific office address]` - Full office address
- `[Beneficiary Name]`, `[Author Name]` - Real names for testimonials and articles
- Program statistics and metrics - Replace placeholder numbers
- Team member names and bios
- Mission, vision, and values statements

### Adding Blog Posts

Blog posts are currently stored as static data in `BlogPage.tsx`. To add real blog functionality:

1. **Create database schema** in `drizzle/schema.ts`:
```typescript
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  category: varchar("category", { length: 100 }),
  author: varchar("author", { length: 255 }),
  publishedAt: timestamp("publishedAt").defaultNow(),
  createdAt: timestamp("createdAt").defaultNow(),
});
```

2. **Add database query helper** in `server/db.ts`:
```typescript
export async function getBlogPosts() {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(blogPosts).orderBy(desc(blogPosts.publishedAt));
}
```

3. **Create tRPC procedure** in `server/routers.ts`:
```typescript
blog: router({
  list: publicProcedure.query(({ ctx }) => getBlogPosts()),
  getBySlug: publicProcedure.input(z.string()).query(({ input }) => 
    getBlogPostBySlug(input)
  ),
}),
```

4. **Update frontend** to call the API instead of using static data

### Adding Programs

Similar to blog posts, programs can be moved to the database:

1. Create `programs` table in schema
2. Add query helpers in `server/db.ts`
3. Create tRPC procedures in `server/routers.ts`
4. Update `ProgramsPage.tsx` to fetch from API

## Payment Integration

### Paystack Integration

**Setup:**

1. Create Paystack account at https://paystack.com
2. Get your public and secret keys from dashboard
3. Add to `.env`:
```
VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx
```

**Implementation:**

In `DonatePage.tsx`, replace the Paystack alert with:
```typescript
if (paymentMethod === "paystack") {
  // Initialize Paystack payment
  const handler = PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email: userEmail,
    amount: finalAmount * 100, // Paystack expects amount in kobo
    ref: generateReference(),
    onClose: () => alert("Payment window closed"),
    callback: (response) => {
      // Verify payment on backend
      verifyPaystackPayment(response.reference);
    }
  });
  handler.openIframe();
}
```

### Flutterwave Integration

**Setup:**

1. Create Flutterwave account at https://flutterwave.com
2. Get your public and secret keys
3. Add to `.env`:
```
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST_xxxxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST_xxxxx
```

**Implementation:**

In `DonatePage.tsx`, replace the Flutterwave alert with:
```typescript
if (paymentMethod === "flutterwave") {
  FlutterWaveCheckout({
    public_key: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: generateReference(),
    amount: finalAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userEmail,
      name: userName,
    },
    customizations: {
      title: "BIG ISHA Initiative Donation",
      description: "Support our programs",
      logo: "https://...",
    },
    callback: (data) => {
      verifyFlutterwavePayment(data);
    },
    onclose: () => alert("Payment cancelled"),
  });
}
```

### Bank Transfer

Display bank details in donation confirmation:
```
Account Name: [Insert Account Name]
Bank: [Insert Bank Name]
Account Number: [Insert Account Number]
```

## Forms & Submissions

### Current Status

All forms (contact, volunteer, partner, newsletter) currently log to console and reset state. To implement real submissions:

1. **Create tRPC procedures** in `server/routers.ts`:
```typescript
contact: router({
  submit: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string().email(),
      subject: z.string(),
      message: z.string(),
    }))
    .mutation(async ({ input }) => {
      // Save to database or send email
      // Add spam protection (reCAPTCHA, honeypot)
      // Send confirmation email
    }),
}),
```

2. **Update frontend components** to use tRPC mutations:
```typescript
const submitMutation = trpc.contact.submit.useMutation({
  onSuccess: () => {
    toast.success("Message sent successfully");
    resetForm();
  },
  onError: () => {
    toast.error("Failed to send message");
  },
});
```

### Spam Protection

Add reCAPTCHA or honeypot field to all public forms:

```typescript
// Honeypot example
<input
  type="text"
  name="website"
  style={{ display: "none" }}
  tabIndex={-1}
  autoComplete="off"
/>
```

## SEO & Performance

### Meta Tags

Update `client/index.html` with:
```html
<meta name="description" content="BIG ISHA Initiative - Transforming lives in Owerri, Imo State">
<meta name="keywords" content="NGO, nonprofit, education, health, empowerment, Nigeria">
<meta property="og:title" content="BIG ISHA Initiative">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

### Structured Data

Add schema.org JSON-LD in page components:
```typescript
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "BIG ISHA Initiative",
  "url": "https://bigisha.org",
  "location": {
    "@type": "Place",
    "address": "Owerri, Imo State, Nigeria"
  }
}
</script>
```

### Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

**Optimization tips:**
- Lazy load images with `loading="lazy"`
- Optimize images with appropriate formats (WebP, JPEG)
- Code-split pages with React Router
- Minimize CSS and JavaScript bundles

## Accessibility

The website follows WCAG 2.1 AA standards:

- ✅ Color contrast ratios meet AA standards (4.5:1 for text)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ ARIA labels on interactive components
- ✅ Keyboard navigation support
- ✅ Form labels and error messages
- ✅ Alt text on all images
- ✅ Focus indicators visible on all interactive elements

## Deployment

### Manus Hosting

The website is deployed on Manus with automatic HTTPS, custom domain support, and serverless scaling.

**To publish:**

1. Create a checkpoint in the Management UI
2. Click the "Publish" button
3. Configure custom domain in Settings → Domains

### Environment Variables

Required environment variables (set via Management UI Secrets panel):

```
VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxx
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST_xxxxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST_xxxxx
```

## Testing

Run tests with:
```bash
pnpm test
```

Add tests for:
- Form validation and submission
- Payment flow (mock Paystack/Flutterwave)
- Navigation and routing
- Accessibility compliance

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+)

## Mobile Optimization

The site is optimized for mobile-first experience:

- ✅ Responsive design from 360px+
- ✅ Touch-friendly tap targets (44x44px minimum)
- ✅ Hamburger menu on small screens
- ✅ Sticky donate button on mobile
- ✅ Optimized images for low-bandwidth
- ✅ Fast loading with minimal JavaScript

## Contributing

When making changes:

1. Create a feature branch
2. Update `todo.md` with changes
3. Test on mobile and desktop
4. Create a checkpoint before merging
5. Update this README if needed

## Support & Contact

For questions or issues with the website:
- Email: info@bigisha.org
- Phone: [Insert Phone]
- Location: Owerri, Imo State, Nigeria

## Credits

**Website Design & Development:** TechsoftDev Ltd

## License

© 2024 BIG ISHA Initiative. All Rights Reserved.
