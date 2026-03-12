# Mockup → Component Matching Guide

## Decision Tree

```
Got a mockup or design requirement?
  ↓
Search sections by visual keywords below
  ↓
Found a match?
  YES → Can schema settings cover the design? → Reuse + customize
        Blocks extend it enough?              → Reuse + add blocks
        Neither?                              → Create new section
  NO  → Create new section
```

## Sections by Visual Pattern

### Hero / Banner
- **hero-v2** (`sections/hero-v2.liquid`) — Full-width banner with headline and CTA
- **hero** (`sections/hero.liquid`) — Full-width banner with headline and CTA
- **promo-banner** (`sections/promo-banner.liquid`) — Banner image with text overlay

### Product / Collection Grids
- **collection** (`sections/collection.liquid`) — t:sections.main-collection-product-grid.name section
- **collections** (`sections/collections.liquid`) — t:general.collections_grid section
- **custom-section** (`sections/custom-section.liquid`) — t:general.custom_section section
- **dynamic-grid** (`sections/dynamic-grid.liquid`) — Custom section
- **featured-collections-v2** (`sections/featured-collections-v2.liquid`) — Grid of products from a collection
- **featured-collections** (`sections/featured-collections.liquid`) — Grid of products from a collection
- **footer** (`sections/footer.liquid`) — Site footer with links and info
- **header** (`sections/header.liquid`) — Site navigation header
- **hello-world** (`sections/hello-world.liquid`) — Hello World section
- **product** (`sections/product.liquid`) — t:sections.main-product.name section
- **related-products** (`sections/related-products.liquid`) — Related products section
- **search** (`sections/search.liquid`) — t:sections.main-collection-product-grid.name section

### Two-Column (Image + Text)
- **hero-v2** (`sections/hero-v2.liquid`) — Full-width banner with headline and CTA

### Text / Content Blocks
  None found

### Interactive (Sliders, Tabs, Accordions)
- **Faq** — FAQ section [accordion]
- **featured-collections-v2** — Grid of products from a collection [slider, tabs]
- **featured-products** — Single product showcase with form [slider]
- **product-details** — Product Details section [accordion]
- **product** — t:sections.main-product.name section [accordion]
- **related-products** — Related products section [slider]
- **selling-points-v2** — Selling Points V2 section [slider]
- **shop-categories** — Shop Categories section [slider]
- **shop-the-look** — Shop The Look section [slider]
- **Faq-metaobjects** — FAQ — Metaobjects section [accordion]

### Forms
- **header** — Site navigation header

---

## Full Section Details

### 404 (`sections/404.liquid`)
- Role: 404 section
- Mockup keywords: 404 page, error page, not found, centered text layout, single CTA button, empty state, page not found, centered message
- Schema settings: 1 | Block types: 0
- Use when: When you need a simple centered error page with a heading, subtext, and a single call-to-action button directing users back to shopping.
- Create new if: When the mockup requires multiple CTAs, search functionality, product recommendations, navigation links, images/illustrations, or a different layout structure beyond centered vertical text.
- Requirements that exceed this section: Multiple call-to-action buttons with different destinations; Search bar or search suggestions; Product recommendations or collections grid; Custom illustration or hero image; Navigation menu or sitemap links; Multi-column layout; Background image or video; Different text alignment (left/right); Custom form elements

### Faq (`sections/Faq.liquid`)
- Role: FAQ section
- Mockup keywords: faq-accordion, collapsible-content, expandable-list, question-answer, accordion-panel, toggle-content, plus-minus-icons, interactive-faq
- Schema settings: 5 | Block types: 1
- Use when: When mockup shows a vertically stacked list of questions that expand/collapse to reveal answers with plus/minus toggle icons.
- Create new if: When mockup requires multi-column FAQ layout, category tabs, search functionality, or always-visible answers without accordion behavior.
- Requirements that exceed this section: FAQ items grouped into multiple columns or grid layout; Category filtering or tabbed navigation between FAQ groups; Search or filter functionality for questions; Multiple FAQs open simultaneously by default; Media content (images/videos) within answers requiring image blocks; Side-by-side layout with questions on left and answers on right; Different icon sets or custom animations beyond plus/minus toggle; Nested accordions or sub-questions within answers

### account (`sections/account.liquid`)
- Role: t:sections.main-account.name section
- Mockup keywords: customer-account-dashboard, order-history-table, account-overview, logged-in-user-page, transaction-list, customer-portal, account-header-logout, paginated-orders
- Schema settings: 4 | Block types: 0
- Use when: When the mockup shows a logged-in customer's account page with order history table and logout functionality
- Create new if: When the mockup requires additional customer data sections like address book, wishlist, subscription management, or loyalty points that go beyond basic order history
- Requirements that exceed this section: Mockup includes saved addresses or address management UI; Design shows customer profile editing fields beyond orders; Layout includes wishlist or saved items display; Mockup requires subscription or recurring order management; Design shows loyalty points, rewards, or referral program; Layout includes order filtering, searching, or advanced sorting beyond pagination; Mockup shows order details inline without linking to separate page; Design requires multiple tabs or navigation within account area

### activate-account (`sections/activate-account.liquid`)
- Role: t:sections.main-activate-account.name section
- Mockup keywords: account activation, password setup form, dual password fields, customer onboarding, form with decline option, centered account form, password confirmation layout, customer authentication
- Schema settings: 3 | Block types: 0
- Use when: Use this section when a design shows a customer account activation flow with password and password confirmation fields plus submit/cancel actions.
- Create new if: Create a new section if the activation flow requires additional fields beyond password/confirmation, multi-step onboarding, email verification UI, or terms acceptance checkboxes.
- Requirements that exceed this section: Additional input fields beyond password and password confirmation are needed; Multi-step activation wizard or progress indicator is required; Email verification or code entry interface is part of activation; Terms of service or privacy policy checkboxes must be included; Social login or OAuth integration is part of the activation flow; Profile information collection during activation is required

