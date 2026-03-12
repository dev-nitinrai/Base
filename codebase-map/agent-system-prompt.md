# Shopify Theme Agent — Codebase Context

## Rules Before Editing Any File

1. **Check feature index first** — find primary vs secondary files for the task
2. **Never add inline scripts** to .liquid files if a .js file owns that logic
3. **Trace to the root** — if broken in a custom element, find its JS class
4. **For new UI** — check component inventory and mockup-matching-guide.md before creating new files
5. **Check `do_not_edit`** — some files are generated or theme-critical

---

${shopifyGuidelines}

---

## Feature → File Index



---

## Available Sections (49)

- **`sections/404.liquid`** — 404 section | keywords: 404 page, error page, not found, centered text layout, single CTA button, empty state, page not found, centered message
- **`sections/Faq.liquid`** — FAQ section | keywords: faq-accordion, collapsible-content, expandable-list, question-answer, accordion-panel, toggle-content, plus-minus-icons, interactive-faq
- **`sections/account.liquid`** — t:sections.main-account.name section | keywords: customer-account-dashboard, order-history-table, account-overview, logged-in-user-page, transaction-list, customer-portal, account-header-logout, paginated-orders
- **`sections/activate-account.liquid`** — t:sections.main-activate-account.name section | keywords: account activation, password setup form, dual password fields, customer onboarding, form with decline option, centered account form, password confirmation layout, customer authentication
- **`sections/addresses.liquid`** — t:sections.main-addresses.name section | keywords: customer-addresses, account-dashboard, address-book, form-list, add-new-address, address-management, customer-portal, paginated-list, account-section
- **`sections/animated-features-v2.liquid`** — Animated Features V2 section | keywords: animated-percentage, split-layout, feature-list-with-image, stats-with-checkmarks, two-column-features, percentage-hero, animated-counter, image-text-split, checklist-features
- **`sections/animated-features.liquid`** — Animated Features section | keywords: animated-feature-cards, flip-cards, 2-column-features, icon-grid, interactive-cards, feature-showcase, hover-flip, animated-grid, left-right-split
- **`sections/announcement-bar.liquid`** — Top-of-page announcement strip | keywords: announcement-bar, promo-banner, rotating-banner, top-banner, marquee-bar, notification-strip, header-announcement, message-carousel, auto-scroll-banner, promotional-header
- **`sections/article.liquid`** — t:sections.main-article.name section | keywords: article-hero, blog-post-layout, featured-image-header, content-blocks, back-button, article-metadata, responsive-article, blog-detail-page, article-title-banner, content-typography
- **`sections/blog.liquid`** — t:sections.main-blog.name section | keywords: blog-grid, article-listing, blog-archive, post-grid, content-feed, blog-index, article-cards, paginated-blog
- **`sections/blogs.liquid`** — Blogs section | keywords: blog-grid, article-cards, blog-feed, post-preview, content-grid, blog-listing, article-section, editorial-cards
- **`sections/brand-story-v2.liquid`** — Brand Story V2 section | keywords: brand-story, accordion-image-split, tabbed-content, story-accordion, feature-tabs, vertical-accordion, split-layout, interactive-content, collapsible-features, image-switcher
- **`sections/brand-story.liquid`** — Brand Story section | keywords: before-after, image-comparison, split-layout, brand-story, two-column-images, labeled-images, comparison-slider, side-by-side-images, visual-comparison, story-section
- **`sections/cart.liquid`** — t:sections.main-cart-items.name section | keywords: cart-page, shopping-cart, line-items-list, cart-summary, product-thumbnail-list, quantity-selector, remove-item, cart-table, checkout-flow
- **`sections/collection.liquid`** — t:sections.main-collection-product-grid.name section | keywords: collection-grid, product-grid, filter-sidebar, vertical-filters, horizontal-filters, pagination, collection-hero, quick-add, multi-column-grid
- **`sections/collections.liquid`** — t:general.collections_grid section | keywords: collections-grid, category-grid, 3-column-grid, collection-cards, image-grid, collection-list, category-tiles, responsive-grid
- **`sections/custom-section.liquid`** — t:general.custom_section section | keywords: custom-section, flexible-container, background-image-section, grid-wrapper, theme-blocks, full-width-section, content-overlay, universal-container, modular-layout, wrapper-section
- **`sections/dynamic-grid.liquid`** — Custom section | keywords: dynamic-grid, content-grid, promotional-grid, image-grid, feature-grid, modular-grid, flexible-layout, multi-column-content, grid-with-title, configurable-grid
- **`sections/featured-collections-v2.liquid`** — Grid of products from a collection | keywords: tabbed-collections, product-carousel, multi-collection-slider, tabbed-product-grid, collection-tabs, swiper-collections, featured-products-tabbed
- **`sections/featured-collections.liquid`** — Grid of products from a collection | keywords: featured-collections, collection-grid, collection-cards, multi-collection-showcase, category-grid, image-grid-with-labels, collection-tiles, shop-by-category
- **`sections/featured-products.liquid`** — Single product showcase with form | keywords: product-carousel, featured-products-slider, product-swiper, product-showcase, horizontal-product-scroll, product-grid-slider, curated-products, shop-collection-carousel
- **`sections/footer.liquid`** — Site footer with links and info | keywords: footer, multi-column footer, footer links, social icons, brand information, footer menu, site footer, bottom navigation, newsletter footer
- **`sections/header.liquid`** — Site navigation header | keywords: sticky header, top navigation, logo center, cart icon, account icon, menu dropdown, horizontal nav, announcement bar, persistent header, site navigation
- **`sections/hello-world.liquid`** — Hello World section | keywords: welcome-hero, split-content, text-with-icon, three-column-features, info-cards, feature-grid, educational-content, onboarding-section
- **`sections/hero-v2.liquid`** — Full-width banner with headline and CTA | keywords: hero, split-layout, hero-banner, video-background, image-with-text, content-left-media-right, full-width-hero, CTA-hero, vertical-split
- **`sections/hero.liquid`** — Full-width banner with headline and CTA | keywords: hero banner, full-width hero, video background hero, image banner, headline overlay, CTA banner, above-the-fold, endorsement signature, star rating hero, splash banner
- **`sections/link-readme.liquid`** — Link Readme section | keywords: call-to-action, cta-button, single-button, link-banner, simple-cta, centered-button, action-prompt, readme-link, standalone-button
- **`sections/login.liquid`** — t:sections.main-login.name section | keywords: customer-login-form, password-recovery, account-sign-in, email-input-fields, shop-login-button, form-validation, two-column-auth, login-page, account-access, customer-portal-entry
- **`sections/logos.liquid`** — Logos section | keywords: logo-carousel, brand-slider, logo-marquee, partner-logos, trust-badges, logo-strip, infinite-scroll-logos, client-showcase, brand-grid, logo-ticker
- **`sections/order.liquid`** — t:sections.main-order.name section | keywords: order-history-table, customer-account-order, order-details-page, product-line-items-table, order-summary-layout, tabular-order-view, account-dashboard-order, order-status-page
- **`sections/page.liquid`** — t:sections.main-page.name section | keywords: page-content, static-page, simple-text-page, centered-content, single-column-text, basic-page-layout, narrow-content, cms-page
- **`sections/password.liquid`** — Password Page section | keywords: password-page, coming-soon, splash-screen, login-gate, email-capture, store-access, maintenance-mode, pre-launch, centered-form, brand-lockup
- **`sections/pickup-availability.liquid`** — Custom section | keywords: store pickup, local availability, BOPIS, click-and-collect, store locator drawer, inventory checker, location selector, pickup drawer modal, store availability list, location-based pickup
- **`sections/predictive-results.liquid`** — Custom section | keywords: predictive-search, autocomplete-dropdown, search-suggestions, instant-search-results, layered-search-panels, product-search-preview, search-overlay, typeahead-search
- **`sections/product-details.liquid`** — Product Details section | keywords: accordion, collapsible-details, product-specs, tabbed-content, expandable-panels, faq-style, details-section, image-text-accordion, split-content-blocks
- **`sections/product-highlights.liquid`** — Product Highlights section | keywords: feature-list-with-image, product-features-split, icon-list-image-layout, benefit-highlights, two-column-features, image-text-features, icon-feature-grid, product-usp-section
- **`sections/product.liquid`** — t:sections.main-product.name section | keywords: product-detail-page, pdp-layout, product-gallery, product-info, media-gallery, variant-selector, add-to-cart, product-description, complementary-products, split-layout
- **`sections/promo-banner.liquid`** — Banner image with text overlay | keywords: promo-banner, product-highlight, split-layout, featured-product, image-text-banner, product-callout, two-column-promo, cta-banner
- **`sections/register.liquid`** — t:sections.main-register.name section | keywords: registration form, account signup, customer create, vertical form layout, labeled input fields, form validation, error messaging, customer authentication
- **`sections/related-products.liquid`** — Related products section | keywords: related-products, product-recommendations, product-carousel, product-grid, you-may-also-like, recommended-items, product-slider, cross-sell, upsell-section, similar-products
- **`sections/reset-password.liquid`** — t:sections.main-reset-password.name section | keywords: password-reset-form, two-field-form, customer-authentication, password-confirmation, centered-form-layout, account-security-page, form-validation-errors, inline-error-messaging
- **`sections/search.liquid`** — t:sections.main-collection-product-grid.name section | keywords: search-results, product-grid, filterable-search, vertical-filters, horizontal-filters, paginated-results, quick-add, columns-layout, color-scheme
- **`sections/selling-points-v2.liquid`** — Selling Points V2 section | keywords: selling-points, feature-cards, horizontal-cards, icon-cards, info-blocks, mobile-carousel, swipeable-features, benefit-tiles
- **`sections/selling-points.liquid`** — Selling Points section | keywords: icon-grid, feature-list, selling-points, benefits-grid, icon-row, feature-blocks, usp-section, value-props, icon-with-text, trust-badges
- **`sections/shop-by-category-v2.liquid`** — Shop By Category V2 section | keywords: category-grid, image-card-grid, shop-by-category, category-tiles, image-link-cards, category-navigation, product-category-cards, clickable-image-grid
- **`sections/shop-by-category.liquid`** — Shop By Category section | keywords: category-grid, collection-list, featured-image-sidebar, category-navigation, split-layout, image-with-list, category-browser, shop-by-collection, two-column-category, sidebar-navigation
- **`sections/shop-categories.liquid`** — Shop Categories section | keywords: collection-carousel, category-slider, horizontal-scroll-categories, shop-by-category, collection-grid-swiper, category-tiles, image-carousel, collection-showcase
- **`sections/shop-the-look.liquid`** — Shop The Look section | keywords: shop-the-look, shoppable-image-slider, hotspot-carousel, product-pinpoints, lookbook-slider, interactive-image-gallery, tagged-product-slider, image-hotspot-swiper
- **`sections/Faq-metaobjects.liquid`** — FAQ — Metaobjects section | keywords: FAQ, accordion, collapsible, questions and answers, Q&A, help section, expandable content, plus minus icons, metaobject, support

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

