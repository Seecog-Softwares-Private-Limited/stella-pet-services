# Quick Start Guide

## First Time Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build TailwindCSS**
   ```bash
   npm run build:css:prod
   ```

3. **Start the server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Development Workflow

For development with auto-reload:

**Terminal 1** - Run the server:
```bash
npm run dev
```

**Terminal 2** - Watch CSS changes:
```bash
npm run build:css
```

## Testing Forms

- **Booking Form**: Navigate to `/booking` and fill out the multi-step form. Submissions are logged to the console.
- **Contact Form**: Navigate to `/about` and scroll to the contact form. Submissions are logged to the console.

## Project Structure Overview

- `server.js` - Main Express server
- `routes/` - Route handlers for each page
- `views/` - Handlebars templates (layouts, partials, pages)
- `data/` - Service data and in-memory storage
- `public/` - Static assets (CSS, JS, images)

## Next Steps

1. Add placeholder images to `public/images/`:
   - `favicon.ico`
   - `og-image.jpg` (1200x630px)
   - `apple-touch-icon.png` (180x180px)

2. Customize content in:
   - `data/services.js` - Service offerings
   - `data/testimonials.js` - Customer testimonials
   - `routes/about.js` - Team members and service areas

3. For production:
   - Set up a database for form submissions
   - Configure environment variables
   - Set up proper image hosting