### addresses (`sections/addresses.liquid`)
- Role: t:sections.main-addresses.name section
- Mockup keywords: customer-addresses, account-dashboard, address-book, form-list, add-new-address, address-management, customer-portal, paginated-list, account-section
- Schema settings: 3 | Block types: 0
- Use when: When mockup shows a customer account page for managing multiple shipping/billing addresses with add/edit capabilities
- Create new if: When mockup requires inline address editing, map integration, address validation UI, or non-standard address field layouts beyond basic form structure
- Requirements that exceed this section: Address cards need visual map previews or geolocation features; Inline editing without modal/expandable forms is required; Custom address field layouts beyond standard country/region dropdowns; Integration with third-party address verification UI elements; Multiple address types with visual categorization (home/work/other with icons); Drag-and-drop address reordering or priority setting; Address sharing or collaborative address book features

### animated-features-v2 (`sections/animated-features-v2.liquid`)
- Role: Animated Features V2 section
- Mockup keywords: animated-percentage, split-layout, feature-list-with-image, stats-with-checkmarks, two-column-features, percentage-hero, animated-counter, image-text-split, checklist-features
- Schema settings: 20 | Block types: 0
- Use when: When mockup shows a two-column layout with an image on one side and an animated percentage/stat with a bulleted feature list on the other.
- Create new if: When the mockup requires multiple images, more than 4 features, complex nested blocks, or different content types beyond a single percentage and checklist.
- Requirements that exceed this section: More than 4 feature items needed; Multiple statistics or percentage counters required; Repeating block structure for unlimited features; Video or carousel instead of single static image; Icon picker or custom SVG uploads per feature; CTA buttons or links within features; Multiple columns of features; Alternating image/content layout patterns

### animated-features (`sections/animated-features.liquid`)
- Role: Animated Features section
- Mockup keywords: animated-feature-cards, flip-cards, 2-column-features, icon-grid, interactive-cards, feature-showcase, hover-flip, animated-grid, left-right-split
- Schema settings: 30 | Block types: 0
- Use when: When the mockup shows a split layout with heading/CTA on the left and a 2x2 grid of interactive flip cards with icons and images on the right
- Create new if: When the mockup requires more than 4 feature cards, a different grid layout (3x3, single row, etc.), or cards without flip animation
- Requirements that exceed this section: More than 4 feature cards needed; Grid layout other than 2x2 (e.g. 3 columns, single row, 3x3); Cards need different interaction patterns (hover expand, modal, slide, etc.); Multiple buttons or complex CTA arrangements in left column; Cards need links, buttons, or multiple images per card; Right-side content needs to be something other than a card grid; Requires video content instead of static images

### announcement-bar (`sections/announcement-bar.liquid`)
- Role: Top-of-page announcement strip
- Mockup keywords: announcement-bar, promo-banner, rotating-banner, top-banner, marquee-bar, notification-strip, header-announcement, message-carousel, auto-scroll-banner, promotional-header
- Schema settings: 4 | Block types: 1
- Use when: When the mockup shows a thin horizontal banner at the top of the page with rotating or static promotional messages, optional links, and navigation arrows.
- Create new if: When the mockup requires multiple stacked announcement rows, complex animations beyond fade-in, embedded media/images, or full-width promotional banners with background images.
- Requirements that exceed this section: Multiple simultaneous announcement bars displayed vertically; Background images or gradient overlays instead of solid colors; Embedded countdown timers or dynamic product pricing; Icon sets or image assets beyond simple emoji; Vertical text scrolling or marquee animations; Split-screen or multi-column announcement layouts; Interactive elements like email signup forms or dropdown menus; Video backgrounds or animated graphics

### article (`sections/article.liquid`)
- Role: t:sections.main-article.name section
- Mockup keywords: article-hero, blog-post-layout, featured-image-header, content-blocks, back-button, article-metadata, responsive-article, blog-detail-page, article-title-banner, content-typography
- Schema settings: 4 | Block types: 5
- Use when: Use this section for any blog article or editorial content page with customizable title, featured image, and rich text content blocks.
- Create new if: Create a new section if the mockup requires multi-column article layouts, embedded video heroes, sidebar navigation, or complex author bio cards not achievable through blocks.
- Requirements that exceed this section: Split-screen or multi-column article layout; Video hero instead of static image; Sidebar with table of contents or related articles; Author bio section with social links and profile image; Progress bar or reading time indicator; Inline product embeds within content; Comment system integration; Newsletter signup embedded mid-article; Sticky social share buttons; Breadcrumb navigation above article

### blog (`sections/blog.liquid`)
- Role: t:sections.main-blog.name section
- Mockup keywords: blog-grid, article-listing, blog-archive, post-grid, content-feed, blog-index, article-cards, paginated-blog
- Schema settings: 9 | Block types: 0
- Use when: When displaying a paginated list of blog articles with optional images, dates, authors, and excerpts in either grid or collage layout
- Create new if: When needing multiple blogs on one page, custom filtering/categories, featured posts, sidebar navigation, or non-standard article counts per page
- Requirements that exceed this section: Multiple blogs displayed simultaneously; Category or tag filtering UI; Featured or pinned articles at top; Sidebar with widgets or navigation; Custom articles-per-page count (hardcoded to 6); Search functionality within blog; Load-more or infinite scroll instead of pagination; Mixed content types (articles + products/collections); Custom article card layouts beyond component-article-card

### blogs (`sections/blogs.liquid`)
- Role: Blogs section
- Mockup keywords: blog-grid, article-cards, blog-feed, post-preview, content-grid, blog-listing, article-section, editorial-cards
- Schema settings: 9 | Block types: 1
- Use when: When design shows a grid of blog articles/posts with images, titles, descriptions, and an optional section heading with navigation link.
- Create new if: When design requires filtering, categories, pagination, slider/carousel format, or significantly different card layouts beyond what blocks can provide.
- Requirements that exceed this section: Multiple blogs displayed simultaneously with filtering or tabs; Carousel or slider layout instead of static grid; Complex metadata display (author, date, tags, read time) beyond basic title/description; Masonry or asymmetric grid layouts; Interactive filtering or search functionality; Pagination or load-more functionality; Different card styles per block (not uniform grid items)