- **layout/password.liquid**: Provides the minimal HTML layout wrapper for the password-protected storefront page before store launch
- **layout/theme.liquid**: Root HTML layout wrapper that defines the document structure, loads global assets, and orchestrates header/footer sections for all non-password pages
- **sections/404.liquid**: undefined
- **sections/Faq.liquid**: Renders an accordion-style FAQ section with expandable question/answer blocks using Alpine.js for state management
- **sections/account.liquid**: Customer account dashboard displaying order history with pagination and logout functionality
- **sections/activate-account.liquid**: Renders the customer account activation form where new customers set their password
- **sections/addresses.liquid**: Renders the customer account addresses page with add/edit/delete address forms and pagination
- **sections/animated-features-v2.liquid**: Renders an animated features section with image, percentage heading, and feature list with checkmarks
- **sections/animated-features.liquid**: Renders an animated features section with a left content area (heading, subheading, button, notes) and a right grid of four flippable cards showing images/labels on front and custom text on back.
- **sections/announcement-bar.liquid**: Renders a rotating announcement bar at the top of the site with customizable messages, links, and emojis
- **sections/article.liquid**: Renders the blog article page layout with configurable blocks for featured image, title, content, sharing, and pagination
- **sections/blog.liquid**: Renders the main blog listing page with paginated article cards and customizable layout options.
- **sections/blogs.liquid**: Displays a grid of blog article cards with customizable heading, navigation link, and color scheme settings
- **sections/brand-story-v2.liquid**: Renders an interactive brand story section with accordion-style content items paired with synchronized image display
- **sections/brand-story.liquid**: Renders a brand story section with two side-by-side labeled images and accompanying heading/description text
- **sections/cart.liquid**: Renders the main cart page UI with line items, quantities, discounts, and checkout flow using Liquid Ajax Cart for dynamic updates
- **sections/collection.liquid**: Renders the main collection page layout including product grid, filtering UI, sorting, pagination, and hero section
- **sections/collections.liquid**: Renders a grid layout displaying all Shopify collections with featured images, titles, and descriptions on the list-collections page
- **sections/custom-section.liquid**: Provides a flexible container section with optional background image that can host any theme blocks through content_for 'blocks'
- **sections/dynamic-grid.liquid**: Renders a customizable grid layout section with configurable title, description, button, and grid items supporting text-on-image or text-below-image styles
- **sections/featured-collections-v2.liquid**: Renders a tabbed interface displaying multiple featured product collections with swiper carousels and product cards
- **sections/featured-collections.liquid**: Renders a customizable grid of featured collection cards with images, titles, and optional shop links
- **sections/featured-products.liquid**: Renders a swiper carousel of manually selected featured products with customizable heading, navigation arrows, and product cards
- **sections/footer-group.json**: Defines the footer section group configuration and layout structure for the Shopify theme footer area
- **sections/footer.liquid**: Renders the site-wide footer section with navigation blocks, brand information, social icons, payment methods, and localization forms.
- **sections/header-group.json**: Defines the header group section configuration containing announcement bar and main header with their content blocks and settings
- **sections/header.liquid**: Renders the site header with logo, navigation, search, cart, and account icons with support for sticky positioning and mobile drawer menu.
- **sections/hello-world.liquid**: Welcome/introduction section that displays getting started information and educational content about Shopify theme development
- **sections/hero-v2.liquid**: Renders a hero banner section with content on left and image/video background on right with configurable alignment and styling
- **sections/hero.liquid**: Renders a customizable hero banner section with image or video background, overlay text content, optional star rating, and endorsement block
- **sections/link-readme.liquid**: Renders a simple call-to-action section with a single button link and configurable padding/color scheme
- **sections/login.liquid**: Renders the customer login page with password recovery, email/password login forms, and optional guest checkout
- **sections/logos.liquid**: Renders an animated horizontal scrolling logo carousel with configurable animation speed, logo height, and color scheme
- **sections/order.liquid**: Renders the customer order details page displaying order information, line items, billing/shipping addresses, and order totals.
- **sections/page.liquid**: Renders standard Shopify page content with customizable width, padding, and color scheme settings
- **sections/password.liquid**: Renders the password-protected storefront page with authentication form and branding
- **sections/pickup-availability.liquid**: Renders in-store pickup availability UI showing closest store availability and drawer with all pickup locations for a product variant
- **sections/predictive-results.liquid**: Renders the dropdown results UI for predictive search including suggestions, collections, articles, pages, and products
- **sections/product-details.liquid**: Renders an accordion-style product details section displaying expandable blocks with title, content, and optional images
- **sections/product-highlights.liquid**: Renders a two-column product highlights section with customizable title, description, feature list with icons, and a featured image.
- **sections/product.liquid**: Renders the main product detail page (PDP) layout with media gallery, product info, variant selectors, and add-to-cart functionality
- **sections/promo-banner.liquid**: Renders a promotional banner section displaying a single product with image, title, description, price, and call-to-action button
- **sections/register.liquid**: Renders the customer registration form page with first name, last name, email, and password fields
- **sections/related-products.liquid**: Displays product recommendations on product pages using Shopify's recommendation algorithm with grid or carousel layout options
- **sections/reset-password.liquid**: undefined
- **sections/search.liquid**: Renders the search results page with filtering, sorting, and product grid display capabilities
- **sections/selling-points-v2.liquid**: Renders a flexible selling points section with title, description, and icon blocks that can optionally be links and display as a mobile slider
- **sections/selling-points.liquid**: Renders a grid of selling points with icons, titles, and descriptions to showcase product or brand benefits
- **sections/shop-by-category-v2.liquid**: Renders a grid of clickable category cards with images, titles, and arrow icons for shop navigation
- **sections/shop-by-category.liquid**: Renders an interactive shop-by-category section with a featured image on one side and a list of collection links on the other
- **sections/shop-categories.liquid**: Renders a horizontal slider carousel showcasing product collection categories with images and titles
- **sections/shop-the-look.liquid**: Renders a shop-the-look slider section with image hotspots that display product information and quick-add functionality
- **assets/cart.css**: Styles the cart drawer, cart page, cart items, quantity selectors, and cart footer elements across the theme
- **assets/component-article-card.css**: Styles the article card component used to display blog posts in grids and lists across blog-related sections
- **assets/component-cart-discount.js**: Manages the application and removal of discount codes in the Shopify cart with real-time validation and UI updates
- **assets/component-cart-drawer.js**: Manages cart drawer opening behavior by listening to AJAX cart events and dispatching custom events to trigger the drawer UI
- **assets/component-cart-notification.js**: Manages the cart notification drawer that appears when products are added to cart via AJAX
- **assets/component-complementary-products.css**: Styles the complementary/recommended products list display on product pages with grid layout and card styling
- **assets/component-data-layer.js**: Manages Google Analytics 4 / GTM ecommerce data layer events for product tracking and analytics
- **assets/component-filters-price-range.js**: Manages the interactive price range filter UI with dual range sliders and number inputs that sync values and update URL parameters for product filtering
- **assets/component-infinite-scroll.js**: Manages infinite scroll pagination for product grids by automatically loading and appending next page content when scroll anchor becomes visible
- **assets/component-localization-form.js**: Manages language and country selection forms by handling click events on selector links and submitting the form with the selected locale value
- **assets/component-modal-opener.js**: Defines the modal-opener custom element that handles button clicks to open modals and manage loading spinner states
- **assets/component-pagination.css**: Styles the pagination component UI for navigating through paginated content like collections, blogs, and search results.
- **assets/component-pickup-availability.css**: Styles the pickup availability component including the preview display and drawer overlay for showing in-store pickup locations
- **assets/component-pickup-availability.js**: Manages store pickup availability display and drawer interactions for product variants
- **assets/component-predictive-search.css**: Styles the predictive search dropdown interface including layout, product results, loading states, and overlay backdrop
- **assets/component-predictive-search.js**: Manages predictive search functionality with debounced input, fetching search suggestions from Shopify's search API, and handling results display
- **assets/component-product-card.css**: Styles product cards, article cards, color swatches, pricing display, badges, and product media presentation across collection and product grids
- **assets/component-product-card.js**: Manages color swatch interactions on product cards to swap product images when variant swatches are clicked
- **assets/component-product-media-magnify.js**: Provides image magnification/zoom functionality for product media using a hover overlay with enhanced view
- **assets/component-product-media-modal.css**: Styles the product media lightbox modal overlay with zoom functionality and responsive behavior for product image viewing
- **assets/component-product-media-modal.js**: Manages the modal dialog for displaying product media in fullscreen/lightbox mode when users click on product images
- **assets/component-product-price.css**: Styles the product price display component including sale prices, regular prices, availability badges, and unit pricing across the theme
- **assets/component-product-share-button.css**: Styles the product share button component including the dropdown fallback UI for copying share links
- **assets/component-product-share-button.js**: Manages product share functionality with native Web Share API fallback to manual copy-to-clipboard
- **assets/component-quick-add.css**: Styles the quick-add modal component that displays product details in an overlay when clicking quick-add buttons on product cards
- **assets/component-quick-add.js**: Manages the quick-add modal functionality for adding products to cart without visiting the product page
- **assets/component-selling-plans.js**: Manages subscription/selling plan selection UI and synchronizes selling plan choices with product variants and cart forms
- **assets/component-splash-screen.js**: Manages the splash screen component that displays on first visit and hides after page load with a configurable delay.
- **assets/critical.css**: Provides base CSS reset, critical layout styles, and utility classes that are loaded on every page for consistent foundational styling across the entire theme.
- **assets/customer.css**: Defines all CSS styling for customer account pages including login, register, account dashboard, order details, and address management
- **assets/customer.js**: Manages customer address management functionality including add/edit/delete operations and country/province selection integration
- **assets/product-recommendations.js**: Lazy-loads product recommendations using Intersection Observer when the element becomes visible in the viewport
- **assets/section-animated-features-v2.css**: undefined
- **assets/section-animated-features-v2.js**: Manages scroll-triggered animations and animated digit counter for the animated-features-v2 section
- **assets/section-animated-features.css**: Styles the animated features section with card flip animations, scroll-triggered reveal effects, and responsive layout for displaying product features in a grid.
- **assets/section-animated-features.js**: Manages interactive card flip behavior and scroll-triggered animations for the animated features section
- **assets/section-article.css**: Styles the blog article template layout, hero images, content typography, back navigation, comments section, and comment form
- **assets/section-blog.css**: Styles the blog section including blog title, article grid layouts (standard and collage), and responsive article card sizing
- **assets/section-blogs.css**: Styles the blogs listing section displaying multiple blog articles in a horizontal grid layout with navigation
- **assets/section-brand-story-v2.css**: Styles the brand story v2 section with a sticky left sidebar containing accordion items and a right-side image gallery with slide animations
- **assets/section-brand-story-v2.js**: Manages interactive brand story section with clickable/hoverable items that toggle active states and animated media displays
- **assets/section-brand-story.css**: Styles the brand story section that displays a before/after comparison grid with images and descriptive content in a two-column layout.
- **assets/section-collection.css**: Styles the collection page layout including product grid, filtering UI, sorting controls, and loading states
- **assets/section-collection.js**: Manages collection/search page filtering, sorting, and dynamic content updates via AJAX without page reload
- **assets/section-faq.css**: Styles the FAQ accordion section with collapsible question/answer blocks, including icons, transitions, responsive layout, and theme editor empty state notices.
- **assets/section-featured-collections-v2.css**: Styles the featured collections section v2 with tabbed navigation and Swiper carousel layout for displaying product cards
- **assets/section-featured-collections-v2.js**: Manages tabbed collection carousels with Swiper integration for the featured-collections-v2 section
- **assets/section-featured-collections.css**: Styles the featured-collections section displaying collection cards in horizontal grid or stacked mobile layout
- **assets/section-featured-products.css**: Styles the featured products section layout, product cards, and view-all button with responsive grid and alignment options
- **assets/section-featured-products.js**: Initializes and manages the Swiper carousel for featured product sections
- **assets/section-footer.css**: Styles the footer section layout, navigation, newsletter signup, localization elements, social icons, and copyright area
- **assets/section-hero-v2.css**: undefined
- **assets/section-hero.css**: Styles the hero banner section with background media, overlays, content positioning, and responsive layouts
- **assets/section-link-readme.css**: Styles the link-readme section with a centered button component using theme color variables
- **assets/section-logos.css**: Styles the infinite scrolling logo carousel with animation and responsive behavior for the logos section
- **assets/section-page.css**: Styles the page template section including page title, content typography, and placeholder graphics.
- **assets/section-product-details.css**: Styles the collapsible product details accordion section displaying product information with text and image grids
- **assets/section-product-highlights.css**: Styles the product highlights section displaying feature list with icons alongside product media in a two-column layout
- **assets/section-product.css**: Styles the product page layout, media gallery, product info, variants, quantity selector, and add-to-cart functionality
- **assets/section-product.js**: Manages product variant selection, image gallery navigation, and quantity updates on product detail pages
- **assets/section-promo-banner.css**: Styles the promo-banner section with responsive layout, image placement controls, and content/CTA styling.
- **assets/section-related-products.js**: Initializes and manages Swiper carousel for related products section that loads dynamically via AJAX
- **assets/section-search.css**: Styles the search template page header including the search input form, reset button, and predictive search results dropdown container.
- **assets/section-selling-points-v2.css**: Styles the selling-points-v2 section with responsive grid layout that transforms to a Swiper carousel on mobile devices
- **assets/section-selling-points-v2.js**: Manages a responsive carousel/slider for selling points that conditionally initializes Swiper on mobile devices
- **assets/section-selling-points.css**: Styles the selling points section grid layout displaying icon-text feature cards
- **assets/section-shop-by-category-v2.css**: Styles the shop-by-category-v2 section with expandable category cards that have hover animations on desktop and a 2-column grid on mobile
- **assets/section-shop-by-category.css**: Styles the shop-by-category section layout with a split image/content design featuring collection links with hover animations
- **assets/section-shop-by-category.js**: Manages interactive image swapping on hover/focus for collection items in the shop-by-category section
- **assets/section-shop-categories.css**: Styles the shop categories section with carousel/grid layout, category cards, navigation controls, and progress bar
- **assets/section-shop-categories.js**: Initializes and manages Swiper carousel functionality for the shop categories section with navigation and progress bar
- **assets/section-shop-the-look.css**: Styles the "Shop The Look" section including slider layout, interactive hotspots with tooltips, and product card grid presentation
- **assets/section-shop-the-look.js**: Manages interactive shop-the-look section with Swiper slider, image hotspots, product tooltips, and navigation controls
- **assets/shopify.js**: Provides core Shopify utility functions for form submission, event handling, and country/province selector functionality
- **assets/theme.js**: Provides shared utility functions used across the entire theme, currently containing a debounce function for performance optimization
- **snippets/component-article-card.liquid**: Renders a single article card component with optional image, date, author, excerpt, and badge display
- **snippets/component-cart-discount.liquid**: Renders the discount code input form and displays active discount codes applied to the cart with removal functionality
- **snippets/component-cart-drawer.liquid**: Renders the slide-out cart drawer UI with line items, quantities, totals, discount codes, and checkout actions
- **snippets/component-cart-notification.liquid**: Renders a popup notification panel that appears after adding items to cart, displaying product details and cart action buttons
- **snippets/component-data-layer.liquid**: Conditionally renders Google Tag Manager data layer tracking components based on theme settings and template context
- **snippets/component-filters-drawer.liquid**: Renders a slide-in mobile drawer for collection/search filtering and sorting with Alpine.js state management
- **snippets/component-filters-horizontal.liquid**: Renders horizontal filter UI for collection/search results with dropdowns for facet selection
- **snippets/component-filters-price-range.liquid**: Renders a dual-slider price range filter component with synchronized number inputs and range sliders for collection filtering
- **snippets/component-filters-sidebar.liquid**: Renders a sticky sidebar filter panel for collection pages with collapsible filter groups, checkboxes, price range, and show more/less functionality
- **snippets/component-gtm-body.liquid**: Renders the Google Tag Manager noscript iframe fallback in the document body for users with JavaScript disabled
- **snippets/component-gtm-head.liquid**: Initializes Google Tag Manager by injecting the GTM script in the document head when a container ID is configured
- **snippets/component-hotspot.liquid**: Renders an interactive hotspot marker with tooltip for shop-the-look functionality
- **snippets/component-localization-form.liquid**: Renders country and language selector dropdowns using Shopify's localization form with Alpine.js-powered toggle functionality
- **snippets/component-nav-drawer.liquid**: Renders the mobile navigation drawer with toggle button, slide-in panel, nested menu navigation, and optional localization/account links.
- **snippets/component-nav-dropdown.liquid**: Renders a multi-level dropdown navigation menu with support for nested child and grandchild links, adaptable for both desktop header and mobile drawer layouts.
- **snippets/component-nav-megamenu.liquid**: Renders a desktop megamenu navigation layout with expandable dropdowns and support for three-level nested menu structures
- **snippets/component-pagination.liquid**: Renders pagination controls for paginated collections, blogs, and search results with previous/next navigation and page number links
- **snippets/component-predictive-search.liquid**: Renders the predictive search form UI with input field, clear/search buttons, and results container that is populated dynamically via JavaScript
- **snippets/component-product-card.liquid**: Renders individual product cards with image, pricing, badges, quick-add functionality, and optional variant swatches for product grid displays
- **snippets/component-product-media-gallery.liquid**: Renders product media gallery with multiple layout modes (carousel, thumbnail, 2-column) using Swiper.js and integrates zoom/lightbox functionality
- **snippets/component-product-media-modal.liquid**: Renders a full-screen modal dialog for displaying product media (images, videos) with navigation controls
- **snippets/component-product-media.liquid**: Renders product media (images, videos, external videos, 3D models) with appropriate Shopify filters and tags based on media type.
- **snippets/component-product-price.liquid**: Renders product pricing display including regular price, sale price, compare-at price, unit pricing, volume pricing, and optional sale/sold-out badges
- **snippets/component-product-share-button.liquid**: Renders a share button component with Web Share API support and copy-to-clipboard fallback for sharing product URLs
- **snippets/component-social-icons.liquid**: Renders a list of social media icon links based on URLs configured in theme settings
- **snippets/component-splash-screen-head.liquid**: Checks sessionStorage on page load to determine if splash screen has been seen and adds CSS class to skip it for returning visitors
- **snippets/component-splash-screen.liquid**: Renders the splash screen overlay component that displays on initial page load with configurable timing and persistence behavior
- **snippets/css-variables.liquid**: Generates global CSS custom properties for typography (font families, weights) and color schemes used throughout the theme
- **snippets/meta-tags.liquid**: Generates SEO and social sharing meta tags including Open Graph, Twitter cards, structured data, and page title for all page types.
- **templates/404.json**: Defines the template structure and section configuration for the 404 error page displayed when users navigate to non-existent URLs.
- **templates/article.json**: Defines the layout and content structure for individual blog article pages
- **templates/blog.json**: Defines the template structure and settings for the blog listing page in the Shopify theme
- **templates/cart.json**: Defines the JSON template structure for the cart page by configuring which sections are rendered and in what order.
- **templates/collection.json**: Configures the layout and settings for the collection page template that displays product grids with filtering and sorting.
- **templates/customers/account.json**: Defines the layout structure and section configuration for the customer account page template.
- **templates/customers/activate_account.json**: undefined
- **templates/customers/addresses.json**: Defines the JSON template structure for the customer addresses page where users manage their shipping/billing addresses.
- **templates/customers/login.json**: Defines the layout and configuration for the customer login page template in Shopify
- **templates/customers/order.json**: undefined
- **templates/customers/register.json**: undefined
- **templates/customers/reset_password.json**: Defines the layout and section composition for the customer password reset page
- **templates/gift_card.liquid**: Renders the standalone gift card page that customers receive when they are issued a digital gift card, displaying the balance, code, and expiration details
- **templates/index.json**: Defines the homepage layout and configuration by composing sections with specific settings and block content.
- **templates/list-collections.json**: Defines the template structure for the all-collections listing page by including the collections section.
- **templates/password.json**: Defines the page structure and configuration for the password-protected storefront page that displays before public store access is enabled.
- **templates/product.json**: Defines the layout and configuration for product detail pages (PDPs) including content blocks, media display, and section ordering
- **templates/search.json**: Defines the layout and configuration settings for the search results page template
- **blocks/group.liquid**: Renders a flexible container block that organizes child blocks in either horizontal or vertical layout with configurable alignment and padding
- **blocks/text.liquid**: Renders a configurable text block with styling options and alignment for use within sections via content_for blocks
- **config/settings_data.json**: Stores the current theme settings values including typography, layout, colors, social links, GTM tracking configuration, and color scheme definitions
- **config/settings_schema.json**: Defines the theme-wide customizer settings structure and schema for the Shopify admin panel
- **locales/en.default.json**: Provides English language translations and user-facing text strings for all theme components, sections, and customer interactions.
- **locales/en.default.schema.json**: Provides English translations for theme editor settings, labels, and schema elements displayed in Shopify admin
- **sections/Faq-metaobjects.liquid**: Renders an FAQ accordion section populated from Shopify metaobjects of type faq_item with Alpine.js interactivity
- **assets/faq-metaobjects-setup.graphql**: Provides GraphQL mutations to initialize the faq_item metaobject definition and seed sample FAQ entries in Shopify Admin API for use by the FAQ section.

