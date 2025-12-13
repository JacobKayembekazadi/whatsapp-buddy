# Product Page Guide - Sloe Fit Theme

## 📄 Product Template Structure

The product page is built using **Online Store 2.0** architecture with three main sections:

### 1. Main Product Section (`sections/main-product.liquid`)
**Location:** `sections/main-product.liquid`  
**Purpose:** Displays the product details, images, and add-to-cart functionality.

**Features:**
- ✅ Breadcrumb navigation
- ✅ Product image gallery with thumbnails
- ✅ Product title and description
- ✅ Price display
- ✅ Customizable bullet points (key benefits)
- ✅ Variant selector (if product has variants)
- ✅ Quantity selector with +/- buttons
- ✅ Add to cart button

**Customization:**
- Go to Theme Editor → Click "Main Product" section
- **Show Bullet Points:** Toggle to show/hide benefits
- **Bullet Points:** Enter one benefit per line (e.g., "25g Protein Per Serving")
- **Color Scheme:** Choose the color scheme

### 2. Product Trust Section (`sections/product-trust.liquid`)
**Location:** `sections/product-trust.liquid`  
**Purpose:** Builds trust with key selling points and certifications.

**Features:**
- ✅ Customizable title
- ✅ Up to 3 trust items (blocks)
- ✅ Icon selection (Check, Flask, Award)
- ✅ Heading and description for each item

**Customization:**
- Go to Theme Editor → Click "Product Trust" section
- **Title:** Main heading (e.g., "Transparently Sourced, No Guesswork.")
- **Trust Items:** Click "Add block" to add more items
- Each block has:
  - **Icon:** Choose from Check Circle, Flask, or Award
  - **Heading:** Title (e.g., "Zero Added Sugar")
  - **Text:** Description (e.g., "Only clean, effective ingredients.")

### 3. Product Recommendations Section (`sections/product-recommendations.liquid`)
**Location:** `sections/product-recommendations.liquid`  
**Purpose:** Shows related products from the same collection (cross-sell).

**Features:**
- ✅ Customizable title
- ✅ Automatically excludes current product
- ✅ Shows products from the same collection
- ✅ Uses product cards for consistent styling

**Customization:**
- Go to Theme Editor → Click "Product Recommendations" section
- **Title:** Heading (e.g., "COMPLETE THE STARTER STACK")
- **Collection:** Select which collection to pull from (defaults to product's collection)
- **Products to Show:** Number of products (2-4, default: 2)

## 🎨 Design Features

### Image Gallery
- Main product image displays at 800px width
- Up to 4 thumbnail images below
- Click thumbnails to change main image
- Active thumbnail highlighted with primary color border

### Quantity Selector
- Clean +/- buttons
- Number input in the middle
- Minimum value: 1
- Styled to match theme

### Bullet Points
- Green checkmark icons
- Customizable list of benefits
- One benefit per line in settings

## 📝 Setup Instructions

### 1. Product Images
1. Go to **Products** → Select your product
2. Upload product images (at least 1, up to 4 for gallery)
3. First image becomes the main image
4. Next 3 images become thumbnails

### 2. Product Description
1. In product settings, add a **Description**
2. This appears below the product title
3. Supports basic HTML formatting

### 3. Bullet Points
1. Go to Theme Editor → **Main Product** section
2. Enable "Show Bullet Points"
3. Enter benefits, one per line:
   ```
   25g Protein Per Serving
   Transparently Sourced
   Zero Added Sugar
   Mixes Instantly
   ```

### 4. Trust Section
1. Go to Theme Editor → **Product Trust** section
2. Edit the title
3. Customize the 3 default blocks or add more
4. Choose icons and edit text

### 5. Recommendations
1. Make sure your product is in a collection
2. Go to Theme Editor → **Product Recommendations** section
3. Select the collection (or it uses product's collection automatically)
4. Set how many products to show

## 🔧 Advanced Customization

### Adding More Sections
You can add any section to the product template:
1. Go to Theme Editor
2. Click "Add section"
3. Choose from available sections
4. Drag to reorder

### Variant Support
- If your product has variants (size, color, etc.), they automatically appear
- Variants are shown as dropdown selects
- Price updates based on selected variant

### Custom Fields
To add custom product fields:
1. Use Shopify metafields
2. Reference in Liquid: `{{ product.metafields.custom.field_name }}`

## 📱 Mobile Responsive

All sections are fully responsive:
- Image gallery stacks on mobile
- Product info takes full width on mobile
- Trust items stack vertically on mobile
- Recommendations show 1 column on mobile

## ✅ Checklist

Before launching, make sure:
- [ ] Product images uploaded (at least 1)
- [ ] Product description added
- [ ] Bullet points configured
- [ ] Trust section customized
- [ ] Product is in a collection (for recommendations)
- [ ] Price is set correctly
- [ ] Variants configured (if applicable)
- [ ] Tested on mobile device
- [ ] Add to cart button works

## 🆘 Common Issues

### Images Not Showing?
- Make sure images are uploaded to the product
- Check image file sizes (Shopify has limits)
- Verify images are published

### Recommendations Not Showing?
- Ensure product is in a collection
- Check that collection has other products
- Verify collection is selected in section settings

### Variants Not Working?
- Make sure variants are created in product settings
- Check variant prices are set
- Verify inventory is available

---

**Pro Tip:** Use the Theme Editor to customize everything visually - no code required! Each section has helpful descriptions explaining what each setting does.