### brand-story-v2 (`sections/brand-story-v2.liquid`)
- Role: Brand Story V2 section
- Mockup keywords: brand-story, accordion-image-split, tabbed-content, story-accordion, feature-tabs, vertical-accordion, split-layout, interactive-content, collapsible-features, image-switcher
- Schema settings: 4 | Block types: 1
- Use when: When a mockup shows an accordion or tabbed interface with text content on the left that reveals corresponding images on the right as users interact with different items.
- Create new if: When the mockup requires multiple images per item, video content instead of static images, horizontal tabs instead of vertical accordion, or a grid layout rather than split left-right design.
- Requirements that exceed this section: Multiple images or image galleries per accordion item; Video or animated media content instead of static images; Horizontal tab navigation instead of vertical accordion; Side-by-side comparison of multiple items simultaneously; Nested or multi-level accordion structures; Image positioned on left with content on right; Grid or card-based layout instead of split-screen; Autoplay or carousel functionality for content rotation

### brand-story (`sections/brand-story.liquid`)
- Role: Brand Story section
- Mockup keywords: before-after, image-comparison, split-layout, brand-story, two-column-images, labeled-images, comparison-slider, side-by-side-images, visual-comparison, story-section
- Schema settings: 13 | Block types: 0
- Use when: When mockup shows two labeled images side-by-side (typically for before/after, comparison, or brand evolution storytelling) with text content alongside.
- Create new if: When mockup requires more than two comparison images, interactive slider functionality, video comparisons, or multiple comparison sets in one section.
- Requirements that exceed this section: More than two images in the comparison; Interactive drag slider between images; Video content instead of static images; Multiple comparison pairs in a grid layout; Vertical stacking of comparisons; Animated transitions between states; User-controlled image reveal/overlay

### cart (`sections/cart.liquid`)
- Role: t:sections.main-cart-items.name section
- Mockup keywords: cart-page, shopping-cart, line-items-list, cart-summary, product-thumbnail-list, quantity-selector, remove-item, cart-table, checkout-flow
- Schema settings: 4 | Block types: 0
- Use when: When the mockup shows a standard shopping cart page with product listings, quantities, prices, and cart management functionality.
- Create new if: When the mockup requires a multi-step cart experience, inline upsells, gift wrapping options, or significantly different layout like a slide-out cart drawer.
- Requirements that exceed this section: Cart displayed as a drawer/modal instead of full page; Multi-column cart layout with featured products or recommendations; Advanced cart features like bundling, tiered discounts display, or gift message forms; Split cart view with sticky sidebar checkout summary; Cart requires custom shipping calculator or delivery date picker; Design needs tabbed interface between cart items and saved items

### collection (`sections/collection.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: collection-grid, product-grid, filter-sidebar, vertical-filters, horizontal-filters, pagination, collection-hero, quick-add, multi-column-grid
- Schema settings: 27 | Block types: 0
- Use when: Use this section when a design shows a collection page with product grid, filtering options (vertical sidebar or horizontal), sorting, and pagination.
- Create new if: Create a new section if the mockup requires completely custom product card layouts, unconventional grid structures (masonry, offset), or integrated collection-specific content blocks between products.
- Requirements that exceed this section: Non-standard grid patterns (masonry, asymmetric layouts, Pinterest-style); Inline content blocks or banners between product rows; Custom product card designs that can't use component-product-card.css; Split-screen or side-by-side collection comparison layouts; Infinite scroll instead of pagination; Custom filtering UI that doesn't match vertical/horizontal options

### collections (`sections/collections.liquid`)
- Role: t:general.collections_grid section
- Mockup keywords: collections-grid, category-grid, 3-column-grid, collection-cards, image-grid, collection-list, category-tiles, responsive-grid
- Schema settings: 5 | Block types: 0
- Use when: When mockup shows a grid of collection/category cards with images, titles, and optional descriptions in a multi-column layout
- Create new if: When mockup requires custom card layouts, filtering options, collection selection controls, or non-grid layouts like carousels or masonry
- Requirements that exceed this section: Need to manually select specific collections instead of showing all collections; Requires custom card content beyond image, title, description, and arrow; Layout is carousel/slider instead of static grid; Needs filtering, sorting, or pagination controls; Requires per-collection color schemes or unique card styling; Needs hover effects or animations beyond basic styling; Requires different grid columns at various breakpoints beyond 3-col/2-col; Card layout is horizontal instead of vertical stack

### custom-section (`sections/custom-section.liquid`)
- Role: t:general.custom_section section
- Mockup keywords: custom-section, flexible-container, background-image-section, grid-wrapper, theme-blocks, full-width-section, content-overlay, universal-container, modular-layout, wrapper-section
- Schema settings: 1 | Block types: 1
- Use when: When the mockup shows a full-width section with optional background image that needs to contain any combination of existing theme blocks in a centered grid layout.
- Create new if: When the mockup requires specific custom blocks, unique grid layouts, fixed content structure, or styling that cannot be achieved through theme blocks alone.
- Requirements that exceed this section: Mockup requires custom block types not available in theme blocks; Layout needs specific multi-column grid patterns beyond single centered column; Design requires hardcoded content structure rather than flexible blocks; Section needs custom settings beyond background image; Specific block order, relationships, or conditional logic is required; Unique CSS styling or animations that conflict with grid-template-columns structure

### dynamic-grid (`sections/dynamic-grid.liquid`)
- Role: Custom section
- Mockup keywords: dynamic-grid, content-grid, promotional-grid, image-grid, feature-grid, modular-grid, flexible-layout, multi-column-content, grid-with-title, configurable-grid
- Schema settings: 0 | Block types: 0
- Use when: When a mockup shows a grid-based layout with customizable title, description, and button that requires flexible content alignment and typography controls.
- Create new if: When the mockup requires specific grid column counts, image positioning, overlay text on images, or repeating block items rather than single section-level content.
- Requirements that exceed this section: Mockup shows specific column layouts (2-col, 3-col, 4-col) with individual grid items; Grid items need individual images, titles, or descriptions (requires blocks schema); Layout includes image overlays, hover effects, or card-based designs; Grid needs to display product collections, blog posts, or other dynamic Shopify content; Responsive breakpoints require different grid arrangements (e.g., 4 columns to 2 columns to 1 column); Items within grid need individual CTAs or links; Requires filterable or sortable grid items

