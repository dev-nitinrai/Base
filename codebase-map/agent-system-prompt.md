# Shopify Theme Agent — Codebase Context

## Rules Before Editing Any File

1. **Check feature index first** — find primary vs secondary files for the task
2. **Check dependency graph** — before editing any JS file, read `codebase-map/dependency-graph.yml` to see what depends on it and what it depends on. Look at `depended_on_by` to understand impact, and `impact_score` to gauge risk.
3. **Never add inline scripts** to .liquid files if a .js file owns that logic
4. **Trace to the root** — if broken in a custom element, find its JS class in the dependency graph's `element_registry`
5. **For new UI** — check component inventory and mockup-matching-guide.md before creating new files
6. **Check `do_not_edit`** — some files are generated or theme-critical
7. **Event coupling** — check `event_bus` in the dependency graph before renaming or removing custom events

---

## Shopify Theme Development Guidelines

### Liquid Best Practices
- Load CSS: `{{ 'file.css' | asset_url | stylesheet_tag }}` — never use inline `<style>` in new code
- Load JS: `<script src="{{ 'file.js' | asset_url }}" defer="defer"></script>`
- Use `{% render 'snippet' %}` (not `{% include %}`) for snippet isolation
- Section schema: always include `name`, `settings[]`, optional `blocks[]` with `presets[]`
- Use `{{ 'string_key' | t }}` for user-facing text (i18n from locales/)

### Schema Best Practices
- Settings types: text, textarea, richtext, image_picker, url, color, range, select, checkbox, number, font_picker, collection, product, blog, page, link_list, video_url
- Block types must have unique `type` identifier and clear `name`
- Include `presets` with at least one default for theme editor
- Use `templates` array to restrict where sections appear
- Max blocks: set `max_blocks` when the layout has a fixed number of slots

### Theme Check Compliance
- Never hardcode absolute URLs — use `asset_url`, `img_url`, or `routes` object
- Always add `alt` attribute to images: `alt="{{ image.alt | escape }}"`
- Don't use deprecated tags (`{% include %}` → `{% render %}`)
- Escape user input: `{{ string | escape }}` in attributes
- Don't reference `content_for_header` outside layout files

---

## Feature → File Index

### CART DRAWER
- **Start here**: snippets/component-cart-drawer.liquid
- **Primary**: snippets/component-cart-drawer.liquid, assets/component-cart-drawer.js, assets/cart.css
- **Do not edit**: assets/critical.css

### PRODUCT FORM
- **Start here**: sections/product.liquid
- **Primary**: sections/product.liquid, assets/section-product.js, assets/section-product.css
- **Do not edit**: assets/shopify.js, assets/critical.css

### COLLECTION GRID
- **Start here**: sections/collection.liquid
- **Primary**: sections/collection.liquid, assets/section-collection.css, assets/section-collection.js
- **Do not edit**: templates/collection.json

### HEADER NAVIGATION
- **Start here**: sections/header.liquid
- **Primary**: sections/header.liquid, assets/section-footer.css
- **Do not edit**: assets/critical.css

### PREDICTIVE SEARCH
- **Start here**: snippets/component-predictive-search.liquid
- **Primary**: snippets/component-predictive-search.liquid, assets/component-predictive-search.js, assets/component-predictive-search.css
- **Do not edit**: assets/theme.js

### QUICK ADD
- **Start here**: assets/component-quick-add.js
- **Primary**: assets/component-quick-add.js, assets/component-quick-add.css
- **Do not edit**: assets/component-modal-opener.js

### FILTERS
- **Start here**: assets/section-collection.js
- **Primary**: snippets/component-filters-sidebar.liquid, snippets/component-filters-horizontal.liquid, assets/section-collection.css
- **Do not edit**: assets/shopify.js

### PRODUCT MEDIA
- **Start here**: snippets/component-product-media-gallery.liquid
- **Primary**: snippets/component-product-media-gallery.liquid, snippets/component-product-media.liquid, assets/section-product.css
- **Do not edit**: assets/critical.css

### VARIANT PICKER
- **Start here**: assets/section-product.js
- **Primary**: sections/product.liquid, assets/section-product.js
- **Do not edit**: assets/shopify.js


---

## Available Sections (49)

