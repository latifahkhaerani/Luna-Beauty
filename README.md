# Luna Beauty — Salon Booking Website Template

A responsive salon and beauty business website template built with Next.js, TypeScript, CSS, and Lucide React.

The template is designed for service businesses that want a polished online presence with a simple WhatsApp booking flow.

demo : https://luna-beauty-gray.vercel.app/ 

## Features

- Responsive mobile, tablet, and desktop layout
- Hero section with primary booking CTA
- Services section with price and duration
- About section
- Gallery
- Testimonials
- Booking form
- WhatsApp deep-link with a pre-filled booking message
- Sticky navigation and mobile menu
- No database required
- No WhatsApp Business API required
- Easy customization of business information and services

## Tech Stack

- Next.js 15.5.27
- React 19
- TypeScript
- CSS
- Lucide React

## Requirements

- Node.js 20 or newer is recommended
- npm

## Installation

```bash
npm install
npm run dev
```

Open:

http://localhost:3000

## Production Build

```bash
npm run build
npm run start
```

## Main Customization File

Most business content can be customized from:

```text
components/SalonPage.tsx
```

### Change WhatsApp Number

Find:

```ts
const WHATSAPP_NUMBER = "6281234567890";
```

Use the international format without `+`, spaces, or hyphens.

Example:

```text
0812-3456-7890
```

becomes:

```text
6281234567890
```

### Change Services

Edit the `services` array:

```ts
const services = [
  {
    name: "Hair Cut",
    price: "Rp85.000",
    duration: "45 min",
    description: "Potong, wash & styling.",
  },
];
```

You can add, remove, rename, or reorder services.

### Change Business Information

Update the following content in `components/SalonPage.tsx`:

- Business name
- Tagline
- Address
- Opening hours
- WhatsApp number
- Service names
- Prices
- Service durations
- Service descriptions
- Testimonials
- Footer text
- Social links

### Change Images

The demo currently uses remote Unsplash image URLs.

Search for:

```text
images.unsplash.com
```

and replace the URLs with your own images.

For a production client website, use images that the business owns or has permission to use.

# Asset Guide

The template currently uses remote image URLs from Unsplash as demo images.

For a real business or client website, **replace the demo images with photos owned by the business or images that have the appropriate license for commercial use.**

### Option 1 — Use Image URLs

The easiest option is to replace the existing image URLs directly in:

```text
components/SalonPage.tsx
```

Search for:

```text
images.unsplash.com
```

Then replace the URL with your own publicly accessible image URL.

Example:

```tsx
const heroImage = "https://example.com/hero.jpg";
```

Make sure the image URL is publicly accessible and uses HTTPS.

### Option 2 — Use Local Images

You can also store the images directly inside the project.

Create the following folder structure:

```text
public/
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── gallery-3.jpg
```

Then place the business photos inside the `public/images/` folder.

Next, open:

```text
components/SalonPage.tsx
```

and change the image `src` values to the corresponding local paths.

For example:

```tsx
src="/images/hero.jpg"
```

```tsx
src="/images/about.jpg"
```

```tsx
src="/images/gallery-1.jpg"
```

The images will then be stored inside the project and will no longer depend on external image URLs.

### Recommended Image Mapping

| Section | Suggested File |
|---|---|
| Hero | `hero.jpg` |
| About | `about.jpg` |
| Gallery 1 | `gallery-1.jpg` |
| Gallery 2 | `gallery-2.jpg` |
| Gallery 3 | `gallery-3.jpg` |

You do not have to use these exact file names. You can use any file names as long as the paths in `SalonPage.tsx` are updated accordingly.

### Image License

The images included in the demo are for demonstration purposes only.

For a production or client website, use:

- Photos owned by the business
- Photos provided by the client
- Stock photos with an appropriate license
- Other images that you have permission to use commercially

Do not use copyrighted images without permission.

## Change Logo / Branding

The **Luna Beauty** branding in the template is demo branding.

For a client website, replace it with the client's own logo and business name.

Open:

```text
components/SalonPage.tsx
```

Then find the logo or brand name and update it according to the client's branding.

If you do not want to use an image logo, the template can also use a text-based logo.

For example:

```text
Luna Beauty
```

can be changed to:

```text
Your business name
```
## Project Structure

```text
salon-booking-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── SalonPage.tsx
├── next.config.ts
├── package.json
├── tsconfig.json
├── next-env.d.ts
└── README.md
```

## Booking Flow

1. Customer selects a service.
2. Customer enters name and WhatsApp number.
3. Customer chooses date and preferred time.
4. Customer optionally adds a note.
5. The template generates a WhatsApp message.
6. WhatsApp opens with the booking details pre-filled.
7. The business confirms availability manually.

This is a simple lead/booking flow. It does not reserve a time slot automatically.

## Important

This template does not include:

- Database
- Admin dashboard
- Automatic calendar availability
- Online payment
- WhatsApp Business API
- Automatic booking confirmation
- Authentication

Those features can be added as a custom development service.

## License

This template is intended to be customized and used for client/business websites according to the license terms provided by the seller.

Do not redistribute the original source code as a standalone template unless your purchase/license terms explicitly allow it.
