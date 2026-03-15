# Content migration guide (old `roja` → new template `rojamarkappalam.com`)

This workspace has:
- **New template (target)**: `d:\Personal\myfolder\projects\rojamarkappalam.com` (TemplateMo “Villa Agency”)
- **Old site (source)**: `d:\Personal\myfolder\roja` (your existing content + images)

The safest way is: **keep the new template’s CSS/JS/layout**, and **copy only your content (text + images + product list + contact info)** from the old site.

---

## 1) Make a backup (recommended)

Copy the target folder somewhere safe before big edits.

---

## 2) Images: copy/reuse old images in the new template

### Product images
Your old products are in:
- `roja/assets/img/products/`

Your new template already has:
- `assets/images/products/`

Confirm files exist (they appear to already be copied). If you need to re-copy, in PowerShell:

```powershell
$old = "D:\Personal\myfolder\roja\assets\img\products"
$new = "D:\Personal\myfolder\projects\rojamarkappalam.com\assets\images\products"
Copy-Item -Force -Recurse "$old\*" $new
```

### Logo + favicon
- Old: `roja/assets/img/logo.png`, `roja/assets/img/favicon.png`
- New: `assets/images/logo.png`, `assets/images/favicon.png`

If your branding logo/favicon should be the old ones, copy them over the new files.

### Slider/banner images
The new template banner images are:
- `assets/images/banner-01.jpg`, `banner-02.jpg`, `banner-03.jpg`

They are referenced from CSS in `assets/css/rojamark-appalam.css` under `.main-banner .item-1/.item-2/.item-3`.

Simplest options:
- Replace `banner-01.jpg` etc with your own images (same filenames), **or**
- Edit the CSS URLs to point to different files.

---

## 3) Decide your page mapping (old → new)

The new template pages:
- `index.html` (Home)
- `products.html` (Listing)
- `product-details.html` (Detail page)
- `contact.html` (Contact)

Suggested mapping for your business site:
- `index.html` → Home (hero + short about + highlight products)
- `products.html` → Products listing (replace “Properties” cards with your products)
- `product-details.html` → Product details (show one product; can be driven by `?product=` query)
- `contact.html` → Contact (address, phone, map)

If you want a dedicated About page like your old `about.html`, you can either:
- Create `about.html` using the new template header/footer, **or**
- Put the “About” content into `index.html` (featured/accordion sections).

---

## 4) Copy the content (what to replace)

### A) Site-wide header/footer (all pages)
On each new template page (`index.html`, `products.html`, `product-details.html`, `contact.html`):

1) Replace placeholder top bar info:
- `info@company.com` → your real email
- `Sunny Isles Beach, FL 33160` → your real address/city

2) Update the logo/brand:
- Currently the template shows a text logo (`<h1>Villa</h1>`). You can keep text or switch to an image logo using `assets/images/logo.png`.

3) Update navigation labels:
- “Properties” → “Products”
- “Property Details” → “Product Details” (or remove it from menu)

### B) Home page (`index.html`)
Source content:
- Taglines + intro text from old `roja/index.html`
- About paragraphs from old `roja/about.html`

Where to paste:
- Replace the hero text under `.main-banner` (the `<span class="category">` and `<h2>` lines).
- Replace the “Featured” section with your About summary.
- Replace/remove real-estate counters and “deal” sections if they don’t fit your business.

### C) Products listing (`products.html`)
Source content:
- Product cards from old `roja/shop.html`

What to do:
- Change the page heading “Properties” → “Products”.
- Replace each `.properties-items` card with your product:
  - Image: `assets/images/products/<file>.jpg`
  - Title: Tamil/English product name
  - Button link: point to details page, e.g. `product-details.html?product=babysize`

You can also remove the filter bar (`.properties-filter`) if you don’t need categories.

### D) Product details (`product-details.html`)
You have an existing product-details logic in old `roja/single-product.html` that reads `?appalam=...` and sets image/title/ingredients.

Best approach in the new template:
- Keep **one** details page (`product-details.html`)
- Drive it by query string, e.g. `?product=babysize`
- Add a small JS file (example: `assets/js/product-details.js`) that:
  - reads `product` from the URL
  - maps product keys to {title, image, ingredients}
  - updates the page DOM

This is the same idea as your old `single-product.html`, just applied to the new layout.

### E) Contact (`contact.html`)
Source content:
- Address/phones/map iframe from old `roja/contact.html`

What to replace:
- “Get In Touch With Our Agents” → your message
- Phone/email blocks → your real phone/email
- Map iframe → your Madurai embed link (already present in old contact page)

---

## 5) Contact form handling (important)

The new template’s contact form currently has `action=""` (no backend), so it won’t email you by itself.

You have `roja/mail.php`, but **it contains hard-coded email credentials** (unsafe to deploy). Before reusing any PHP mail script:
- Remove hard-coded passwords from code
- Rotate/replace any exposed credentials
- Prefer server mail() or PHPMailer with an app password stored outside the repo (env/config)

If you are hosting on a **static host** (GitHub Pages/Netlify without PHP): use a form service (Formspree, Netlify Forms) instead of PHP.

If you tell me where you plan to host, I can suggest the cleanest option.

---

## 6) Quick verification checklist

- Open `index.html` in a browser: images load, no broken CSS.
- Click nav: Products page works.
- Click a product card: details page shows the right product from the query string.
- Contact page shows correct address/phones + map.

---

## If you want me to do the migration edits
Reply with:
1) Your preferred menu: **Home / About / Products / Contact** (yes/no)
2) Your official email + phone numbers to display
3) Whether you want **product details** to be dynamic (`?product=`) or a simple static page
4) Hosting: **cPanel/PHP** or **static hosting**

Then I can update the new template pages in this workspace accordingly.
