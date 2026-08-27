# Vencilla WordPress Theme — Hostinger Deployment Guide

This custom WordPress theme faithfully converts the React + Vite + Tailwind CSS Vencilla website into a high-performance, native WordPress + WooCommerce theme designed for deployment on standard **Hostinger WordPress Hosting**.

---

## 📁 Theme Directory Overview

The complete custom theme is ready in:
`wordpress-theme/vencilla/`

```
vencilla/
├── style.css                          # Master luxury CSS & animations
├── functions.php                      # Theme setup, assets enqueue & hooks
├── header.php                         # Fixed glassmorphism header & logo
├── footer.php                         # 4-column footer with social & certs
├── front-page.php                     # Homepage template
├── page.php                           # Default page template
├── index.php                          # Blog archive fallback
├── archive.php                        # Insights archive
├── single.php                         # Single blog article
├── 404.php                            # Custom 404 error page
├── page-about.php                     # About Us page
├── page-quality.php                   # Quality & Manufacturing page
├── page-global-presence.php           # Global Presence & Export Markets
├── page-contact.php                   # Contact & Enquiry AJAX form
├── page-request-quote.php             # Commercial Quotation / RFQ form
│
├── woocommerce/                       # WooCommerce Templates
│   ├── archive-product.php            # Products catalogue with realtime search
│   ├── taxonomy-product_cat.php       # Dedicated /textiles & /pharmaceuticals pages
│   ├── single-product.php             # Product details & specifications sheet
│   └── content-product.php            # Product card loop item
│
├── template-parts/                    # Modular UI Components
│   ├── hero-home.php                  # Interactive 3D hero section
│   ├── stats-bar.php                  # Global export stats bar
│   ├── about-section.php              # Who we are & commitment
│   ├── division-showcase.php          # 3D interactive textiles/pharma tabs
│   ├── feature-icons.php              # Value propositions
│   ├── trusted-by.php                 # Global partner logos grid
│   ├── cta-section.php                # Commercial CTA banner
│   ├── product-card.php               # B2B product card with spec badges
│   ├── enquiry-modal.php              # Interactive enquiry modal dialog
│   ├── navigation.php                 # Navigation menus
│   └── section-heading.php            # Standardized luxury section headings
│
├── assets/
│   ├── images/                        # All transparent logos and textures
│   │   ├── logo-transparent.png
│   │   ├── logo-all-white-transparent.png
│   │   ├── logo-circular-transparent.png
│   │   └── textures/                  # High-res world map & fabric textures
│   └── js/
│       ├── vencilla-main.js           # Header scroll, mobile menu, filters, tabs, modal
│       ├── vencilla-forms.js          # Nonce-secured AJAX form submissions
│       └── vencilla-3d.js             # Three.js sterile vial & capsules 3D scene
│
└── inc/
    ├── woocommerce.php                # WooCommerce meta fields & category setup
    ├── rest-api.php                   # /wp-json/vencilla/v1/ REST API endpoints
    ├── enquiry-handler.php            # AJAX enquiry email & DB logging
    ├── quote-handler.php              # AJAX RFQ handler with PDF/DOC upload
    ├── admin-columns.php              # Custom WP Admin columns (Division, MOQ)
    └── seed-products.php              # 1-Click WooCommerce product seeder
```

---

## 🚀 Step-by-Step Hostinger Deployment

### 1. Upload Theme to Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **File Manager** (or connect via FTP / SFTP).
3. Navigate to:
   `public_html/wp-content/themes/`
4. Upload the `vencilla` folder into `wp-content/themes/` (or upload as `vencilla.zip` and extract).

### 2. Activate the Theme
1. Log in to your **WordPress Admin Dashboard** (`https://yourdomain.com/wp-admin`).
2. Go to **Appearance → Themes**.
3. Locate **Vencilla** and click **Activate**.

### 3. Ensure Required Plugins are Active
- **WooCommerce** (Free) — Required for product management.
  *(Go to Plugins → Add New → Search "WooCommerce" → Install & Activate)*.