---

## Common Mistakes

- [layout/password.liquid] Confusing this with layout/theme.liquid which is the main store layout
- [layout/password.liquid] Adding full site navigation or header/footer elements meant for the main theme
- [layout/password.liquid] Attempting to load Alpine.js or theme.js assets that are only needed in the main store
- [layout/password.liquid] Forgetting this is only rendered when the store is password-protected
- [layout/password.liquid] Modifying this file when changes should be made to layout/theme.liquid instead
- [layout/theme.liquid] Adding new JavaScript libraries without considering load order relative to Alpine.js and theme.js
- [layout/theme.liquid] Forgetting that Swiper is conditionally loaded only for specific templates (collection, product, index, page, search)
- [layout/theme.liquid] Not recognizing that settings.predictive_search_enabled gates both CSS and JS loading
- [layout/theme.liquid] Attempting to use Alpine.js features before Alpine is initialized (defer attribute)
- [layout/theme.liquid] Assuming all assets are loaded on all pages (many are conditional)
- [layout/theme.liquid] Modifying asset loading order without understanding Alpine.js must load before theme.js
- [sections/Faq.liquid] Forgetting that Alpine.js must be loaded globally for x-data/x-show directives to work
- [sections/Faq.liquid] Not understanding that openBlock uses forloop.index0 (zero-based) for comparison
- [sections/Faq.liquid] Removing x-cloak without ensuring Alpine.js loads, causing FOUC (flash of unstyled content)
- [sections/Faq.liquid] [object Object]
- [sections/Faq.liquid] Assuming multiple FAQs can be open simultaneously (current implementation only allows one)
- [sections/account.liquid] Assuming JavaScript is needed for pagination (it's server-side via Liquid paginate tag)
- [sections/account.liquid] Modifying table structure without updating ARIA roles and headers associations
- [sections/account.liquid] Changing pagination limit from 20 without considering performance implications
- [sections/account.liquid] Not maintaining responsive data-label attributes when modifying table columns