### featured-collections-v2 (`sections/featured-collections-v2.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: tabbed-collections, product-carousel, multi-collection-slider, tabbed-product-grid, collection-tabs, swiper-collections, featured-products-tabbed
- Schema settings: 18 | Block types: 1
- Use when: When the mockup shows multiple collections displayed as tabs with product carousels/sliders for each collection tab.
- Create new if: If the mockup requires a non-tabbed layout, static grid instead of carousel, or fundamentally different navigation patterns like dropdowns or accordion-style collection switching.
- Requirements that exceed this section: Collections need to display simultaneously without tabs; Requires vertical tab orientation or sidebar navigation; Needs filtering or sorting controls within collections; Requires pagination instead of carousel/swiper; Needs collection descriptions or metadata beyond product cards; Requires nested subcategories or hierarchical collection display; Mockup shows masonry or Pinterest-style grid layout

### featured-collections (`sections/featured-collections.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: featured-collections, collection-grid, collection-cards, multi-collection-showcase, category-grid, image-grid-with-labels, collection-tiles, shop-by-category
- Schema settings: 7 | Block types: 1
- Use when: When the mockup shows multiple collection cards in a grid layout with images and titles, optionally with a section heading and configurable card styles.
- Create new if: When the mockup requires product listings instead of collections, complex multi-row layouts with different card sizes, or interactive filtering/sorting functionality.
- Requirements that exceed this section: Cards need to display product counts, prices, or other collection metadata beyond title and image; Layout requires asymmetric grid patterns or masonry-style arrangements; Cards need hover states with multiple CTAs or overlay content; Section needs carousel/slider functionality instead of static grid; Interactive filters or category navigation is required; Cards must link to pages other than collection URLs; Custom card dimensions or aspect ratios per block are needed

### featured-products (`sections/featured-products.liquid`)
- Role: Single product showcase with form
- Mockup keywords: product-carousel, featured-products-slider, product-swiper, product-showcase, horizontal-product-scroll, product-grid-slider, curated-products, shop-collection-carousel
- Schema settings: 11 | Block types: 1
- Use when: When the mockup shows a horizontal scrolling/sliding display of individual products with navigation arrows, optional heading/subheading, and a view-all link.
- Create new if: When the mockup requires a static grid layout without carousel functionality, vertical product stacking, or fundamentally different product card structures like comparison tables or bundled product displays.
- Requirements that exceed this section: Products must display in a static multi-column grid without horizontal scrolling; Product cards need complex interactive elements like quick-add variants or comparison checkboxes; Layout requires products from a dynamic collection rather than manually selected individual products; Design shows products in a masonry or Pinterest-style layout; Product display needs filtering, sorting, or search functionality; Cards require video content or 3D model viewers as primary media

### footer (`sections/footer.liquid`)
- Role: Site footer with links and info
- Mockup keywords: footer, multi-column footer, footer links, social icons, brand information, footer menu, site footer, bottom navigation, newsletter footer
- Schema settings: 11 | Block types: 4
- Use when: When the mockup shows a site footer with any combination of link lists, text blocks, social media icons, or brand information arranged in columns
- Create new if: When the mockup requires footer-specific features like newsletter signup forms, payment icons, language/currency selectors, or complex multi-row layouts not supported by basic text and link blocks
- Requirements that exceed this section: Newsletter subscription form with email input; Payment method icons or trust badges; Country/language selector dropdown; Multi-row footer with distinct top/middle/bottom sections; Footer with embedded maps or contact forms; Copyright text with dynamic year; Custom footer navigation with mega-menu style dropdowns; Product or collection links with images

### header (`sections/header.liquid`)
- Role: Site navigation header
- Mockup keywords: sticky header, top navigation, logo center, cart icon, account icon, menu dropdown, horizontal nav, announcement bar, persistent header, site navigation
- Schema settings: 22 | Block types: 1
- Use when: When the mockup shows a horizontal navigation bar at the top with logo, menu links, and utility icons (cart/account) in a standard layout configuration
- Create new if: When the mockup requires a mega menu with custom content blocks, full-width promotional banners within the header, or completely custom icon arrangements not supported by the grid layout
- Requirements that exceed this section: Header needs embedded promotional content blocks or banners within the navigation area; Mockup shows a mega menu with product images, multi-column layouts, or rich media content; Design requires a vertical sidebar navigation instead of horizontal; Header includes complex search with autocomplete and product suggestions; Layout needs hamburger menu on desktop (not just mobile drawer); Design requires multiple rows of navigation with different styling per row; Header needs animated transitions between menu states beyond simple dropdowns

### hello-world (`sections/hello-world.liquid`)
- Role: Hello World section
- Mockup keywords: welcome-hero, split-content, text-with-icon, three-column-features, info-cards, feature-grid, educational-content, onboarding-section
- Schema settings: 4 | Block types: 0
- Use when: Use for welcome/educational content with a hero message paired with an illustration and a three-column feature grid below
- Create new if: Create new if mockup requires different column counts, carousel functionality, interactive elements, video, or significantly different layout structure
- Requirements that exceed this section: More or fewer than 3 feature columns needed; Content needs to be dynamically editable via blocks instead of hardcoded; Requires image upload instead of SVG asset reference; Needs button CTAs with customizable links; Requires different mobile layout (currently only has basic responsive padding); Needs background images or overlays; Requires accordion or tab functionality for content

### hero-v2 (`sections/hero-v2.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero, split-layout, hero-banner, video-background, image-with-text, content-left-media-right, full-width-hero, CTA-hero, vertical-split
- Schema settings: 19 | Block types: 1
- Use when: When mockup shows a hero section with left-aligned text content (heading, description, CTA button) and right-aligned image or video background with alignment controls
- Create new if: When mockup requires multiple images/videos simultaneously, overlapping content layers, animated text effects, carousel/slider functionality, or form inputs within the hero
- Requirements that exceed this section: Multiple media items displayed at once (not just background vs main image); Text overlay directly on media instead of separate content column; Carousel or slider functionality with multiple hero slides; Form fields embedded in hero (email capture, search bar); Animated or staggered text entrance effects; Parallax scrolling effects; Content positioned center or right instead of left column; Multiple CTA buttons with different styles; Background shapes or decorative elements beyond image/video

