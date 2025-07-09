# Product Requirements Document (PRD)

## Project: dk-rose-water Template Enhancements

### Overview
This PRD outlines the requirements for updating the `dk-rose-water` product template in the Shopify Boond Kalles theme. The goal is to improve the product display experience, increase the number of selluxe bullets, and optimize the variant selector logic.

---

## 1. Scope
All changes are to be made specifically to the `dk-rose-water` template (`templates/product.dk-rose-water.json`) and any referenced sections/snippets.

---

## 2. Requirements

### 2.1. Image Gallery Thumbnails
- **Requirement:** The product image gallery must display image thumbnails *below* the primary image on both desktop and mobile.
- **Details:**
  - Thumbnails should be horizontally aligned below the main image.
  - This behavior must be consistent across all device sizes.
  - If the current section/setting does not support this, update the relevant section (likely `main-products.liquid`) to force the thumbnail position to `bottom` for this template.

### 2.2. Selluxe Bullets
- **Requirement:** Increase the number of selluxe bullets from 3 to 5.
- **Details:**
  - Update the `selluxe_icons_with_text` block definition to support 5 bullets (icons, SVGs, and text colors for each bullet).
  - Update the rendering logic to display all 5 bullets if provided.
  - Ensure the UI remains visually balanced and mobile-friendly.

### 2.3. Variant Selector Visibility
- **Requirement:** Hide variant selectors if there is only 1 variant for the product.
- **Details:**
  - If the product has only one variant, do not render the variant selector UI (swatches, dropdowns, etc.).
  - The add-to-cart button and price should remain visible.
  - This logic should be robust for all product types (single-variant and multi-variant).

---

## 3. Acceptance Criteria
- [ ] Thumbnails are always shown below the main image on both desktop and mobile for dk-rose-water.
- [ ] Up to 5 selluxe bullets can be configured and are displayed if set.
- [ ] Variant selectors are hidden if there is only one variant, with no visual glitches.
- [ ] No regressions to unrelated product templates or sections.

---

## 4. Out of Scope
- Changes to unrelated product templates.
- Global theme settings not referenced by the dk-rose-water template.

---

## 5. References
- `templates/product.dk-rose-water.json`
- `sections/main-products.liquid` (for gallery and variant logic)
- `selluxe_icons_with_text` block definition and rendering

---

*Prepared for Boond Fragrances Shopify Theme Customization* 