- **`sections/404.liquid`** — 404 section | keywords: 404 error page, page not found, error state, centered text layout, call-to-action button, minimal error page, full-width centered content, error message
- **`sections/Faq-metaobjects.liquid`** — FAQ — Metaobjects section | keywords: faq-accordion, collapsible-faq, accordion-list, expandable-questions, metaobject-faq, q&a-section, faq-dropdown, single-column-accordion
- **`sections/Faq.liquid`** — FAQ section | keywords: faq-accordion, collapsible-content, expandable-list, question-answer, accordion-section, toggle-content, plus-minus-icons, faq-list
- **`sections/account.liquid`** — t:sections.main-account.name section | keywords: account-dashboard, customer-portal, order-history-table, logged-in-view, my-account, order-list, user-profile, account-overview, transaction-history, customer-orders
- **`sections/activate-account.liquid`** — t:sections.main-activate-account.name section | keywords: account activation form, password setup, two-field form, dual password input, customer onboarding, account confirmation, submit-cancel buttons, form error messaging, centered form layout, customer authentication
- **`sections/addresses.liquid`** — t:sections.main-addresses.name section | keywords: customer account addresses, address book, form layout, add new address, edit address, paginated address list, customer portal, account management, address form fields, customer dashboard
- **`sections/animated-features-v2.liquid`** — Animated Features V2 section | keywords: animated-percentage, split-layout, image-with-stats, feature-checklist, stat-highlight, percentage-counter, animated-features, benefit-list, two-column-features, image-text-split
- **`sections/animated-features.liquid`** — Animated Features section | keywords: animated-features-grid, flip-card-grid, interactive-cards, 2-column-split-layout, features-with-images, hover-flip-cards, icon-feature-showcase, animated-grid-section
- **`sections/announcement-bar.liquid`** — Top-of-page announcement strip | keywords: announcement-bar, top-banner, promo-banner, rotating-message-bar, alert-banner, sticky-header-banner, rotating-announcements, carousel-banner, notification-strip, promotional-header
- **`sections/article.liquid`** — t:sections.main-article.name section | keywords: article-hero, blog-post-layout, featured-image, article-content, back-button, blog-single, post-template, author-meta, share-buttons, pagination
- **`sections/blog.liquid`** — t:sections.main-blog.name section | keywords: blog-grid, article-list, blog-posts, collage-layout, blog-archive, post-grid, article-feed, blog-listing, paginated-blog
- **`sections/blogs.liquid`** — Blogs section | keywords: blog-grid, article-cards, blog-preview, content-grid, editorial-grid, blog-section, article-listing, post-preview-cards
- **`sections/brand-story-v2.liquid`** — Brand Story V2 section | keywords: accordion-image-split, expandable-content-layout, interactive-story-section, tab-image-toggle, two-column-accordion, content-image-switcher, brand-narrative, story-blocks
- **`sections/brand-story.liquid`** — Brand Story section | keywords: brand-story, image-comparison, before-after, side-by-side-images, two-column-layout, labeled-images, comparison-box, split-content, image-with-text, brand-narrative
- **`sections/cart.liquid`** — t:sections.main-cart-items.name section | keywords: shopping-cart, cart-page, line-items-list, cart-summary, quantity-selector, cart-item-row, product-thumbnail-cart, cart-totals, cart-variant-options
- **`sections/collection.liquid`** — t:sections.main-collection-product-grid.name section | keywords: product-grid, collection-layout, filter-sidebar, horizontal-filters, vertical-filters, pagination, product-card-grid, collection-hero, quick-add-buttons, multi-column-grid
- **`sections/collections.liquid`** — t:general.collections_grid section | keywords: collection-grid, category-grid, collections-list, 3-column-grid, collection-cards, featured-collections, category-tiles, collections-overview
- **`sections/custom-section.liquid`** — t:general.custom_section section | keywords: custom-content, flexible-container, background-image-section, grid-layout, modular-blocks, full-width-banner, theme-blocks-container, configurable-section
- **`sections/dynamic-grid.liquid`** — Custom section | keywords: dynamic-grid, content-grid, flexible-grid, multi-column-layout, grid-section, masonry-layout, tile-grid, grid-showcase
- **`sections/featured-collections-v2.liquid`** — Grid of products from a collection | keywords: tabbed-collections, product-carousel, collection-tabs, multi-collection-slider, swiper-products, tabbed-product-grid, collection-switcher
- **`sections/featured-collections.liquid`** — Grid of products from a collection | keywords: featured collections grid, collection cards, collection showcase, multi-collection display, collection gallery, category grid, collection thumbnails, collection grid layout
- **`sections/featured-products.liquid`** — Single product showcase with form | keywords: featured-products, product-carousel, product-slider, swiper-products, highlighted-products, curated-collection, product-showcase, horizontal-scroll-products
- **`sections/footer.liquid`** — Site footer with links and info | keywords: footer, site-footer, multi-column-footer, footer-menu, footer-links, social-icons, brand-footer, newsletter-footer, footer-blocks, meganav-footer
- **`sections/header.liquid`** — Site navigation header | keywords: header, top-navigation, sticky-header, logo-nav-cart, mega-menu, utility-nav, site-header, horizontal-menu, drawer-menu, cart-icon
- **`sections/hello-world.liquid`** — Hello World section | keywords: welcome-hero, split-layout, icon-illustration, three-column-highlights, feature-grid, informational-section, text-image-split, benefit-cards, educational-layout
- **`sections/hero-v2.liquid`** — Full-width banner with headline and CTA | keywords: hero, split-layout, hero-banner, video-hero, image-text-split, hero-with-cta, left-content-right-media, video-background-hero, featured-hero, homepage-hero
- **`sections/hero.liquid`** — Full-width banner with headline and CTA | keywords: hero banner, full-width hero, video background hero, image background hero, CTA banner, landing hero, endorsement banner, signature hero, star rating hero, overlay hero
- **`sections/link-readme.liquid`** — Link Readme section | keywords: call-to-action button, single CTA, centered button, standalone link, simple action section, button-only section, minimal CTA, isolated button
- **`sections/login.liquid`** — t:sections.main-login.name section | keywords: login-form, customer-login, password-recovery, email-input, auth-page, sign-in, shop-login-button, single-column-form, customer-account, recover-password
- **`sections/logos.liquid`** — Logos section | keywords: logo-marquee, logo-carousel, logo-strip, brand-logos, partner-logos, trust-badges, client-logos, infinite-scroll-logos, logo-ticker, brand-bar
- **`sections/order.liquid`** — t:sections.main-order.name section | keywords: order-details-table, customer-account-order, order-history-detail, transactional-table, line-item-table, purchase-summary, order-confirmation-layout, tabular-data, account-dashboard-child, ecommerce-order-view
- **`sections/page.liquid`** — t:sections.main-page.name section | keywords: static page, about page, policy page, content page, centered text, single column, narrow width, text-only layout, simple page, information page
- **`sections/password.liquid`** — Password Page section | keywords: password-gate, coming-soon-page, store-lock-screen, centered-form-landing, email-capture-splash, launch-page, pre-launch-portal, storefront-unlock, access-restricted-landing
- **`sections/pickup-availability.liquid`** — Custom section | keywords: pickup-availability, store-locator, in-store-pickup, location-list, availability-drawer, modal-dialog, stock-status, product-availability, store-info
- **`sections/predictive-results.liquid`** — Custom section | keywords: predictive-search, autocomplete-dropdown, search-suggestions, product-quick-results, live-search, typeahead-results, search-overlay, instant-search
- **`sections/product-details.liquid`** — Product Details section | keywords: accordion, collapsible-content, product-details, expandable-sections, faq-style, details-accordion, tabbed-content, image-text-blocks, split-content, multi-block-accordion
- **`sections/product-highlights.liquid`** — Product Highlights section | keywords: split-layout, product-features, icon-list, two-column, feature-highlights, icon-with-text, product-showcase, benefit-list, image-text-split, feature-grid
- **`sections/product.liquid`** — t:sections.main-product.name section | keywords: product-detail-page, pdp, split-layout, product-gallery, buy-box, variant-selector, add-to-cart, product-info, media-sidebar, product-hero
- **`sections/promo-banner.liquid`** — Banner image with text overlay | keywords: promo-banner, product-spotlight, featured-product, split-layout, image-text-cta, promotional-card, product-callout, hero-product, image-beside-content, single-product-promo
- **`sections/register.liquid`** — t:sections.main-register.name section | keywords: registration-form, account-signup, customer-register, user-creation-form, sign-up-page, new-account-form, customer-onboarding, input-fields-vertical, error-messaging-form, centered-form-layout
- **`sections/related-products.liquid`** — Related products section | keywords: related-products, product-recommendations, product-carousel, product-grid, you-may-also-like, recommended-products, product-slider, swiper-carousel, product-upsell, cross-sell
- **`sections/reset-password.liquid`** — t:sections.main-reset-password.name section | keywords: password-reset-form, two-field-form, customer-account-form, centered-form-layout, error-messaging-form, password-confirmation-input, single-column-form, account-security-page
- **`sections/search.liquid`** — t:sections.main-collection-product-grid.name section | keywords: search-results-grid, product-grid, filterable-search, paginated-results, search-bar, multi-column-grid, product-card-layout, sort-filter-search, vertical-horizontal-filters, responsive-product-grid
- **`sections/selling-points-v2.liquid`** — Selling Points V2 section | keywords: selling-points, feature-grid, icon-cards, benefits-grid, highlights-row, info-cards, feature-blocks, mobile-slider-cards
- **`sections/selling-points.liquid`** — Selling Points section | keywords: icon-grid, features-grid, selling-points, icon-text-blocks, benefits-section, usp-grid, icon-list, trust-badges, feature-highlights
- **`sections/shop-by-category-v2.liquid`** — Shop By Category V2 section | keywords: category-grid, image-cards-with-links, shop-by-category, category-tiles, category-navigation, clickable-image-grid, product-category-cards, image-grid-with-arrows
- **`sections/shop-by-category.liquid`** — Shop By Category section | keywords: category-grid, collection-list, split-layout, featured-image-sidebar, category-navigation, image-with-list, two-column-categories, category-links, shop-by-category
- **`sections/shop-categories.liquid`** — Shop Categories section | keywords: category-carousel, collection-slider, shop-by-category, horizontal-scroll-cards, image-card-carousel, category-grid-slider, collection-tiles, swiper-categories, product-category-navigation, filtered-collection-showcase
- **`sections/shop-the-look.liquid`** — Shop The Look section | keywords: shop-the-look, shoppable-image, product-hotspots, interactive-slider, image-carousel-with-products, lookbook, tagged-products, clickable-hotspots, product-showcase-slider, swiper-carousel