### hero (`sections/hero.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero banner, full-width hero, video background hero, image banner, headline overlay, CTA banner, above-the-fold, endorsement signature, star rating hero, splash banner
- Schema settings: 22 | Block types: 0
- Use when: Use this section for full-width homepage or landing page heroes with a single headline, subheading, CTA button, optional star rating text, and optional endorsement signature block over an image or video background.
- Create new if: Create a new section if the mockup requires split layouts, multiple columns of content, carousels/slideshows, multiple CTAs, form inputs, product cards, or side-by-side image-text arrangements.
- Requirements that exceed this section: Multiple slides or carousel functionality; Split-screen or two-column layout with image on one side; Multiple call-to-action buttons with different styles; Embedded forms or email capture fields; Product tiles, grids, or featured collections within the hero; Parallax scrolling effects beyond basic overlay; Dynamic content blocks that can be reordered or repeated; Image galleries or before/after sliders

### link-readme (`sections/link-readme.liquid`)
- Role: Link Readme section
- Mockup keywords: call-to-action, cta-button, single-button, link-banner, simple-cta, centered-button, action-prompt, readme-link, standalone-button
- Schema settings: 7 | Block types: 0
- Use when: When the mockup shows a simple, standalone call-to-action button centered on the page with optional background color scheme and padding controls.
- Create new if: When the design requires multiple buttons, accompanying text/headings, icons, images, or complex layout arrangements beyond a single centered button.
- Requirements that exceed this section: Multiple buttons or links needed; Heading, subheading, or descriptive text required alongside the button; Icons or images needed in the CTA area; Multi-column or split layout design; Background image or video required; Complex button styling beyond basic button class; Conditional visibility rules or dynamic content blocks

### login (`sections/login.liquid`)
- Role: t:sections.main-login.name section
- Mockup keywords: customer-login-form, password-recovery, account-sign-in, email-input-fields, shop-login-button, form-validation, two-column-auth, login-page, account-access, customer-portal-entry
- Schema settings: 5 | Block types: 0
- Use when: When the design shows a customer authentication page with standard login and password recovery forms.
- Create new if: When the design requires split layouts, social login providers beyond Shop, multi-step authentication, or embedded registration forms on the same page.
- Requirements that exceed this section: Side-by-side login/register layout instead of sequential forms; Social login buttons (Google, Facebook, Apple) beyond Shopify's Shop login; Custom registration fields visible on login page; Multi-step authentication or OTP verification; Promotional content, images, or marketing copy alongside forms; Tabbed interface switching between login and register; Guest checkout option embedded in login flow

### logos (`sections/logos.liquid`)
- Role: Logos section
- Mockup keywords: logo-carousel, brand-slider, logo-marquee, partner-logos, trust-badges, logo-strip, infinite-scroll-logos, client-showcase, brand-grid, logo-ticker
- Schema settings: 9 | Block types: 1
- Use when: When the mockup shows a horizontal scrolling or static row of brand/partner logos, typically used for social proof or showcasing clients/partners.
- Create new if: When the design requires logos in a multi-row grid layout, filterable categories, individual logo links to different URLs, or complex hover interactions beyond simple logo display.
- Requirements that exceed this section: Logos need different destination URLs or clickable links per logo; Design shows multi-row grid instead of single horizontal track; Requires category filtering or tabbed logo groups; Needs individual logo captions or descriptions beneath each image; Requires stacked or masonry layout instead of linear arrangement; Logos need complex hover effects like color overlays or animations beyond scroll

### order (`sections/order.liquid`)
- Role: t:sections.main-order.name section
- Mockup keywords: order-history-table, customer-account-order, order-details-page, product-line-items-table, order-summary-layout, tabular-order-view, account-dashboard-order, order-status-page
- Schema settings: 3 | Block types: 0
- Use when: When the mockup shows a customer's individual order details page with a table of purchased items, SKUs, prices, quantities, and totals.
- Create new if: When the mockup requires a completely different order display format (e.g., card-based layout, timeline view, or visual product gallery instead of tabular data).
- Requirements that exceed this section: Order details need to be displayed in a non-tabular format (cards, tiles, timeline); Requires embedded tracking maps or interactive shipment visualization; Needs multi-column responsive layout with product images prominently featured; Requires inline reorder functionality or product review sections within order details; Design calls for collapsible/expandable order item groups or custom filtering; Mockup shows split-screen layout with order tracking on one side and items on the other

### page (`sections/page.liquid`)
- Role: t:sections.main-page.name section
- Mockup keywords: page-content, static-page, simple-text-page, centered-content, single-column-text, basic-page-layout, narrow-content, cms-page
- Schema settings: 5 | Block types: 0
- Use when: Use this section for simple static pages with a title and text content in a single centered column layout with minimal styling.
- Create new if: Create a new section when the page requires multiple columns, media elements, custom blocks, repeatable content modules, or complex layout patterns beyond a single text column.
- Requirements that exceed this section: Multiple column layouts or grid structures are needed; Images, videos, or other media need to be interspersed with content; Repeatable blocks or modular content sections are required; Custom CTAs, buttons, or interactive elements beyond basic rich text; Side-by-side content arrangements or asymmetric layouts; Accordion, tabs, or other content organization patterns; Background images or overlays on the content area; Custom typography controls beyond basic rich text editor

### password (`sections/password.liquid`)
- Role: Password Page section
- Mockup keywords: password-page, coming-soon, splash-screen, login-gate, email-capture, store-access, maintenance-mode, pre-launch, centered-form, brand-lockup
- Schema settings: 7 | Block types: 0
- Use when: When implementing a password-protected storefront page with centered branding, message, and password form before store launch or during maintenance.
- Create new if: If the mockup requires multiple content blocks, media backgrounds, newsletter signup, social sharing, countdown timer, or multi-step authentication beyond a single password input.
- Requirements that exceed this section: Video or image background slider instead of gradient; Newsletter signup form in addition to password; Social media login options or OAuth integration; Multiple input fields or multi-step verification; Countdown timer to launch date; Product previews or gallery carousel; Multiple CTAs or navigation links; Split-screen layout with media on one side; Customer testimonials or feature highlights

### pickup-availability (`sections/pickup-availability.liquid`)
- Role: Custom section
- Mockup keywords: store pickup, local availability, BOPIS, click-and-collect, store locator drawer, inventory checker, location selector, pickup drawer modal, store availability list, location-based pickup
- Schema settings: 0 | Block types: 0
- Use when: When the mockup shows product-level store pickup availability with a preview of the closest location and an expandable drawer/modal listing all available store locations for in-store collection.
- Create new if: When the design requires map integration, real-time inventory sync display, distance calculations, store filtering by distance/features, or appointment booking for pickup.
- Requirements that exceed this section: Interactive map showing store locations visually; Distance calculation or geolocation-based sorting; Advanced filtering by store amenities or hours; Appointment/time slot selection for pickup; Integration with third-party inventory management displays; Multi-product pickup availability comparison; Standalone page layout (not product-level component); Custom store information cards with photos/ratings

