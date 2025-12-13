# Sloe Fit Shopify Theme

A complete Shopify Online Store 2.0 theme built with best practices for the Sloe Fit brand.

## 📁 Folder Structure

Here's where everything goes and why:

### `layout/theme.liquid`
**Location:** `layout/theme.liquid`  
**Purpose:** This is the main HTML wrapper for your entire store. It contains the `<head>` and `<body>` tags, and wraps all page content. Think of it as the skeleton of your site.

**What it does:**
- Loads fonts and CSS
- Sets up theme settings and color variables
- Includes the header and footer sections
- Wraps all page content

### `templates/index.json`
**Location:** `templates/index.json`  
**Purpose:** This is the homepage template. It defines which sections appear on your homepage and in what order.

**How to use:**
- Edit this file to add, remove, or reorder sections on your homepage
- Each section listed here will appear on the homepage

### `sections/`
**Location:** `sections/` folder  
**Purpose:** Each file here is a reusable section that can be added to any page via the theme editor.

**Sections included:**
- `announcement-bar.liquid` - Top announcement bar
- `header.liquid` - Main navigation header
- `hero.liquid` - Large hero section with headline and CTAs
- `featured-collection.liquid` - Displays products from a collection
- `how-it-works.liquid` - Three-column "ecosystem" explanation
- `brand-story.liquid` - Image + text trust builder section
- `newsletter.liquid` - Email signup form
- `footer.liquid` - Site footer with links

**How to use:**
- Each section has a `{% schema %}` block at the bottom
- The schema defines settings that appear in the Shopify theme editor
- You can customize each section without touching code!

### `snippets/`
**Location:** `snippets/` folder  
**Purpose:** Reusable code chunks that can be included in sections or other snippets.

**Snippets included:**
- `product-card.liquid` - Displays a product card
- `product-card-placeholder.liquid` - Placeholder for products
- `price.liquid` - Formats and displays product prices
- `meta-tags.liquid` - SEO meta tags
- `icon-*.liquid` - Various icon SVGs

**How to use:**
- Include snippets in sections using: `{% render 'snippet-name' %}`

### `assets/`
**Location:** `assets/` folder  
**Purpose:** CSS, JavaScript, images, and other static files.

**Files included:**
- `base.css` - Main stylesheet with base styles
- `global.js` - Global JavaScript functionality

**How to use:**
- Reference in Liquid files: `{{ 'filename.css' | asset_url | stylesheet_tag }}`
- Or in JavaScript: `{{ 'filename.js' | asset_url | script_tag }}`

### `config/theme.json`
**Location:** `config/theme.json`  
**Purpose:** Theme-wide settings like colors, fonts, and layout options.

**What you can customize:**
- Colors (primary accent, text, backgrounds)
- Typography (heading and body fonts)
- Page width
- Button styles
- Product card styles

**How to use:**
- Edit this file to change default theme settings
- Settings appear in Theme Settings in the Shopify admin

### `locales/en.default.json`
**Location:** `locales/en.default.json`  
**Purpose:** All text strings for the theme. Makes it easy to translate or change wording.

**How to use:**
- Edit text here to change labels throughout the theme
- Reference in Liquid: `{{ 'key.path' | t }}`

## 🎨 Design System

### Colors
- **Primary Accent:** `#C8FF00` (Electric Lime) - Used for buttons and highlights
- **Background:** `#121212` (Dark) - Main background
- **Background Alt:** `#1E1E1E` (Dark Alt) - Secondary backgrounds
- **Text:** `#FFFFFF` (White) - Primary text color

### Typography
- **Headings:** Inter Black (bold, uppercase)
- **Body:** Inter Regular (clean, readable)

## 🚀 Getting Started

1. **Upload to Shopify:**
   - Zip this entire folder
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"

2. **Customize Sections:**
   - Go to Theme Editor
   - Click any section to customize it
   - Settings are explained in each section's schema

3. **Set Up Collections:**
   - Create a collection called "The Starter Stack"
   - Add your products to it
   - The featured collection section will automatically display them

4. **Configure Menus:**
   - Go to Navigation in Shopify admin
   - Create menus for: Shop, Company, Support
   - Assign them in the Header and Footer sections

## 📝 Section Customization Guide

### Hero Section
- **Heading:** Main headline
- **Text:** Subheadline
- **Primary Button:** Main CTA (links to collection)
- **Secondary Button:** Secondary CTA (links to AI Coach page)

### Featured Collection
- **Collection:** Select which collection to display
- **Products to Show:** How many products (default: 3)
- **Title & Description:** Section heading and description

### How It Works
- Add up to 3 "Step" blocks
- Each step has: Number, Heading, and Text
- Perfect for explaining your ecosystem

### Brand Story
- **Image:** Upload a trust-building image
- **Title & Text:** Your brand story
- **Button:** Link to full story page

### Newsletter
- Automatically connects to Shopify's customer email system
- **Title & Text:** Signup messaging
- **Button Label:** Submit button text

### Footer
- Add multiple columns using blocks
- **Text Column:** Logo, mission, social icons
- **Menu Column:** Link lists (Shop, Company, Support)

## 🛠️ Customization Tips

1. **Change Colors:**
   - Edit `config/theme.json` → `colors_accent_1` for primary color
   - Or use Theme Settings in Shopify admin

2. **Add New Sections:**
   - Create a new `.liquid` file in `sections/`
   - Add a `{% schema %}` block with settings
   - Add it to `templates/index.json` to show on homepage

3. **Modify Styles:**
   - Edit `assets/base.css` for global styles
   - Each section has its own `{% style %}` block for section-specific styles

4. **Add Icons:**
   - Create SVG files in `snippets/icon-*.liquid`
   - Reference them: `{% render 'icon-name' %}`

## 📚 Resources

- [Shopify Theme Development Docs](https://shopify.dev/themes)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid)
- [Online Store 2.0](https://www.shopify.com/partners/blog/shopify-online-store-2-0)

## ⚠️ Important Notes

- Always test changes in a development theme first
- Backup your theme before making major changes
- Use the Theme Editor when possible (no code required!)
- Each section's schema makes it easy for non-developers to customize

## 🎯 Next Steps

1. Upload and activate the theme
2. Customize sections via Theme Editor
3. Add your products and collections
4. Set up navigation menus
5. Configure theme settings (colors, fonts)
6. Test on mobile devices
7. Launch! 🚀

---

**Need Help?** Each section includes helpful info in its schema explaining what each setting does. The Theme Editor makes it easy to customize without coding!