## Available Snippets (29)

- **`snippets/component-article-card.liquid`** — Reusable component-article-card component
- **`snippets/component-cart-discount.liquid`** — Reusable component-cart-discount component
- **`snippets/component-cart-drawer.liquid`** — Reusable component-cart-drawer component
- **`snippets/component-cart-notification.liquid`** — Reusable component-cart-notification component
- **`snippets/component-data-layer.liquid`** — Reusable component-data-layer component
- **`snippets/component-filters-drawer.liquid`** — Reusable component-filters-drawer component
- **`snippets/component-filters-horizontal.liquid`** — Reusable component-filters-horizontal component
- **`snippets/component-filters-price-range.liquid`** — Price display with sale/compare formatting
- **`snippets/component-filters-sidebar.liquid`** — Reusable component-filters-sidebar component
- **`snippets/component-gtm-body.liquid`** — Reusable component-gtm-body component
- **`snippets/component-gtm-head.liquid`** — Reusable component-gtm-head component
- **`snippets/component-hotspot.liquid`** — Reusable component-hotspot component
- **`snippets/component-localization-form.liquid`** — Reusable component-localization-form component
- **`snippets/component-nav-drawer.liquid`** — Reusable component-nav-drawer component
- **`snippets/component-nav-dropdown.liquid`** — Reusable component-nav-dropdown component
- **`snippets/component-nav-megamenu.liquid`** — Reusable component-nav-megamenu component
- **`snippets/component-pagination.liquid`** — Page navigation controls
- **`snippets/component-predictive-search.liquid`** — Search input component
- **`snippets/component-product-card.liquid`** — Reusable component-product-card component
- **`snippets/component-product-media-gallery.liquid`** — Reusable component-product-media-gallery component
- **`snippets/component-product-media-modal.liquid`** — Modal/dialog wrapper
- **`snippets/component-product-media.liquid`** — Reusable component-product-media component
- **`snippets/component-product-price.liquid`** — Price display with sale/compare formatting
- **`snippets/component-product-share-button.liquid`** — Reusable component-product-share-button component
- **`snippets/component-social-icons.liquid`** — SVG icon library
- **`snippets/component-splash-screen-head.liquid`** — Reusable component-splash-screen-head component
- **`snippets/component-splash-screen.liquid`** — Reusable component-splash-screen component
- **`snippets/css-variables.liquid`** — Reusable css-variables component
- **`snippets/meta-tags.liquid`** — Reusable meta-tags component