### predictive-results (`sections/predictive-results.liquid`)
- Role: Custom section
- Mockup keywords: predictive-search, autocomplete-dropdown, search-suggestions, instant-search-results, layered-search-panels, product-search-preview, search-overlay, typeahead-search
- Schema settings: 0 | Block types: 0
- Use when: When a mockup shows live search results appearing as the user types, with categorized sections for suggestions, products, articles, pages, and collections in a dropdown or overlay format.
- Create new if: If the mockup requires advanced filtering, faceted search, grid-based product layouts with add-to-cart buttons, or a full-page search results experience rather than a predictive dropdown.
- Requirements that exceed this section: Search results need filtering or sorting controls; Products require interactive elements like quick-view or add-to-cart buttons; Design calls for a paginated full-page search results layout; Mockup shows tabbed navigation between result categories; Custom card layouts with ratings, badges, or variant swatches are needed; Results require a masonry or multi-column grid instead of lists

### product-details (`sections/product-details.liquid`)
- Role: Product Details section
- Mockup keywords: accordion, collapsible-details, product-specs, tabbed-content, expandable-panels, faq-style, details-section, image-text-accordion, split-content-blocks
- Schema settings: 5 | Block types: 1
- Use when: When a mockup shows collapsible/expandable content blocks with text and optional images, typically for product specifications, care instructions, or detailed information organized in accordion format.
- Create new if: When the mockup requires always-visible content without accordion interaction, tab navigation instead of vertical accordions, or fundamentally different interaction patterns like modals or side-drawers.
- Requirements that exceed this section: Content must be displayed in horizontal tabs instead of vertical accordion; Multiple accordions need to be open simultaneously by default; Requires video embeds or interactive elements beyond static images and text; Needs table or comparison chart layout for specifications; Requires filtering or search functionality within the content blocks; Content must be displayed as always-visible cards without collapse functionality

### product-highlights (`sections/product-highlights.liquid`)
- Role: Product Highlights section
- Mockup keywords: feature-list-with-image, product-features-split, icon-list-image-layout, benefit-highlights, two-column-features, image-text-features, icon-feature-grid, product-usp-section
- Schema settings: 9 | Block types: 1
- Use when: When mockup shows product features or benefits as an icon list paired with a single image in a two-column layout.
- Create new if: When mockup requires multiple images per feature, carousel functionality, video content, or complex grid layouts with more than one media column.
- Requirements that exceed this section: Multiple images required (not just one main image); Features need individual images per item instead of shared icons; Carousel or slider functionality for features or images; Three-column or complex grid layout instead of two-column split; Video or interactive media instead of static image; Expandable/collapsible feature descriptions or accordion behavior; Feature items need CTAs or links with buttons; Alternating image-text layouts or multiple content blocks

### product (`sections/product.liquid`)
- Role: t:sections.main-product.name section
- Mockup keywords: product-detail-page, pdp-layout, product-gallery, product-info, media-gallery, variant-selector, add-to-cart, product-description, complementary-products, split-layout
- Schema settings: 18 | Block types: 15
- Use when: Use this section for any standard product detail page layout with image gallery, product info, pricing, variants, and optional complementary product recommendations.
- Create new if: Create a new section if the mockup requires a fundamentally different product page structure like a lookbook-style layout, virtual try-on interface, or multi-column comparison view.
- Requirements that exceed this section: Product page needs multiple products displayed side-by-side for comparison; Design requires a fullscreen immersive experience or non-standard navigation; Layout needs integrated AR/3D viewer as primary media instead of standard gallery; Design calls for horizontally scrolling product variants with large preview images; Page requires tabbed content sections for specifications, reviews, and related products in equal hierarchy

### promo-banner (`sections/promo-banner.liquid`)
- Role: Banner image with text overlay
- Mockup keywords: promo-banner, product-highlight, split-layout, featured-product, image-text-banner, product-callout, two-column-promo, cta-banner
- Schema settings: 13 | Block types: 0
- Use when: Use this section when the mockup shows a single product promotion with an image on one side and product details (title, description, price, CTA button) on the other side in a split layout.
- Create new if: Create a new section if the mockup requires multiple products displayed simultaneously, interactive product options/variants, carousel/slideshow functionality, or complex grid layouts beyond a simple two-column split.
- Requirements that exceed this section: Multiple products need to be displayed in the same banner; Product variant selector or add-to-cart functionality is required; Carousel or slideshow of multiple promo items; Grid layout with more than two columns; Video content instead of static images; Multiple CTAs or button groups; Dynamic content blocks that users can add/remove; Complex overlay effects or parallax scrolling

### register (`sections/register.liquid`)
- Role: t:sections.main-register.name section
- Mockup keywords: registration form, account signup, customer create, vertical form layout, labeled input fields, form validation, error messaging, customer authentication
- Schema settings: 3 | Block types: 0
- Use when: When the design shows a customer registration/signup form with first name, last name, email, and password fields in a standard vertical layout.
- Create new if: When the design requires multi-step registration, social login buttons, additional custom fields beyond name/email/password, horizontal form layouts, or embedded marketing content within the registration flow.
- Requirements that exceed this section: Multi-column or split-screen layout with imagery or promotional content; Social authentication buttons (Google, Facebook, Apple login); Additional customer fields like phone, company, address during registration; Multi-step wizard or progressive disclosure pattern; Marketing opt-ins, checkboxes, or terms acceptance beyond default; Custom success/confirmation messaging or redirect logic; Embedded promo codes or referral fields

