# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a learning support company's one-page website project. The specifications are documented in `web1page.md` (in Japanese). The project aims to create a single-page WordPress website that showcases seminar and personal consultation services.

## Key Project Requirements

- **Technology Stack**: WordPress with potential Elementor page builder
- **Design**: One-page long-scroll layout inspired by Apple Education's clean design
- **Target Users**: Business professionals aged 30-50, entrepreneurs, team leaders
- **Main Sections**: Hero, Services, Features, Details, Testimonials, About, FAQ, Contact, Footer
- **Forms**: Contact form, seminar signup form, personal consultation booking form

## Development Requirements

- **Responsive Design**: Must support PC, tablet, and smartphone (320px-1920px)
- **Browser Support**: Chrome, Safari, Firefox, Edge (latest + 2 previous versions)
- **Performance**: PageSpeed Insights score of 85+ required
- **SSL**: HTTPS required
- **Features**: Smooth scrolling navigation, accordion FAQ, contact forms with auto-reply

## Color Palette

- Main: Soft Navy (#2563EB)
- Accents: Light Blue (#60A5FA), Soft Pink (#F9A8D4), Light Green (#86EFAC)
- Background: Pure White (#FFFFFF), Light Gray (#F8FAFC)
- Text: Dark Gray (#1F2937)

## Typography

- Headers: Noto Sans JP or Yu Gothic (bold/medium)
- Body: Noto Sans JP or Yu Gothic (regular)
- Minimum font size: 16px (mobile-first approach)

## Content Structure

The site follows a 10-section layout as detailed in the specification:
1. Header with navigation
2. Hero section with main CTA
3. Service overview
4. Three key features
5. Service details
6. Customer testimonials
7. Company/instructor introduction
8. FAQ (accordion style)
9. Contact/signup forms
10. Footer with external blog links

## Assets Needed

- Profile photos (representative, seminar scenes, consultation scenes)
- Hand-drawn style illustrations for learning processes
- Service feature icons
- Customer testimonial photos

## SEO Requirements

- Title: "学びのセミナー・個人相談 | [Company Name]"
- Target keywords: business seminars, personal consultation coaching, skill improvement training
- Proper heading hierarchy (H1-H6)
- Alt attributes for all images

## Performance Goals

- Session duration: 3+ minutes
- Scroll completion: 80% reach bottom
- Conversion rate: 5%+ take action
- Monthly inquiries: 15+

## Development Status

**COMPLETED** - Full website implementation finished

The project has been fully implemented as a modern, responsive one-page website with the following features:
- HTML5 semantic structure with all 10 required sections
- CSS3 responsive design (mobile-first approach)
- JavaScript interactive features (smooth scrolling, accordion FAQ, form validation)
- PHP form handler with email functionality
- SVG icons and Unsplash image integration
- Complete form system (seminar signup, consultation booking, general contact)

## Development Commands

### Local Development
```bash
# Start local server
python -m http.server 8000
# or
php -S localhost:8000

# Access site
http://localhost:8000
```

### Testing
- Open index.html in browser
- Test responsive design on different screen sizes
- Test form functionality (requires PHP server)
- Validate HTML/CSS/JavaScript

### File Structure
- `index.html` - Main page
- `css/style.css` - Styles
- `js/script.js` - Interactive features
- `contact-handler.php` - Form processing
- `images/` - All images and icons
- `README.md` - Documentation

## Key Features Implemented

1. **Responsive Design**: 320px-1920px support
2. **Interactive Elements**: Smooth scrolling, hamburger menu, FAQ accordion
3. **Form System**: Three forms with validation and PHP processing
4. **Performance**: Optimized CSS, lazy loading, animations
5. **Accessibility**: WCAG 2.1 AA compliance
6. **Security**: XSS/CSRF protection, input sanitization