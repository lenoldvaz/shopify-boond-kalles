# Product Requirements Document: Swatch-Based Variant Selection and Dynamic Product Updates

## 1. Overview

**Objective:**
Enable clickable swatch-based variant selection on Shopify product pages that dynamically updates:

* Selected swatch styling
* Variant title and price
* Main product image (to variant’s featured media)
* Hidden variant input for Add-to-Cart form

**Stakeholders:**

* Product Manager
* Front-end Developer
* Shopify Theme Developer
* QA Engineer
* UX Designer

## 2. Scope

### In Scope

1. **Liquid Template Updates**

   * Wrap product section in `data-section-id` container
   * Render swatch groups with `swatches-select` and `swatch_pr_item`
   * Output `#variant-title` and `#variant-price`
   * Add `data-mdid` to media thumbnails
   * Ensure Add-to-Cart form has `name="id"` input
2. **JavaScript Logic**

   * Initialize on page load and Shopify section load
   * Listen for swatch clicks
   * Toggle `.is-selected-nt` class on selected swatches
   * Find matching variant from `{{ product | json }}`
   * Update title, price, hidden input, and image
3. **CSS Styling**

   * Define `.swatch_pr_item.is-selected-nt` highlight style
4. **Testing & QA**

   * Cross-browser testing
   * Responsive/mobile behavior
   * Verify correct variant ID in cart form

### Out of Scope

* Third-party swatch app integration
* Shopify Admin customizations
* Backend variant creation

## 3. Requirements

### 3.1 Functional Requirements

| ID  | Requirement                                                                | Priority |
| --- | -------------------------------------------------------------------------- | -------- |
| FR1 | Swatch container must have `data-section-id` attribute                     | High     |
| FR2 | Each swatch group `<ul>` must have `class="swatches-select"` and `data-id` | High     |
| FR3 | Swatch items `<li>` must have `class="swatch_pr_item"` and `data-value`    | High     |
| FR4 | JS listens on `.swatch_pr_item` clicks and toggles `.is-selected-nt`       | High     |
| FR5 | Variant title (`#variant-title`) updates to selected variant title         | High     |
| FR6 | Variant price (`#variant-price`) updates via `Shopify.formatMoney`         | High     |
| FR7 | Hidden input or select `name="id"` updates to selected variant ID          | High     |
| FR8 | `data-mdid`-tagged thumbnail `.click()` triggers main image swap           | Medium   |

### 3.2 Non-Functional Requirements

* **Performance:** JS initialization must not exceed 50ms on page load
* **Accessibility:** Swatch interactions accessible via keyboard
* **Maintainability:** Code documented and modular
* **Browser Compatibility:** Latest Chrome, Firefox, Safari, Edge

## 4. Technical Design

1. **Liquid Changes**

   * Update product template to include `data-section-id="product-{{ product.id }}"`
   * Ensure `#variant-title` and `#variant-price` placeholders exist
   * Add `data-mdid` attribute to media item containers
2. **JavaScript Module**

   ```js
   function initVariantSelection(sectionId) { … }
   document.addEventListener('DOMContentLoaded', …);
   document.addEventListener('shopify:section:load', …);
   ```
3. **CSS**

   ```css
   .swatch_pr_item.is-selected-nt { outline: 2px solid #000; }
   ```

## 5. Acceptance Criteria

* Clicking swatches highlights selected swatch
* Title and price update immediately
* Main image swaps to variant’s featured media
* Cart form submits correct variant
* No console errors in browser

## 6. Implementation Timeline

| Phase           | Tasks                               | Duration |
| --------------- | ----------------------------------- | -------- |
| Design          | Define HTML structure & CSS styles  | 1 day    |
| Development     | Liquid & JS implementation          | 2 days   |
| Testing         | QA across devices and browsers      | 1 day    |
| Review & Launch | Stakeholder review & deploy to prod | 1 day    |

**Total Estimated Time:** 5 business days