### related-products (`sections/related-products.liquid`)
- Role: Related products section
- Mockup keywords: related-products, product-recommendations, product-carousel, product-grid, you-may-also-like, recommended-items, product-slider, cross-sell, upsell-section, similar-products
- Schema settings: 22 | Block types: 0
- Use when: Use this section when mockups show product recommendations, related items, or cross-sell products on product pages with either grid or carousel layout.
- Create new if: Create a new section if the mockup requires manual product selection, custom recommendation logic, bundling features, or non-standard layouts like masonry or asymmetric grids.
- Requirements that exceed this section: Manual product curation instead of automatic recommendations; Product bundles with combined pricing; Mixed content types (products + collections + blog posts); Custom recommendation algorithms or filters beyond Shopify's native engine; Interactive comparison features or side-by-side product views; Masonry, asymmetric, or highly custom grid layouts; Integration with third-party recommendation engines; Add-to-cart functionality directly in the carousel/grid; Customizable product card layouts beyond standard component; Tab-based or category-filtered product recommendations

### reset-password (`sections/reset-password.liquid`)
- Role: t:sections.main-reset-password.name section
- Mockup keywords: password-reset-form, two-field-form, customer-authentication, password-confirmation, centered-form-layout, account-security-page, form-validation-errors, inline-error-messaging
- Schema settings: 3 | Block types: 0
- Use when: When mockup shows a simple two-field password reset form with error handling for customer account password recovery
- Create new if: If mockup requires additional fields, password strength indicators, multi-step verification, social login options, or complex custom layouts beyond basic centered form structure
- Requirements that exceed this section: More than two password input fields are needed; Password strength meter or validation requirements display is required; Multi-step password reset flow with email verification UI; Side-by-side layout with educational content or security tips; Integration with third-party authentication providers; Custom branding elements or complex header/footer within the form; Additional user profile fields to update during password reset

### search (`sections/search.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: search-results, product-grid, filterable-search, vertical-filters, horizontal-filters, paginated-results, quick-add, columns-layout, color-scheme
- Schema settings: 31 | Block types: 0
- Use when: When the design shows a search results page with product grid, optional filtering (vertical or horizontal), sorting, and pagination.
- Create new if: When the design requires non-product search results (articles, pages, collections only), custom result cards beyond standard product cards, or a completely different layout paradigm like masonry or list view.
- Requirements that exceed this section: Search results must display multiple content types in a unified layout (products, blog posts, pages mixed); Custom filtering UI beyond vertical/horizontal filter types; Non-grid layouts like list view, masonry, or carousel presentation; Inline filtering without page reload required; Custom product card layouts that component-product-card.css cannot accommodate; Search suggestions or autocomplete within results page itself; Faceted search with drill-down navigation

### selling-points-v2 (`sections/selling-points-v2.liquid`)
- Role: Selling Points V2 section
- Mockup keywords: selling-points, feature-cards, horizontal-cards, icon-cards, info-blocks, mobile-carousel, swipeable-features, benefit-tiles
- Schema settings: 6 | Block types: 1
- Use when: Use this section when the mockup shows multiple selling points, features, or benefits displayed as horizontal cards with titles, descriptions, and icons, especially if mobile needs a swipeable carousel.
- Create new if: Create a new section if the design requires custom icons per block, images instead of SVG icons, vertical layout, alternating layouts, or more than three content fields per item.
- Requirements that exceed this section: Each selling point needs a unique custom icon upload instead of the shared icon-details.svg; Design requires images, badges, or media content beyond simple text and icon; Layout needs vertical stacking, alternating left/right alignment, or grid patterns beyond horizontal flow; Additional content fields needed like subheadings, buttons, prices, or multi-paragraph descriptions; Desktop also requires carousel/slider functionality; Different icon positions (left, top, bottom) or sizes per block

### selling-points (`sections/selling-points.liquid`)
- Role: Selling Points section
- Mockup keywords: icon-grid, feature-list, selling-points, benefits-grid, icon-row, feature-blocks, usp-section, value-props, icon-with-text, trust-badges
- Schema settings: 6 | Block types: 1
- Use when: When the mockup shows a grid or row of features/benefits with icons and text descriptions, typically for USPs or product advantages
- Create new if: When the design requires interactive elements, animations, links/CTAs per item, or complex layouts beyond icon-title-description blocks
- Requirements that exceed this section: Each selling point needs a button or link; Requires alternating layouts or card-style containers with borders/shadows; Needs background images per item instead of icons; Requires different icon sizes per block rather than section-wide setting; Needs slider/carousel functionality for mobile; Requires counters, stats, or dynamic data integration; Needs hover states with animations or content reveals

### shop-by-category-v2 (`sections/shop-by-category-v2.liquid`)
- Role: Shop By Category V2 section
- Mockup keywords: category-grid, image-card-grid, shop-by-category, category-tiles, image-link-cards, category-navigation, product-category-cards, clickable-image-grid
- Schema settings: 5 | Block types: 1
- Use when: When the mockup shows a grid of clickable image cards with titles and arrows, typically used for navigating to different product categories or collections.
- Create new if: When the design requires significantly different card layouts (e.g., overlay text instead of below-image text), video content, multiple images per card, or complex interactive elements beyond simple linking.
- Requirements that exceed this section: Cards need video backgrounds or animated content; Multiple images per card (e.g., hover state image swaps); Text overlay positioning on images rather than separate content area; Subcategory dropdowns or nested navigation within cards; Product count badges or dynamic metadata display; Filter or sort functionality integrated into the section; Carousel/slider behavior instead of static grid; Cards require multiple CTAs or button styles beyond the arrow icon

### shop-by-category (`sections/shop-by-category.liquid`)
- Role: Shop By Category section
- Mockup keywords: category-grid, collection-list, featured-image-sidebar, category-navigation, split-layout, image-with-list, category-browser, shop-by-collection, two-column-category, sidebar-navigation
- Schema settings: 8 | Block types: 1
- Use when: When the mockup shows a featured image on one side with a list of category/collection links on the other side, typically in a two-column split layout.
- Create new if: When the mockup requires multiple featured images displayed simultaneously, a grid of category cards with individual images per category, or carousel/slider functionality.
- Requirements that exceed this section: Multiple category images displayed in a grid or carousel format; Individual images shown for each category link rather than one featured image; Interactive filtering or search functionality within categories; Multi-column category list layout (3+ columns); Nested subcategory navigation or dropdown menus; Product counts or pricing displayed per category; Video or animated media instead of static image; Horizontal scrolling or swipeable category cards