## JS Custom Elements

- **`assets/component-cart-discount.js`** registers: <cart-discount-form>
- **`assets/component-cart-drawer.js`** registers: <cart-drawer>
- **`assets/component-cart-notification.js`** registers: <cart-notification>
- **`assets/component-filters-price-range.js`** registers: <price-range>
- **`assets/component-infinite-scroll.js`** registers: <infinite-scroll>
- **`assets/component-localization-form.js`** registers: <localization-form>
- **`assets/component-modal-opener.js`** registers: <modal-opener>
- **`assets/component-pickup-availability.js`** registers: <pickup-availability>, <pickup-availability-drawer>
- **`assets/component-predictive-search.js`** registers: <predictive-search>
- **`assets/component-product-card.js`** registers: <product-card>
- **`assets/component-product-media-magnify.js`** registers: <product-media-magnify>
- **`assets/component-product-media-modal.js`** registers: <product-media-modal>
- **`assets/component-product-share-button.js`** registers: <share-button>
- **`assets/component-quick-add.js`** registers: <quick-add-modal>
- **`assets/component-selling-plans.js`** registers: <selling-plans-widget>
- **`assets/component-splash-screen.js`** registers: <splash-screen>
- **`assets/product-recommendations.js`** registers: <product-recommendations>
- **`assets/section-animated-features-v2.js`** registers: <animated-features-v2>
- **`assets/section-animated-features.js`** registers: <animated-features>
- **`assets/section-brand-story-v2.js`** registers: <brand-story-v2>
- **`assets/section-collection.js`** registers: <collection-info>
- **`assets/section-featured-collections-v2.js`** registers: <featured-collections-v2>
- **`assets/section-featured-products.js`** registers: <featured-products>
- **`assets/section-product.js`** registers: <product-info>
- **`assets/section-related-products.js`** registers: <related-products-carousel>
- **`assets/section-selling-points-v2.js`** registers: <selling-points-v2>
- **`assets/section-shop-by-category.js`** registers: <shop-by-category>
- **`assets/section-shop-categories.js`** registers: <shop-categories>
- **`assets/section-shop-the-look.js`** registers: <shop-the-look>

---

## File Responsibilities

