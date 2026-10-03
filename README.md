# Luna Beauty — Salon Booking Website Template

A responsive salon and beauty business website template built with Next.js, TypeScript, CSS, and Lucide React.

The template is designed for service businesses that want a polished online presence with a simple WhatsApp booking flow.

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