### shop-categories (`sections/shop-categories.liquid`)
- Role: Shop Categories section
- Mockup keywords: collection-carousel, category-slider, horizontal-scroll-categories, shop-by-category, collection-grid-swiper, category-tiles, image-carousel, collection-showcase
- Schema settings: 5 | Block types: 1
- Use when: When the mockup shows a horizontal scrolling or swipeable row of collection/category cards with images and titles that link to collection pages
- Create new if: When the design requires vertical grid layout without carousel behavior, multiple rows of categories, filterable category navigation, or nested subcategories with dropdowns
- Requirements that exceed this section: Categories need to be displayed in a static multi-row grid instead of a carousel; Design includes product counts, pricing, or other metadata beyond image and title; Requires category filtering or search functionality; Needs nested/hierarchical category navigation with expandable subcategories; Design shows categories with multiple images or image galleries per category; Requires different layout patterns like masonry, bento-box, or asymmetric grid

### shop-the-look (`sections/shop-the-look.liquid`)
- Role: Shop The Look section
- Mockup keywords: shop-the-look, shoppable-image-slider, hotspot-carousel, product-pinpoints, lookbook-slider, interactive-image-gallery, tagged-product-slider, image-hotspot-swiper
- Schema settings: 10 | Block types: 1
- Use when: When the design shows a carousel/slider of lifestyle images with clickable hotspots or product pins that reveal product information overlays.
- Create new if: When the design requires a grid layout instead of a slider, video backgrounds, or fundamentally different hotspot interactions like full-screen product modals.
- Requirements that exceed this section: Grid layout instead of carousel/slider format; Video content with hotspots instead of static images; More than 3 hotspots per image (current limit is hotspot_1, hotspot_2, hotspot_3); Hotspots that link to collections or pages instead of products; Split-screen layout with permanent product list beside image; Vertical slider orientation; Multi-image hotspots (one pin showing multiple products); Zoom or lightbox functionality for the main image

### Faq-metaobjects (`sections/Faq-metaobjects.liquid`)
- Role: FAQ — Metaobjects section
- Mockup keywords: FAQ, accordion, collapsible, questions and answers, Q&A, help section, expandable content, plus minus icons, metaobject, support
- Schema settings: 6 | Block types: 0
- Use when: Use this section when the mockup shows an accordion-style FAQ with questions that expand to reveal answers, sourced from Shopify metaobjects.
- Create new if: Create a new section if the FAQ design requires tabs, search functionality, categories, side-by-side layout, or static (non-collapsible) content.
- Requirements that exceed this section: FAQ items need to be manually entered in section settings instead of metaobjects; Design shows FAQ in a grid or multi-column layout; Questions should be displayed with answers visible by default; FAQ needs filtering, search, or category navigation; Content should use rich text editor instead of plain text; Design requires card-based or boxed individual items; Animations or interactions differ from x-transition collapse


---

## Snippet Quick Reference

- **`component-article-card`** — Reusable component-article-card component (params: `article.url, article.image.src.width, article.image.width, article.image.height, article.author`)
- **`component-cart-discount`** — Reusable component-cart-discount component
- **`component-cart-drawer`** — Reusable component-cart-drawer component (params: `line_item.url, option.name, option.value, property.first, property.last`)
- **`component-cart-notification`** — Reusable component-cart-notification component (params: `color_scheme`)
- **`component-data-layer`** — Reusable component-data-layer component
- **`component-filters-drawer`** — Reusable component-filters-drawer component (params: `section_id, active_filters_count, f.label, f.param_name, v.param_name`)
- **`component-filters-horizontal`** — Reusable component-filters-horizontal component (params: `section.id, f.label, f.active_values.size, f.url_to_remove, v.param_name`)
- **`component-filters-price-range`** — Price display with sale/compare formatting (params: `filter.min_value.param_name, filter.max_value.param_name`)
- **`component-filters-sidebar`** — Reusable component-filters-sidebar component (params: `section.id, open, f.label, f.active_values.size, f.url_to_remove`)
- **`component-gtm-body`** — Reusable component-gtm-body component
- **`component-gtm-head`** — Reusable component-gtm-head component
- **`component-hotspot`** — Reusable component-hotspot component (params: `horizontal, vertical, index, text`)
- **`component-localization-form`** — Reusable component-localization-form component (params: `localization.country.name, localization.country.currency.iso_code, localization.country.currency.symbol, menu_color_scheme, country.iso_code`)
- **`component-nav-drawer`** — Reusable component-nav-drawer component (params: `menu_color_scheme`)
- **`component-nav-dropdown`** — Reusable component-nav-dropdown component (params: `nav_style, menu_color_scheme, childlink.url, grandchildlink.url, link.url`)
- **`component-nav-megamenu`** — Reusable component-nav-megamenu component (params: `menu_color_scheme, childlink.url, grandchildlink.url, link.url`)
- **`component-pagination`** — Page navigation controls (params: `anchor, part.url, part.title`)
- **`component-predictive-search`** — Search input component
- **`component-product-card`** — Reusable component-product-card component (params: `card_product.id, card_product.url, section_id, card_product.selected_or_first_available_variant.id, card_product.title`)
- **`component-product-media-gallery`** — Reusable component-product-media-gallery component (params: `gallery_classes, media_layout, mobile_media_layout, selected_variant.featured_media.id, section_id`)
- **`component-product-media-modal`** — Modal/dialog wrapper (params: `section_id, color_scheme`)
- **`component-product-media`** — Reusable component-product-media component
- **`component-product-price`** — Price display with sale/compare formatting (params: `price_class, money_price, product.selected_or_first_available_variant.unit_price_measurement.reference_value, product.selected_or_first_available_variant.unit_price_measurement.reference_unit`)
- **`component-product-share-button`** — Reusable component-product-share-button component (params: `block.shopify_attributes, block.id, section_id, share_link`)
- **`component-social-icons`** — SVG icon library (params: `class`)
- **`component-splash-screen-head`** — Reusable component-splash-screen-head component
- **`component-splash-screen`** — Reusable component-splash-screen component (params: `splash_hide_delay, splash_fade_duration`)
- **`css-variables`** — Reusable css-variables component (params: `scheme.id, scheme.settings.background.red, scheme.settings.background.green, scheme.settings.background.blue, scheme.settings.background_gradient`)
- **`meta-tags`** — Reusable meta-tags component (params: `og_url, og_type, page_image.width, page_image.height, page_title`)