### 4. Create Standard Pages
In WP Admin, navigate to **Pages → Add New** and create the following pages with these exact slugs:

| Page Title | Slug | Template (Page Attributes) |
|---|---|---|
| **Home** | `home` | Default (front-page.php applies automatically) |
| **About Us** | `about` | About Us Page |
| **Quality & Manufacturing** | `quality` | Quality & Manufacturing Page |
| **Global Markets** | `global-presence` | Global Presence Page |
| **Contact** | `contact` | Contact Page |
| **Request a Quote** | `request-a-quote` | Request a Quote Page |
| **Insights** | `insights` | Default (Blog Posts page) |

*Next, go to **Settings → Reading**:*
- Set **Your homepage displays** to **A static page**.
- Homepage: **Home**
- Posts page: **Insights**
- Click **Save Changes**.

*Go to **Settings → Permalinks**:*
- Select **Post name** (`/%postname%/`).
- Click **Save Changes**.

---

## 🛍️ WooCommerce & Category Configuration

### Automatic Category Setup
When you activate the theme, the following category hierarchy is automatically generated in **Products → Categories**:

```
Products
├── Textiles (slug: textiles)
│   ├── African Wax Prints
│   ├── Uniform Fabrics
│   ├── Cotton Fabrics
│   ├── Embroidered Fabrics
│   └── Silk & Jacquard Brocades
└── Pharmaceuticals (slug: pharmaceuticals)
    ├── Active Pharmaceutical Ingredients (APIs)
    ├── Analgesic
    ├── Anti-Biotic
    ├── Antidepressant
    └── Antidiabetic
```

### 1-Click Product Seeder
To instantly populate WooCommerce with the initial Textile & Pharma products from your original React dataset:
1. Log in as WordPress Admin.
2. Visit this URL in your browser:
   `https://yourdomain.com/?seed_vencilla_products=VENCILLA_SEED_2024`
3. All initial products with specifications, CAS numbers, MOQs, compositions, and applications will be imported into WooCommerce.

---

## 👩‍💼 Admin Experience — Managing Products

A non-technical client can easily add/edit products from the WordPress dashboard:

1. Go to **Products → Add New**.
2. **Product Name** → Enter product title.
3. **Product Description** → Full technical overview & description.
4. **Short Description** → Summary (appears on product cards).
5. **Product Image** → Set featured image from Media Library.
6. **Product Categories** → Check `Textiles` or `Pharmaceuticals` (and relevant sub-categories).
7. **Vencilla Product Details (Custom Meta Box)**:
   - Select Division (`textiles` or `pharmaceuticals`)
   - Enter MOQ (e.g. `500 Meters` or `25 Kgs`)
   - For Textiles: Fabric Type, Composition, GSM, Width, Weave, Finish, Certifications.
   - For Pharma: CAS Number, Molecular Formula, Pharmacopeia Grade, Regulatory Status.
   - Enter Applications (one per line).
   - Enter Specifications (`Label|Value` per line).
8. Click **Publish**. The product will immediately appear dynamically on `/products`, `/textiles`, or `/pharmaceuticals`.

---

## ✉️ Lead Generation & Email Configuration

- Contact and RFQ submissions are processed via WordPress AJAX with nonces for security.
- Form submissions automatically send an email to your administration email (`export@vencilla.com` / WordPress admin email).
- Submissions are also safely stored inside WordPress under **Enquiries** (`vc_enquiry`) and **Quote Requests** (`vc_quote_request`) in the WP Admin sidebar so no leads are ever lost.
- To configure custom SMTP on Hostinger: Install the free **WP Mail SMTP** plugin and configure Hostinger's free email SMTP details.

---

## 🛡️ Security & Performance
- **Zero Node.js runtime required** in production.
- All dynamic data is escaped with `esc_html()`, `esc_url()`, and `esc_attr()`.
- Nonce protection (`wp_create_nonce('vencilla_nonce')`) on all AJAX endpoints.
- Lightweight Three.js bundle loaded asynchronously with native CSS fallback if WebGL is unavailable.