- **layout/password.liquid**: Provides the minimal HTML layout wrapper for the password-protected storefront page when the store is locked
- **layout/theme.liquid**: Defines the main HTML document structure and orchestrates global assets, scripts, and sections for all non-password pages
- **sections/404.liquid**: Renders the 404 error page with styled message and continue shopping button
- **sections/Faq-metaobjects.liquid**: Renders an accordion-style FAQ section populated from Shopify metaobjects of type faq_item with dynamic padding and color scheme support
- **sections/Faq.liquid**: Renders an accordion-style FAQ section with expandable question/answer blocks using Alpine.js
- **sections/account.liquid**: Renders the customer account dashboard page showing order history and account navigation
- **sections/activate-account.liquid**: Renders the customer account activation form where new customers set their password for the first time
- **sections/addresses.liquid**: Renders the customer addresses management page with forms for adding, editing, and deleting shipping addresses
- **sections/animated-features-v2.liquid**: Renders an animated features section with a percentage heading, feature list with checkmarks, and an accompanying image with configurable animation speeds.
- **sections/animated-features.liquid**: Renders an animated features section with left content area and right grid of 4 flippable cards showing images/text with customizable animation speed
- **sections/announcement-bar.liquid**: Displays a rotating, auto-scrolling announcement bar with customizable messages, links, and emojis at the top of the site
- **sections/article.liquid**: Renders the individual blog article page layout with customizable blocks for featured image, title, content, sharing, and navigation
- **sections/blog.liquid**: Renders the main blog listing page with pagination and configurable article card layout
- **sections/blogs.liquid**: Renders a grid display of blog articles with configurable heading, navigation link, and customizable article blocks showing images and excerpts
- **sections/brand-story-v2.liquid**: Interactive accordion-style brand story section with clickable items that display corresponding images
- **sections/brand-story.liquid**: Renders a brand story section with side-by-side image comparison and text content
- **sections/cart.liquid**: Renders the main cart page UI with line items, quantity controls, discount codes, and checkout functionality
- **sections/collection.liquid**: Renders the collection page layout with product grid, filtering, sorting, and pagination controls
- **sections/collections.liquid**: Renders a grid layout displaying all Shopify collections with featured images, titles, descriptions, and navigation links
- **sections/custom-section.liquid**: Provides a reusable container section with optional background image that accepts any theme blocks for flexible content composition
- **sections/dynamic-grid.liquid**: Configurable grid section for displaying content blocks with customizable layout, styling, and responsive behavior
- **sections/featured-collections-v2.liquid**: Renders a tabbed product carousel displaying multiple collections with swipeable product grids
- **sections/featured-collections.liquid**: Displays a grid of featured collection cards with customizable images, titles, and layout styles
- **sections/featured-products.liquid**: Renders a swiper carousel of manually selected featured products with navigation arrows and optional view-all link
- **sections/footer-group.json**: Defines the footer section group configuration including layout blocks for link lists, brand information, and text content with localization settings.
- **sections/footer.liquid**: Renders the footer section with configurable blocks for text, menus, social icons, and brand information, plus bottom content area for localization and payment icons.
- **sections/header-group.json**: Configures the header group combining announcement bar and header sections with their settings and display order
- **sections/header.liquid**: Renders and styles the site-wide header including logo, navigation menu, search, cart, and account icons with configurable sticky behavior and layout options.
- **sections/hello-world.liquid**: Renders a welcome/onboarding section for developers new to the Skeleton theme with educational content and links.
- **sections/hero-v2.liquid**: Renders a hero banner section with configurable content, image or video backgrounds, and flexible alignment options
- **sections/hero.liquid**: Renders a hero banner section with image or video background, customizable text content, optional star rating, CTA button, and endorsement block.
- **sections/link-readme.liquid**: Renders a simple call-to-action section with a single customizable button link
- **sections/login.liquid**: Renders the customer login page with password recovery form and optional Shop Pay login integration
- **sections/logos.liquid**: Renders an animated horizontal scrolling logo carousel with configurable animation speed, logo height, and color scheme settings.
- **sections/order.liquid**: Renders the customer order details page showing purchased items, pricing, shipping, and fulfillment information
- **sections/page.liquid**: Renders static Shopify page content with customizable layout, color scheme, width constraints, and spacing controls.
- **sections/password.liquid**: Renders the password-protected storefront landing page with login form and branding
- **sections/pickup-availability.liquid**: Renders in-store pickup availability information for a product variant, showing the closest location preview and a drawer with all pickup locations.
- **sections/predictive-results.liquid**: Renders the dropdown results for predictive search showing suggestions, articles/pages, and products based on search query input.
- **sections/product-details.liquid**: Renders an accordion-style product details section with expandable blocks containing text content and optional images
- **sections/product-highlights.liquid**: Renders a marketing section displaying product highlights with an icon-based feature list and accompanying image
- **sections/product.liquid**: Main product detail page (PDP) section that orchestrates the product media gallery, variant selection, pricing, add-to-cart form, and all product information blocks
- **sections/promo-banner.liquid**: Renders a promotional banner section displaying a selected product with image, title, description, price and CTA button with configurable layout and styling options
- **sections/register.liquid**: Renders the customer registration form page with form validation and error handling
- **sections/related-products.liquid**: Displays product recommendations on product pages using Shopify's recommendation algorithm with grid or carousel layout options
- **sections/reset-password.liquid**: Renders the customer password reset form where users create a new password after requesting a reset
- **sections/search.liquid**: Renders the search results page with optional filtering, sorting, and pagination for products and articles
- **sections/selling-points-v2.liquid**: Renders a grid or mobile slider of selling point cards with optional titles, descriptions, icons, and links
- **sections/selling-points.liquid**: Renders a grid of selling points with icons, titles, and descriptions to highlight product or brand benefits
- **sections/shop-by-category-v2.liquid**: Renders a grid-based category showcase section with image cards, titles, and links
- **sections/shop-by-category.liquid**: Renders an interactive category navigation section with a featured image and collection list that updates the image on hover
- **sections/shop-categories.liquid**: Renders a horizontally scrollable carousel of collection category cards with images and custom titles
- **sections/shop-the-look.liquid**: Renders a Shop The Look section with swipeable slides featuring images with interactive hotspots overlaid on product images and associated product lists
- **assets/cart.css**: Styles the cart drawer UI, cart items display, quantity controls, and cart footer sections for both drawer and page contexts
- **assets/component-article-card.css**: Styles the article card component used to display blog posts in grid layouts and blog sections
- **assets/component-cart-discount.js**: Manages discount code application and removal in the cart interface with pill-based UI display
- **assets/component-cart-drawer.js**: Manages the cart drawer custom element that automatically opens when products are successfully added to cart via AJAX
- **assets/component-cart-notification.js**: Manages the cart notification drawer that appears after adding products to cart via AJAX requests
- **assets/component-complementary-products.css**: Styles the complementary/recommended products display grid and product cards shown on product detail pages
- **assets/component-data-layer.js**: Manages Google Analytics 4 / Google Tag Manager ecommerce data layer events for product tracking throughout the Shopify theme
- **assets/component-filters-price-range.js**: Manages the interactive dual-handle price range filter slider UI component and synchronizes URL parameters with range/number inputs
- **assets/component-infinite-scroll.js**: Manages automatic loading of additional products when scrolling to the bottom of product grids using Intersection Observer API
- **assets/component-localization-form.js**: Manages language and country/region selection form interactions by capturing clicks on selection links and submitting hidden form inputs
- **assets/component-modal-opener.js**: Defines the ModalOpener custom element that handles button clicks to open modals and toggle loading spinners
- **assets/component-pagination.css**: Styles the pagination component used for navigating through paginated collections, blogs, and search results
- **assets/component-pickup-availability.css**: Styles the pickup availability component that displays store pickup information for products, including a preview widget and a slide-out drawer with detailed location information.
- **assets/component-pickup-availability.js**: Manages in-store pickup availability display and drawer interaction for product variants
- **assets/component-predictive-search.css**: Styles the predictive search dropdown UI including results layout, loading states, product cards, and overlay backdrop
- **assets/component-predictive-search.js**: Manages live search functionality with debounced input, fetching and displaying predictive search results from Shopify's suggest API
- **assets/component-product-card.css**: Styles product cards and article cards across collection grids, featured product sections, and search results
- **assets/component-product-card.js**: Manages color swatch interaction and dynamic image switching on product cards
- **assets/component-product-media-magnify.js**: Implements image zoom/magnification functionality for product media on click with mouse-follow behavior
- **assets/component-product-media-modal.css**: Styles the product media modal/lightbox overlay with zoom functionality and responsive behavior for viewing product images in fullscreen
- **assets/component-product-media-modal.js**: Manages the modal dialog that displays product media in full-screen/lightbox view when users click on product images
- **assets/component-product-price.css**: Styles the product price component including regular prices, sale prices, badges, and unit pricing across different display states
- **assets/component-product-share-button.css**: Styles the product share button component including the dropdown fallback UI for copying share links
- **assets/component-product-share-button.js**: Implements a custom web component for sharing product URLs using native Web Share API or fallback copy-to-clipboard functionality
- **assets/component-quick-add.css**: Styles the quick-add button and modal dialog that allows customers to add products to cart from collection pages without navigating to the full product page
- **assets/component-quick-add.js**: Manages the quick-add modal functionality for adding products to cart directly from product cards without navigating to the full product page
- **assets/component-selling-plans.js**: Manages subscription/selling plan selection and pricing display for product variants
- **assets/component-splash-screen.js**: Manages a one-time splash screen overlay that displays on first visit and auto-hides after page load with a fade animation
- **assets/critical.css**: Provides critical CSS reset, base styles, layout utilities, and core accessibility features loaded on every page for initial render performance.
- **assets/customer.css**: Styles all customer account pages including login, registration, account dashboard, order history, and address management
- **assets/customer.js**: Manages customer address book functionality including add/edit/delete address forms and country/province selection dropdowns
- **assets/product-recommendations.js**: Lazy-loads product recommendations on product pages using Intersection Observer to defer fetching until the element is near viewport
- **assets/section-animated-features-v2.css**: Styles the animated features section v2 with a two-column layout featuring animated counter digits, feature list with checkmarks, and image with scroll-triggered animations.
- **assets/section-animated-features-v2.js**: Implements scroll-triggered animations and animated digit counter for the animated-features-v2 section with IntersectionObserver-based visibility detection.
- **assets/section-animated-features.css**: Styles the animated features section with flip card animations, responsive layout, and fade-in transitions.
- **assets/section-animated-features.js**: Manages interactive card flipping and scroll-triggered reveal animations for the animated features section
- **assets/section-article.css**: Styles the article template page including hero images, content layout, comments section, and back navigation
- **assets/section-blog.css**: Styles the blog listing page layout including title, article grid, and collage layout variations
- **assets/section-blogs.css**: Styles the blogs listing section that displays multiple blog articles in a grid layout with navigation
- **assets/section-brand-story-v2.css**: Styles for the brand story v2 section featuring an interactive accordion list with synchronized image transitions
- **assets/section-brand-story-v2.js**: Manages interactive brand story section with accordion-style content items and synchronized media display that responds differently on mobile vs desktop
- **assets/section-brand-story.css**: Styles the brand story section that displays a before/after image comparison with accompanying text content
- **assets/section-collection.css**: Styles the collection page layout, product grid, filtering UI, sorting controls, and active filter display
- **assets/section-collection.js**: Manages collection page filtering, sorting, and URL state synchronization via AJAX requests without page reload
- **assets/section-faq.css**: Styles the FAQ accordion section with expandable question/answer blocks and setup instructions for metaobject integration
- **assets/section-featured-collections-v2.css**: Styles the featured collections v2 section with tabbed navigation, swiper carousel integration, and placeholder product cards
- **assets/section-featured-collections-v2.js**: Manages tabbed collection carousels with Swiper sliders that show/hide based on radio button selection
- **assets/section-featured-collections.css**: Styles the featured collections section with card layouts supporting both overlay and below-image text positioning
- **assets/section-featured-products.css**: Styles the featured products section grid layout, product cards, headings, and view-all button with responsive alignment options.
- **assets/section-featured-products.js**: Initializes and manages Swiper carousel for featured product displays with responsive breakpoints and navigation controls
- **assets/section-footer.css**: Styles the footer section including layout, color overrides, newsletter form, localization selectors, social links, and copyright information.
- **assets/section-hero-v2.css**: Styles the hero-v2 section with a split-layout design featuring a main content area with overlay text and two promotional blocks
- **assets/section-hero.css**: Styles the hero banner section with background media, content positioning, overlay effects, and responsive layout adjustments
- **assets/section-link-readme.css**: Styles the link-readme section component with a centered button layout and responsive design
- **assets/section-logos.css**: Styles the infinite horizontal scrolling logo carousel section with animation and responsive behavior
- **assets/section-page.css**: Styles the page section template including page titles, rich text content, and page placeholders
- **assets/section-product-details.css**: Styles the accordion-style product details section with expandable/collapsible blocks containing text and image grids
- **assets/section-product-highlights.css**: Styles the product highlights section displaying product features with icons and media in a two-column layout
- **assets/section-product.css**: Styles the product detail page layout, media gallery (Swiper carousel), product info section, variant selectors, quantity inputs, and add-to-cart functionality
- **assets/section-product.js**: Manages product detail page interactions including variant selection, quantity updates, media gallery navigation, and dynamic section rendering
- **assets/section-promo-banner.css**: Styles the promotional banner section with responsive layout, image positioning, and content arrangement controls.
- **assets/section-related-products.js**: Initializes and manages Swiper carousel for related products section, waiting for AJAX-loaded product recommendations before setup
- **assets/section-search.css**: Styles the search page template header including search form, predictive search wrapper, and reset button
- **assets/section-selling-points-v2.css**: Styles the selling-points-v2 section with responsive grid layout (desktop 4-column, mobile slider/stack) and custom element color scheme support
- **assets/section-selling-points-v2.js**: Manages a responsive carousel/slider for selling points that conditionally initializes Swiper only on mobile devices when enabled
- **assets/section-selling-points.css**: Styles the selling points section displaying grid of features/benefits with icons, titles, and descriptions
- **assets/section-shop-by-category-v2.css**: Styles the shop-by-category-v2 section with animated expanding cards that feature images, titles, and interactive hover effects on desktop
- **assets/section-shop-by-category.css**: Styles the shop-by-category section with a two-column layout featuring a large image and collection links with animated hover effects.
- **assets/section-shop-by-category.js**: Manages interactive image swapping on hover/focus for collection items in the shop-by-category section
- **assets/section-shop-categories.css**: Styles the shop categories section with image cards, overlay titles, and carousel navigation controls including progress bar
- **assets/section-shop-categories.js**: Initializes and manages Swiper carousel functionality for the shop categories section with navigation and progress bar
- **assets/section-shop-the-look.css**: Styles the Shop The Look section featuring image hotspots with product tooltips and a slider layout
- **assets/section-shop-the-look.js**: Manages Swiper carousel initialization, navigation, progress tracking, and interactive image hotspot tooltips for the shop-the-look section
- **assets/shopify.js**: Provides core Shopify utility functions for DOM manipulation, event handling, form posting, and country/province address selector functionality
- **assets/theme.js**: Provides shared utility functions (debounce) used across the entire theme codebase
- **snippets/component-article-card.liquid**: Renders a blog article card component with optional image, date, author, badge, and excerpt display
- **snippets/component-cart-discount.liquid**: Renders the discount code input form and displays applied cart-level and item-level discount codes with removal buttons
- **snippets/component-cart-drawer.liquid**: Renders the slide-out cart drawer UI with line items, totals, discount codes, and checkout actions using Alpine.js for state management.
- **snippets/component-cart-notification.liquid**: Renders a dropdown notification panel that appears after adding items to cart, showing product details and links to cart/checkout
- **snippets/component-data-layer.liquid**: Conditionally renders custom web components for Google Tag Manager data layer event tracking based on theme settings.
- **snippets/component-filters-drawer.liquid**: Renders a slide-in drawer for collection/search filtering and sorting on mobile devices
- **snippets/component-filters-horizontal.liquid**: Renders a horizontal filter bar with dropdown menus for product collection filtering (desktop only)
- **snippets/component-filters-price-range.liquid**: Renders an interactive dual-range price filter slider with numeric inputs for collection filtering
- **snippets/component-filters-sidebar.liquid**: Renders a sticky sidebar filter interface for collection/search pages with expandable filter groups, checkboxes, price range inputs, and show more/less functionality
- **snippets/component-gtm-body.liquid**: Renders the Google Tag Manager noscript iframe fallback that must be placed immediately after the opening body tag for tracking when JavaScript is disabled.
- **snippets/component-gtm-head.liquid**: Initializes Google Tag Manager by injecting the GTM container script into the document head when a GTM container ID is configured
- **snippets/component-hotspot.liquid**: Renders interactive hotspot markers with tooltips for shop-the-look style image overlays
- **snippets/component-localization-form.liquid**: Renders country and language selector dropdowns using Shopify's localization form API
- **snippets/component-nav-drawer.liquid**: Renders a mobile navigation drawer that slides in from the left with menu items, localization options, and optional account link
- **snippets/component-nav-dropdown.liquid**: Renders a dropdown navigation list with support for nested child links (up to 3 levels deep) with Alpine.js interactivity for both drawer and inline header styles
- **snippets/component-nav-megamenu.liquid**: Renders a full-width megamenu dropdown with multi-level navigation links triggered by Alpine.js click interactions
- **snippets/component-pagination.liquid**: Renders pagination UI for paginated results with previous/next navigation and page number links
- **snippets/component-predictive-search.liquid**: Renders the predictive search form UI with input field, clear/search buttons, loading state, and results container that gets populated via JavaScript.
- **snippets/component-product-card.liquid**: Renders individual product cards with image, pricing, badges, variant swatches, and quick-add functionality for product collections and grids
- **snippets/component-product-media-gallery.liquid**: Renders product media gallery with Swiper.js carousel integration supporting multiple layouts (thumbnail, carousel, 2-column) and zoom modes.
- **snippets/component-product-media-modal.liquid**: Renders a modal dialog for displaying product media (images, videos) in fullscreen overlay
- **snippets/component-product-media.liquid**: Renders individual product media items (images, videos, external videos, 3D models) with appropriate Shopify filters and tags based on media type
- **snippets/component-product-price.liquid**: Renders product pricing display including regular price, sale price, compare-at price, unit pricing, volume pricing, and optional sale/sold-out badges
- **snippets/component-product-share-button.liquid**: Renders a progressive enhancement share button that uses native Web Share API when available and falls back to copy-to-clipboard UI
- **snippets/component-social-icons.liquid**: Renders a list of social media icons with links to URLs configured in theme settings
- **snippets/component-splash-screen-head.liquid**: Checks sessionStorage on page load to determine if splash screen has been seen and adds CSS class for returning visitors
- **snippets/component-splash-screen.liquid**: Renders the splash screen overlay component with configurable display duration and fade settings
- **snippets/css-variables.liquid**: Defines global CSS custom properties for typography, color schemes, and layout dimensions used throughout the theme
- **snippets/meta-tags.liquid**: Outputs SEO meta tags, Open Graph tags, Twitter cards, structured data, and page title with automatic adaptation for different page types
- **templates/404.json**: Defines the layout and section composition for the 404 error page displayed when a page is not found
- **templates/article.json**: Defines the layout and configuration for individual blog article pages in the Shopify theme
- **templates/blog.json**: Defines the layout and configuration for the blog listing page template in Shopify
- **templates/cart.json**: Defines the cart page template structure by referencing the cart section.
- **templates/collection.json**: Defines the layout and configuration for collection pages, controlling product display, filtering, sorting, and pagination settings.
- **templates/customers/account.json**: Defines the layout and section configuration for the customer account dashboard page in Shopify.
- **templates/customers/activate_account.json**: Defines the page layout and section composition for the customer account activation page
- **templates/customers/addresses.json**: Defines the page structure and section configuration for the customer addresses management page where users view and edit their saved shipping/billing addresses.
- **templates/customers/login.json**: Defines the customer login page template structure and configuration for the Shopify theme
- **templates/customers/order.json**: Defines the layout and section composition for the customer order details page in the Shopify theme.
- **templates/customers/register.json**: Defines the layout and configuration for the customer registration page template in Shopify
- **templates/customers/reset_password.json**: Defines the page structure and layout for the customer password reset page in the Shopify theme.
- **templates/gift_card.liquid**: Renders the standalone gift card display page with balance, code, expiration, and Apple Wallet integration
- **templates/index.json**: Defines the homepage layout and section configuration with their settings and block order
- **templates/list-collections.json**: Defines the page template structure for the collections list page displaying all store collections
- **templates/password.json**: Defines the structure and content for the password-protected storefront page when the store is locked
- **templates/product.json**: Defines the layout and configuration for the product detail page (PDP) including block composition, section ordering, and visual settings
- **templates/search.json**: Configures the search results page layout and display settings for products, articles, and filtering options
- **blocks/group.liquid**: Renders a reusable layout container block that groups child blocks in horizontal or vertical direction with configurable spacing and alignment
- **blocks/text.liquid**: Renders a configurable text block with customizable styling and alignment for use within Shopify sections
- **config/settings_data.json**: Stores the current theme configuration and global settings including typography, colors, layout dimensions, cart behavior, search settings, social media links, GTM tracking options, and color schemes.
- **config/settings_schema.json**: Defines theme-level customization settings and color schemes accessible through Shopify's theme editor admin interface
- **locales/en.default.json**: Stores English language translations for all user-facing text and labels throughout the Shopify theme.
- **locales/en.default.schema.json**: Provides default English translations for all Shopify theme editor schema settings, labels, and section configurations

---

## Common Mistakes

- [layout/password.liquid] Adding header/footer sections here (they won't work on password page)
- [layout/password.liquid] Expecting this to render when store is not password-protected
- [layout/password.liquid] Forgetting that content_for_layout renders the template defined in templates/password.json
- [layout/password.liquid] Adding interactive JavaScript without including required libraries
- [layout/password.liquid] Not understanding this is completely separate from layout/theme.liquid
- [layout/theme.liquid] Adding section-specific CSS/JS here instead of in section files
- [layout/theme.liquid] Not checking template.name before conditionally loading Swiper
- [layout/theme.liquid] Forgetting that changes affect all pages except password page
- [layout/theme.liquid] Modifying script loading order breaking Alpine.js or liquid-ajax-cart dependencies
- [layout/theme.liquid] Adding blocking scripts that delay page rendering
- [sections/404.liquid] Assuming this file handles routing logic when it only renders the error page UI
- [sections/404.liquid] Modifying hardcoded color values without considering the color_scheme setting
- [sections/404.liquid] Breaking translation keys (templates.404.subtext, templates.404.title, general.continue_shopping)
- [sections/404.liquid] Not testing responsive breakpoint at 768px when making style changes
- [sections/Faq-metaobjects.liquid] Assuming faq_items is an array of simple objects instead of metaobject drops requiring .question and .answer field access
- [sections/Faq-metaobjects.liquid] Forgetting that metaobject_list can be empty/null if merchant hasn't configured metaobjects yet
- [sections/Faq-metaobjects.liquid] Not understanding that empty state (faq__setup-notice) only renders when request.design_mode is true AND faq_items is blank
- [sections/Faq-metaobjects.liquid] Modifying Alpine.js state variable names without updating all @click and x-show bindings consistently
- [sections/Faq-metaobjects.liquid] Expecting answer text to have HTML formatting when it's a multi_line_text_field that requires newline_to_br filter
- [sections/Faq-metaobjects.liquid] Breaking responsive padding by modifying section.id which is used in dynamic style tag

---

## JS Dependency Graph

**Full graph available at: `codebase-map/dependency-graph.yml`**

Before editing any JS file, Read the dependency graph to understand:
- `depends_on`: what this file needs to work (don't break the contract)
- `depended_on_by`: what breaks if you change this file
- `impact_score`: 0–1 risk level (higher = more files affected)
- `element_registry`: which JS file owns each custom element tag
- `event_bus`: who dispatches and who listens to each custom event

### High-Impact Files (edit with caution)

- **`assets/component-pickup-availability.js`** — registers: <pickup-availability>, <pickup-availability-drawer> | classes: PickupAvailability, PickupAvailabilityDrawer | listens: click, keyup
- **`assets/component-predictive-search.js`** — registers: <predictive-search> | classes: PredictiveSearch | listens: input, focus, click
- **`assets/component-quick-add.js`** — registers: <quick-add-modal> | classes: QuickAdd | listens: submit, click, keyup
- **`assets/section-brand-story-v2.js`** — registers: <brand-story-v2> | classes: BrandStoryV2 | listens: click, mouseenter, focus
- **`assets/component-cart-discount.js`** — registers: <cart-discount-form> | classes: CartDiscountForm | listens: submit, click
- **`assets/component-filters-price-range.js`** — registers: <price-range> | classes: PriceRange | listens: input, change
- **`assets/component-product-media-modal.js`** — registers: <product-media-modal> | classes: ProductMediaModal | listens: click, pointerup
- **`assets/section-collection.js`** — registers: <collection-info> | classes: CollectionInfo | listens: change, click
- **`assets/section-product.js`** — registers: <product-info> | classes: ProductInfo | listens: change, click
- **`assets/section-shop-by-category.js`** — registers: <shop-by-category> | classes: ShopByCategory | listens: mouseover, focus
