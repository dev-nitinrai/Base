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
  None found

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

### Forms
- **header** — Site navigation header

---

## Full Section Details

### 404 (`sections/404.liquid`)
- Role: 404 section
- Mockup keywords: 404 error page, page not found, centered message, error state, single CTA, centered layout, minimal error page, empty state
- Schema settings: 1 | Block types: 0
- Use when: Use this section when you need a standard 404 error page with centered text and a single call-to-action button to redirect users back to shopping.
- Create new if: Create a new section if the mockup requires multiple CTAs, search functionality, product recommendations, custom illustrations, multi-column layouts, or navigation elements beyond a single button.
- Requirements that exceed this section: Multiple call-to-action buttons with different destinations; Search bar or search suggestions; Product recommendations or featured collections; Custom image or illustration upload; Multiple text blocks or customizable content areas; Navigation links or sitemap display; Editable title and description text via settings; Layout variations (left-aligned, split-screen, etc.); Background image or video support; Social media links or contact information

### Faq (`sections/Faq.liquid`)
- Role: FAQ section
- Mockup keywords: faq-accordion, collapsible-faq, expandable-list, q-and-a, accordion-menu, help-section, frequently-asked-questions, toggle-content
- Schema settings: 5 | Block types: 1
- Use when: Use this section when the mockup shows a vertically stacked list of questions that expand/collapse to reveal answers with plus/minus icons.
- Create new if: Create a new section if the mockup requires multi-column FAQ layout, categorized/tabbed FAQs, search functionality, or alternative expand/collapse patterns like side-by-side or card-based layouts.
- Requirements that exceed this section: FAQ items need to be displayed in multiple columns or grid layout; Categories or tabs are needed to organize FAQ groups; Search or filter functionality is required; Questions and answers need to be displayed side-by-side instead of stacked; Card-based or boxed styling for each FAQ item is required; Icons or images need to accompany each question; Multiple FAQs need to be open simultaneously by default; Rich media (video, images) needs to be embedded within answers

### account (`sections/account.liquid`)
- Role: t:sections.main-account.name section
- Mockup keywords: customer-account-dashboard, order-history-table, account-overview, logged-in-portal, customer-profile, order-list, account-header, data-table, pagination-view, account-logout
- Schema settings: 4 | Block types: 0
- Use when: When the mockup shows a customer account dashboard with order history table and logout functionality for logged-in users.
- Create new if: When the mockup requires additional account features like address management, saved payment methods, wishlists, or a completely different layout beyond order history.
- Requirements that exceed this section: Displaying customer addresses or address management UI; Showing saved payment methods or wallet features; Including wishlist or favorites display; Requiring customer profile edit forms within the section; Needing order filtering, sorting, or search functionality; Displaying loyalty points, rewards, or subscription management; Using cards or grid layout instead of table format for orders; Including customer analytics or spending insights

### activate-account (`sections/activate-account.liquid`)
- Role: t:sections.main-activate-account.name section
- Mockup keywords: account activation form, password setup, two-field form, customer onboarding, dual password input, centered form layout, account confirmation, customer authentication
- Schema settings: 3 | Block types: 0
- Use when: When a design mockup shows a customer account activation page with password creation and confirmation fields
- Create new if: When the activation flow requires additional fields beyond password/confirmation, multi-step onboarding, social login options, or custom validation UI
- Requirements that exceed this section: Additional input fields required (email, phone, profile info); Multi-step wizard or progress indicator needed; Social authentication buttons required; Custom password strength meter or validation UI; Terms and conditions checkbox or legal agreements; Welcome message with dynamic personalization; Inline help text or password requirements display; Different layout structure (side-by-side, card-based)

### addresses (`sections/addresses.liquid`)
- Role: t:sections.main-addresses.name section
- Mockup keywords: customer-address-book, address-manager, account-addresses, address-form, paginated-address-list, add-new-address, customer-account-section
- Schema settings: 3 | Block types: 0
- Use when: When displaying a customer's saved addresses with add/edit functionality in their account area.
- Create new if: If the mockup requires a different address layout (cards/grid vs list), embedded map integration, or address validation UI beyond standard form fields.
- Requirements that exceed this section: Address display needs card-based or grid layout instead of simple list; Requires real-time address validation or autocomplete with visual feedback; Needs integrated map view showing address locations; Requires different pagination count than 5 addresses per page; Mockup shows address import/export functionality; Needs address tagging or categorization (home/work/billing); Requires inline editing without expandable forms

### animated-features-v2 (`sections/animated-features-v2.liquid`)
- Role: Animated Features V2 section
- Mockup keywords: animated-percentage, split-layout, image-with-stats, feature-checklist, counter-animation, hero-with-features, percentage-hero, animated-number, image-text-split, stat-highlight
- Schema settings: 20 | Block types: 0
- Use when: When the mockup shows a large animated percentage or stat on one side with an image and bulleted feature list, typically for conversion or social proof messaging.
- Create new if: When the design requires multiple statistics/numbers side-by-side, carousel functionality, video instead of static image, or more than 4 feature points.
- Requirements that exceed this section: Multiple animated statistics or counters displayed simultaneously; More than 4 feature bullet points needed; Video or animated media instead of static image; Grid or multi-column layout instead of single split; Interactive elements like tabs or toggles for features; Progress bars or charts alongside the percentage; Background video or parallax effects; Multiple images in gallery or slideshow format

### animated-features (`sections/animated-features.liquid`)
- Role: Animated Features section
- Mockup keywords: feature-grid, animated-cards, flip-cards, split-layout, icon-grid, 2-column-features, interactive-cards, 4-card-grid, feature-showcase, animated-icons
- Schema settings: 30 | Block types: 0
- Use when: When the design shows a split layout with heading/CTA on the left and a 2x2 grid of interactive flip cards with icons and images on the right, especially with animation requirements.
- Create new if: When the design requires a different grid layout (not 2x2), non-flip card interactions, more than 4 features, or different content structure beyond image/label/flipped-text per card.
- Requirements that exceed this section: More or fewer than 4 feature cards needed; Grid layout other than 2x2 (e.g., 3-column, single row, 3x3); Card interaction other than flip animation (e.g., slide, expand, modal); Multiple images or complex content per card beyond single image and two text fields; No split layout or full-width card grid without left sidebar; Video content instead of static images; Cards need individual CTA buttons or links; Dynamic/collection-based cards rather than fixed 4 cards

### announcement-bar (`sections/announcement-bar.liquid`)
- Role: Top-of-page announcement strip
- Mockup keywords: announcement-bar, top-bar, promo-banner, rotating-messages, alert-strip, notification-bar, carousel-banner, ticker-bar, header-announcement, auto-rotating-banner
- Schema settings: 4 | Block types: 1
- Use when: When mockup shows a thin horizontal bar at the top of the page with rotating promotional messages, optional links, and navigation arrows.
- Create new if: When mockup requires multiple simultaneous announcements displayed side-by-side, vertical stacking, complex animations beyond fade-in, or embedded media like images/videos.
- Requirements that exceed this section: Multiple announcement bars stacked vertically with different styling; Announcements with embedded images, icons (beyond emoji), or video content; Countdown timer integration or dynamic personalization per message; Horizontal scrolling ticker-tape animation instead of discrete rotation; User dismissible/closeable functionality with cookie persistence; Split layout with different content on left/right sides; Social media feed integration or live data updates

### article (`sections/article.liquid`)
- Role: t:sections.main-article.name section
- Mockup keywords: blog-post-detail, article-layout, featured-image-hero, post-header, article-content, back-navigation, blog-single, post-template, editorial-layout, longform-content
- Schema settings: 4 | Block types: 5
- Use when: When a design mockup shows a single blog post or article page with a featured image, title, metadata, and body content with standard text formatting.
- Create new if: When the design requires multi-column article layouts, inline product embeds, table of contents navigation, author bio cards, related posts grids, or complex media galleries within the article body.
- Requirements that exceed this section: Article needs sidebar navigation or table of contents; Design shows multiple column text layout; Requires embedded product cards or shopping features within content; Needs author biography section with custom layout; Related articles shown in grid or carousel format; Comments section with custom design; Progress bar or reading time indicator; Sticky social sharing sidebar; Article series navigation or chapter selection

### blog (`sections/blog.liquid`)
- Role: t:sections.main-blog.name section
- Mockup keywords: blog-grid, article-list, blog-archive, post-feed, blog-index, collage-layout, pagination, multi-column-blog
- Schema settings: 9 | Block types: 0
- Use when: When the mockup shows a main blog landing page displaying a paginated grid or collage of blog article cards with featured images, dates, authors, and excerpts.
- Create new if: When the mockup requires filtering by tags/categories, featured articles section, sidebar navigation, search functionality, or custom article card layouts beyond the standard component-article-card.
- Requirements that exceed this section: Blog filtering or search functionality needed; Multiple layout columns (more than 2-column collage/grid options); Featured or pinned articles at the top; Sidebar with categories, tags, or recent posts; Custom article card design that can't be modified via component-article-card; Load more or infinite scroll instead of pagination; Blog tag navigation or category filters; Different number of articles per page than 6

### blogs (`sections/blogs.liquid`)
- Role: Blogs section
- Mockup keywords: blog-grid, article-cards, blog-preview, content-cards, blog-feed, article-list, post-grid, blog-section, editorial-grid, content-showcase
- Schema settings: 9 | Block types: 1
- Use when: Use this section when the design shows a grid of blog articles/posts with images, titles, descriptions, and an optional section heading with navigation link.
- Create new if: Create a new section if the design requires filtering, categories, pagination, date displays, author information, read-time indicators, or non-grid layouts like carousels or masonry.
- Requirements that exceed this section: Blog filtering by category or tags; Pagination or load-more functionality; Date, author, or read-time metadata display; Carousel or slider layout instead of grid; Masonry or asymmetric grid layout; Multiple blog feeds from different sources; Comment counts or social sharing buttons; Featured/sticky posts with different styling

### brand-story-v2 (`sections/brand-story-v2.liquid`)
- Role: Brand Story V2 section
- Mockup keywords: accordion-with-image, interactive-accordion, split-layout-accordion, brand-story-tabs, collapsible-content-image, image-switcher-accordion, left-text-right-image, multi-panel-story, expandable-content-sidebar
- Schema settings: 4 | Block types: 1
- Use when: When the mockup shows an interactive accordion or collapsible list on the left that changes a corresponding image on the right side as users click through items
- Create new if: When the mockup requires video media, multiple images per item, grid layouts, horizontal tabs instead of vertical accordion, or content positioning other than left-text-right-image split
- Requirements that exceed this section: Video or mixed media types needed per accordion item; Multiple images or image galleries per expandable section; Horizontal tab navigation instead of vertical accordion; Image-left text-right layout instead of text-left image-right; Grid or multi-column arrangement of content items; Nested accordions or multi-level expansion; Automatic slideshow/rotation without user interaction; CTA buttons or product links within each accordion item

### brand-story (`sections/brand-story.liquid`)
- Role: Brand Story section
- Mockup keywords: brand-story, before-after-images, image-comparison, side-by-side-images, labeled-images, split-content, two-column-layout, image-with-labels, comparison-box, storytelling-section
- Schema settings: 13 | Block types: 0
- Use when: Use this section when a design mockup shows two labeled images side-by-side (typically for before/after, comparison, or contrasting visuals) with content/text on the opposite side.
- Create new if: Create a new section if the mockup requires more than two comparison images, interactive slider/drag functionality, or a fundamentally different layout like stacked images or grid arrangements.
- Requirements that exceed this section: More than two images in the comparison; Interactive before/after slider with drag functionality; Video comparison instead of static images; Vertical stacking layout instead of horizontal side-by-side; Multiple comparison sets in one section; Animated transitions between comparison states; Image comparison requiring overlay/fade effects

### cart (`sections/cart.liquid`)
- Role: t:sections.main-cart-items.name section
- Mockup keywords: cart-page, shopping-cart, line-items-list, cart-summary, quantity-selector, remove-item, cart-item-details, product-variants-cart, cart-properties
- Schema settings: 4 | Block types: 0
- Use when: When the mockup shows a standard cart page with line items, product images, quantity controls, variant details, and item properties.
- Create new if: When the mockup requires a significantly different cart layout (side-drawer cart, mini-cart popup, multi-step checkout cart) or custom cart item grouping/bundling UI.
- Requirements that exceed this section: Cart items need to be displayed in a grid or card-based layout instead of list format; Requires upsell or cross-sell product recommendations embedded within cart items; Needs cart item grouping by vendor, collection, or subscription type; Requires progress bar for free shipping threshold or tiered rewards; Needs gift wrapping options or add-on selections per line item; Requires ajax drawer/slide-out cart instead of full page; Needs multi-column cart layout with sticky sidebar summary

### collection (`sections/collection.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: collection-grid, product-grid, filterable-products, sidebar-filters, horizontal-filters, collection-page, paginated-products, multi-column-grid, collection-hero
- Schema settings: 27 | Block types: 0
- Use when: When the mockup shows a collection or product listing page with filtering options, product grid layout, and pagination.
- Create new if: When the mockup requires a completely different product display pattern like masonry layout, list view with large images, or custom interactive filtering beyond vertical/horizontal sidebars.
- Requirements that exceed this section: Masonry or non-grid product layouts required; Custom filter UI beyond vertical/horizontal sidebar options; Split-screen fixed product preview on scroll; Infinite scroll instead of pagination; Mixed content types (products interspersed with editorial content blocks); Multiple collection grids on same page; Advanced filtering like visual swatch filters, range sliders, or map-based filtering

### collections (`sections/collections.liquid`)
- Role: t:general.collections_grid section
- Mockup keywords: collections-grid, category-grid, 3-column-grid, collection-list, product-category-tiles, image-grid-with-text, collections-overview, category-cards
- Schema settings: 5 | Block types: 0
- Use when: When mockup shows a grid of collection/category cards with images, titles, descriptions, and links arranged in a uniform multi-column layout
- Create new if: When mockup requires individual collection blocks with custom content per item, slider/carousel functionality, or varied card layouts that aren't uniform grid cells
- Requirements that exceed this section: Individual collection blocks need to be manually added/removed in theme editor rather than auto-populated from all collections; Each collection card needs unique custom fields beyond title, image, description, and URL; Layout requires carousel/slider functionality instead of static grid; Cards need different sizes, layouts, or styling per collection (featured collections vs regular); Requires filtering, sorting, or pagination controls; Needs more than 2 responsive breakpoint layouts (currently only desktop 3-col and mobile 2-col); Individual collection cards need overlay text positioning, custom buttons, or product counts

### custom-section (`sections/custom-section.liquid`)
- Role: t:general.custom_section section
- Mockup keywords: full-width-container, background-image-section, content-grid, flexible-layout, custom-container, centered-content, generic-wrapper, theme-block-holder
- Schema settings: 1 | Block types: 1
- Use when: Use this section when the mockup shows a flexible container with optional background image that can hold any combination of theme blocks in a centered content grid layout.
- Create new if: Create a new section when the mockup requires a specific fixed structure, custom block types with unique settings, non-grid layouts (like flexbox rows), or predefined content areas beyond generic theme blocks.
- Requirements that exceed this section: Mockup requires specific named block types with custom settings schemas; Layout needs non-grid structure (multi-column flex, asymmetric positioning, overlapping elements); Section needs multiple distinct content areas with different grid behaviors; Requires animation, parallax, or interactive JavaScript features; Background needs video, gradient overlays, or complex styling beyond single image; Content grid pattern differs from standard centered column layout; Section requires conditional logic or complex relationships between blocks

### dynamic-grid (`sections/dynamic-grid.liquid`)
- Role: Custom section
- Mockup keywords: dynamic-grid, flexible-grid, content-grid, modular-grid, custom-grid, adaptive-layout, multi-column-grid, configurable-blocks, grid-system, responsive-grid
- Schema settings: 0 | Block types: 0
- Use when: Use when a mockup shows a grid-based layout with customizable title, description, button, and content alignment that needs to adapt across breakpoints.
- Create new if: Create new section if mockup requires fixed grid patterns (like always 3-column product grids), specific block types (testimonials, images with overlays), or complex nested layouts that can't be controlled through alignment and typography settings alone.
- Requirements that exceed this section: Grid requires specific block types like image cards, product tiles, testimonial blocks, or icon features; Mockup shows fixed column counts or aspect ratios that differ from this section's grid logic; Design needs per-item styling controls (individual block colors, borders, shadows); Layout requires asymmetric grid patterns or masonry-style arrangements; Content includes interactive elements beyond a single section-level button; Needs image/video backgrounds or overlay text on grid items; Requires filtering, sorting, or dynamic content loading functionality

### featured-collections-v2 (`sections/featured-collections-v2.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: tabbed-collections, product-carousel, multi-collection-tabs, swipeable-product-grid, collection-switcher, horizontal-scrolling-products, featured-collections-tabs, product-slider
- Schema settings: 18 | Block types: 1
- Use when: When the mockup shows multiple collections displayed in a tabbed interface where each tab reveals a carousel/slider of products from that collection.
- Create new if: When the mockup requires a fundamentally different layout like vertical stacking of collections, grid-only display without swiping, or integrated filtering/sorting controls within tabs.
- Requirements that exceed this section: Collections need to display in a non-tabbed format (accordion, dropdown, or side navigation); Product cards require a completely custom layout not supported by component-product-card.js; Multiple collections need to display simultaneously on screen without tab switching; Requires filtering or sorting functionality within each collection tab; Needs pagination instead of carousel/swiper navigation; Tab interaction needs to trigger other page elements or animations outside the section

### featured-collections (`sections/featured-collections.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: collection grid, category grid, featured collections, collection cards, image grid with titles, shop by collection, collection showcase, multi-column collections
- Schema settings: 7 | Block types: 1
- Use when: When mockup shows a grid of clickable collection/category cards with images and titles, optionally with heading/subheading above
- Create new if: When mockup requires product grids, unique card layouts with complex content beyond image+title, or interactive filtering/sorting functionality
- Requirements that exceed this section: Cards need multiple images, product counts, pricing, or complex metadata display; Layout requires masonry/asymmetric grid or carousel/slider functionality; Needs dynamic filtering, search, or tag-based collection selection; Requires hover states with significant content overlays beyond basic link behavior; Demands video backgrounds or parallax effects on collection cards; Collection cards need CTAs with different destinations than the collection URL

### featured-products (`sections/featured-products.liquid`)
- Role: Single product showcase with form
- Mockup keywords: featured-products, product-carousel, product-slider, swiper-gallery, product-showcase, curated-products, product-grid-slider, horizontal-scroll-products
- Schema settings: 11 | Block types: 1
- Use when: When mockup shows a curated set of individual products with heading, optional subheading, and horizontal carousel/slider navigation arrows.
- Create new if: When mockup requires automatic collection fetching, filtering logic, or non-carousel layouts like static grids or masonry.
- Requirements that exceed this section: Products need to be dynamically pulled from a collection instead of manually selected; Layout requires a static grid without carousel/swiper functionality; Design needs product filtering, sorting, or pagination controls; Mockup shows tabbed product categories or multi-collection display; Requires product quick-view modals or comparison features; Design needs masonry or asymmetric product layouts

### footer (`sections/footer.liquid`)
- Role: Site footer with links and info
- Mockup keywords: footer, multi-column footer, footer links, social icons, brand information, footer menu, site footer, bottom navigation, footer widget areas
- Schema settings: 11 | Block types: 4
- Use when: When a design mockup shows a site-wide footer with any combination of text blocks, link menus, social icons, or brand information arranged in columns.
- Create new if: When the footer requires unique layouts like inline newsletter signup forms, complex multi-row structures, payment icons, trust badges, or footer-specific announcement bars not supported by the existing block types.
- Requirements that exceed this section: Footer requires newsletter subscription form with custom styling; Design shows payment method icons or trust badges; Footer needs location/contact information in structured format; Layout requires horizontal/inline arrangement instead of grid blocks; Footer includes accordion/collapsible menus for mobile; Design shows footer-specific announcement or promo bar; Requires image galleries or product showcases in footer; Needs customer service chat widget integration

### header (`sections/header.liquid`)
- Role: Site navigation header
- Mockup keywords: header, navigation bar, sticky header, top nav, logo header, main menu, site navigation, cart icon, account icon, menu bar
- Schema settings: 22 | Block types: 1
- Use when: When the mockup shows a top navigation bar with logo, menu links, and utility icons (cart/account) in various layout configurations.
- Create new if: When the mockup requires a completely different header structure like a sidebar navigation, mega menu with complex multi-column dropdowns, or header with integrated search bar and promotional banner.
- Requirements that exceed this section: Mega menu with product previews, images, or multi-level nested dropdowns beyond simple link lists; Header with integrated promotional announcement bar as part of the same component; Vertical sidebar navigation instead of horizontal top bar; Header with inline search bar as primary element rather than icon; Multi-row header with distinct top and bottom sections containing different content types; Header requiring custom icon sets or social media links beyond cart and account

### hello-world (`sections/hello-world.liquid`)
- Role: Hello World section
- Mockup keywords: hero-with-icon, feature-grid, three-column-features, icon-illustration-hero, informational-section, educational-landing, intro-content-cards, welcome-section, documentation-layout, split-hero-content
- Schema settings: 4 | Block types: 0
- Use when: Use this for educational landing pages with a hero message and a grid of 3 feature/informational cards with external links.
- Create new if: Create new section if you need customizable content (headings, descriptions, links), image uploads, varied column counts, blocks for dynamic cards, or image positioning controls.
- Requirements that exceed this section: Content needs to be editable via theme editor (currently all hardcoded); Number of highlight cards needs to vary (2, 4, or responsive column counts); Each card needs unique icons or images uploadable by merchant; Links should be internal navigation rather than external documentation; Hero illustration needs to be merchant-customizable or positioned differently; Layout needs to support single-column mobile stacking with custom breakpoints; Requires block-based architecture for adding/removing/reordering cards; Needs button CTAs instead of text links; Requires background images or overlay options

### hero-v2 (`sections/hero-v2.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero, split-layout, hero-with-image, text-image-split, video-background-hero, content-media-section, banner-v2, left-right-layout, hero-banner
- Schema settings: 19 | Block types: 1
- Use when: When the mockup shows a prominent hero/banner section with text content (heading, description, button) alongside an image or video background in a split or overlapping layout.
- Create new if: When the mockup requires multiple images/media in a carousel, complex multi-column layouts, or interactive elements beyond a single CTA button.
- Requirements that exceed this section: Multiple media items in a slideshow or carousel; More than one CTA button with different actions; Form inputs or interactive elements beyond a link button; Grid-based content layout with 3+ columns; Testimonials, reviews, or user-generated content blocks; Integrated countdown timer or dynamic pricing display; Side-by-side comparison or before/after slider

### hero (`sections/hero.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero, banner, hero-banner, video-background, image-background, full-width-hero, headline-cta, overlay-hero, endorsement-block, signature-banner
- Schema settings: 22 | Block types: 0
- Use when: Use for full-width top-of-page hero banners with a single background (image or video), heading, subheading, CTA button, and optional endorsement signature block.
- Create new if: Create new if mockup requires multiple CTAs, side-by-side images, split-screen layouts, slideshow/carousel functionality, multiple content blocks, or complex grid-based hero arrangements.
- Requirements that exceed this section: Multiple call-to-action buttons with different styles or destinations; Split-screen or side-by-side image/content layout; Slideshow or carousel of multiple hero slides; Form embedded directly in hero (newsletter, quiz, search); Multiple endorsements or testimonial blocks in a grid; Product picker or collection selector within hero; Parallax scrolling effects on multiple layers; Animated text sequences or typewriter effects; Hero with tabbed content sections

### link-readme (`sections/link-readme.liquid`)
- Role: Link Readme section
- Mockup keywords: call-to-action, cta-button, single-button, action-link, centered-button, readme-link, simple-cta, standalone-button
- Schema settings: 7 | Block types: 0
- Use when: When the mockup shows a simple, centered call-to-action button within its own section with configurable padding and color scheme.
- Create new if: When the mockup requires multiple buttons, additional text content, icons, images, or a more complex layout than a single centered button.
- Requirements that exceed this section: Multiple buttons or links are needed in the same section; Heading, subheading, or descriptive text is required alongside the button; Icon or image needs to accompany the button; Button needs different styling options beyond the standard button class; Layout requires non-centered alignment or multi-column arrangement; Additional interactive elements like forms or modals are needed

### login (`sections/login.liquid`)
- Role: t:sections.main-login.name section
- Mockup keywords: login-form, password-recovery, customer-authentication, email-input-fields, two-column-form-layout, shop-login-button, form-error-messages, account-access
- Schema settings: 5 | Block types: 0
- Use when: When you need a customer login page with password recovery functionality and optional Shop Pay login integration.
- Create new if: If the mockup requires multi-step authentication, social login options beyond Shop Pay, registration form on same page, or split-screen layout with imagery.
- Requirements that exceed this section: Login and registration forms need to appear side-by-side or in tabs; Social login providers beyond Shop Pay are required (Google, Facebook, etc.); Custom authentication flows like OTP or magic links are needed; Background images, hero imagery, or split-screen layouts are part of the design; Additional content blocks like testimonials or marketing copy need to be interspersed; Multi-step or progressive disclosure patterns for authentication

### logos (`sections/logos.liquid`)
- Role: Logos section
- Mockup keywords: logo-carousel, logo-slider, brand-logos, partner-logos, trust-bar, logo-marquee, client-logos, infinite-scroll-logos, logo-ticker, brand-strip
- Schema settings: 9 | Block types: 1
- Use when: When the mockup shows a horizontal row or scrolling strip of brand/partner logos, typically used for social proof or showcasing clients/partners.
- Create new if: When the mockup requires logos in a static grid layout, multi-row arrangement, logos with links/CTAs, or logos paired with testimonials/descriptions.
- Requirements that exceed this section: Logos need clickable links to external partner sites; Each logo requires accompanying text, descriptions, or captions; Layout is a static grid (2x3, 3x4, etc.) rather than a horizontal scrolling track; Logos need hover effects that reveal additional content; Multi-row layout is required; Individual logo filtering or categorization is needed; Logos should appear in a masonry or varied-size layout

### order (`sections/order.liquid`)
- Role: t:sections.main-order.name section
- Mockup keywords: order-details-table, customer-account-order, transaction-history, order-summary-page, purchase-details, order-line-items, account-portal, order-status-table
- Schema settings: 3 | Block types: 0
- Use when: When displaying detailed order information for logged-in customers viewing a specific past order including line items, SKUs, prices, quantities, and order metadata.
- Create new if: When the design requires a dashboard-style order listing, multi-order comparison, order tracking timeline, or significantly different layout beyond a table structure.
- Requirements that exceed this section: Order listing/grid view instead of single order details; Visual order tracking timeline or shipment map; Reorder functionality with bulk product selection; Invoice download or print-optimized layout; Custom order filtering or search interface; Side-by-side order comparison view; Integrated returns/exchange workflow UI

### page (`sections/page.liquid`)
- Role: t:sections.main-page.name section
- Mockup keywords: basic page, static content, single column text, centered content, page title, text page, simple layout, rich text page, content page
- Schema settings: 5 | Block types: 0
- Use when: Use this section for basic static pages with a title and body content in a single centered column with configurable width and padding.
- Create new if: Create a new section when the mockup requires multiple columns, media elements, custom blocks, interactive components, or any layout beyond a simple title and text content area.
- Requirements that exceed this section: Multiple columns or grid layouts are needed; Images, videos, or other media need to be embedded outside of the rich text editor; Repeatable blocks or dynamic content sections are required; Side-by-side content arrangements; Custom form elements or interactive components; Background images or overlays; Asymmetric or complex layouts; Tabbed or accordion content structures

### password (`sections/password.liquid`)
- Role: Password Page section
- Mockup keywords: password-gate, coming-soon, centered-form, login-splash, brand-intro, unlock-page, pre-launch, access-control, storefront-lock, email-capture
- Schema settings: 7 | Block types: 0
- Use when: When a mockup shows a centered password/access gate page with logo, heading, message, and single password input field before store launch or for exclusive access.
- Create new if: When the mockup requires multi-step authentication, social login, email signup forms, countdown timers, background video, or complex layout with multiple columns/sections.
- Requirements that exceed this section: Multiple form fields beyond password (email capture, name, phone); Social media login buttons or OAuth integration; Countdown timer to launch date; Video or animated background instead of gradient; Side-by-side split layout with imagery; Newsletter signup separate from password entry; Multi-step wizard or progressive disclosure; Gallery or carousel of product teasers; Social media feed or testimonials; Age verification or terms acceptance checkboxes

### pickup-availability (`sections/pickup-availability.liquid`)
- Role: Custom section
- Mockup keywords: pickup-availability, store-locator, in-store-pickup, location-drawer, availability-list, modal-overlay, nearest-store, bopis, click-and-collect
- Schema settings: 0 | Block types: 0
- Use when: When a mockup shows product availability at physical store locations with a toggle/drawer to view multiple pickup points
- Create new if: When the design requires appointment booking, map integration, distance calculation, inventory counts, or non-product pickup scenarios
- Requirements that exceed this section: Interactive map view of store locations; Real-time inventory quantities displayed per location; Distance/radius filtering from user's location; Appointment or time-slot booking functionality; Multi-product pickup bundling; Location comparison or favoriting features; Non-product content (events, services, appointments); Embedded store hours or amenities beyond basic pickup info

### predictive-results (`sections/predictive-results.liquid`)
- Role: Custom section
- Mockup keywords: predictive-search, autocomplete-dropdown, search-suggestions, live-search-results, typeahead-search, search-overlay, instant-search, search-flyout, ajax-search-results, search-preview
- Schema settings: 0 | Block types: 0
- Use when: When a mockup shows live search results appearing as users type, displaying categorized suggestions (queries, collections, pages, articles, products) in a dropdown or overlay format.
- Create new if: When the mockup requires a fundamentally different search UI pattern like a full-page search experience, faceted filtering interface, or search results that need pagination and advanced sorting options.
- Requirements that exceed this section: Search results need grid/card layouts instead of list-based display; Product results require variant selection, add-to-cart functionality, or quick-view modals; Search needs filtering by price, availability, tags, or custom metafields; Design requires image galleries or multiple images per product result; Search should show more than basic product info (reviews, ratings, stock levels); Results need pagination or infinite scroll instead of limited preview; Custom resource types beyond products, articles, pages, collections, and queries; Advanced typography or layout customization per result type

### product-details (`sections/product-details.liquid`)
- Role: Product Details section
- Mockup keywords: accordion, collapsible-details, product-specs, tabbed-content, expandable-panels, faq-accordion, content-tabs, image-text-accordion, two-column-accordion, product-information
- Schema settings: 5 | Block types: 1
- Use when: When a mockup shows collapsible/expandable content blocks with titles, text content, and optional accompanying images in an accordion pattern.
- Create new if: When the design requires non-accordion layouts (always-visible content, true tabs with navigation, grid layouts) or interactive elements beyond simple expand/collapse.
- Requirements that exceed this section: Content must be displayed in true tabs with tab navigation instead of accordion; Multiple detail blocks need to be open simultaneously; Requires video or interactive media instead of static images; Needs dynamic content from product metafields or structured data; Design shows side-by-side layout instead of stacked accordion; Requires more than 2 images per block or image galleries; Needs filterable or searchable content blocks

### product-highlights (`sections/product-highlights.liquid`)
- Role: Product Highlights section
- Mockup keywords: product-features, icon-list, split-layout, image-text, feature-highlights, benefits-section, two-column-features, icon-with-text
- Schema settings: 9 | Block types: 1
- Use when: When a mockup shows product features or benefits listed with icons alongside a single supporting image in a two-column layout.
- Create new if: When the design requires multiple images, alternating layouts, video support, carousel functionality, or features arranged in a grid rather than a vertical list.
- Requirements that exceed this section: Multiple product images or image gallery needed; Features must be displayed in a multi-column grid layout; Video or animated media support required; Alternating image/text positions per feature; Interactive elements like tabs or accordions for features; Integration with product metafields or dynamic product data; Carousel or slider functionality for features; Features require links/buttons to different pages

### product (`sections/product.liquid`)
- Role: t:sections.main-product.name section
- Mockup keywords: product-detail-page, pdp-layout, split-product-layout, product-media-gallery, buy-box, variant-selector, complementary-products, product-info-sidebar
- Schema settings: 18 | Block types: 15
- Use when: When the mockup shows a standard product detail page with media gallery on one side and product information (title, price, variants, add-to-cart) on the other
- Create new if: When the mockup requires a completely custom product layout like interactive 3D configurators, split-screen comparison views, or non-standard media arrangements that don't follow left/right gallery-info patterns
- Requirements that exceed this section: Custom interactive product builders or configurators beyond standard variant selection; Multiple products displayed simultaneously in comparison layout; Non-standard media arrangements like floating overlays, full-bleed backgrounds, or mosaic grids; Embedded AR/VR experiences beyond Shopify's native 3D model support; Custom bundling UI with multiple independent add-to-cart flows; Split-screen or parallax scroll effects between media and content

### promo-banner (`sections/promo-banner.liquid`)
- Role: Banner image with text overlay
- Mockup keywords: promo-banner, product-banner, split-layout, two-column-product, featured-product-banner, image-text-promo, cta-banner, product-highlight, asymmetric-layout, promotional-card
- Schema settings: 13 | Block types: 0
- Use when: Use this section when the mockup shows a promotional banner with a product image on one side and product details (title, description, price, CTA button) on the other side in a two-column layout.
- Create new if: Create a new section if the mockup requires multiple products in the banner, video backgrounds, overlay text on the image, or complex multi-block content like testimonials or selling points integrated into the layout.
- Requirements that exceed this section: Multiple products or product comparisons in one banner; Video or animated backgrounds instead of static images; Text overlay directly on the product image; Icon/feature list or selling points blocks integrated into the banner; Multiple CTAs or form inputs (email capture, variant selectors); Carousel or slideshow functionality for multiple banners; Product variant selector or add-to-cart functionality; Complex grid layouts (3+ columns or asymmetric arrangements)

### register (`sections/register.liquid`)
- Role: t:sections.main-register.name section
- Mockup keywords: customer registration form, sign-up form, account creation, user registration, vertical form layout, input fields with floating labels, form validation, error messaging, customer account form
- Schema settings: 3 | Block types: 0
- Use when: Use this section when implementing a standard customer account registration page with first name, last name, email, and password fields with built-in validation and error handling.
- Create new if: Create a new section if the registration requires additional custom fields, multi-step registration flow, social login options, different layout (horizontal/multi-column), or integration with third-party registration systems.
- Requirements that exceed this section: Custom fields beyond first name, last name, email, password are required; Multi-step or wizard-style registration flow is needed; Social login buttons (Google, Facebook, Apple) must be integrated; Side-by-side layout with promotional content or imagery is required; Terms and conditions checkbox or newsletter opt-in is mandatory; Third-party authentication or SSO integration is needed; Different visual treatment beyond padding customization is specified

### related-products (`sections/related-products.liquid`)
- Role: Related products section
- Mockup keywords: related-products, product-recommendations, product-carousel, product-grid, you-may-also-like, product-slider, recommended-products, cross-sell, upsell-products, similar-products
- Schema settings: 22 | Block types: 0
- Use when: When the mockup shows a product recommendation section below product details with either a grid or carousel layout of product cards.
- Create new if: When the mockup requires custom recommendation logic beyond Shopify's algorithm, manual product selection, or completely custom card layouts with non-standard product information.
- Requirements that exceed this section: Custom filtering or sorting logic for recommendations; Manual product selection instead of algorithmic recommendations; Integration with third-party recommendation engines; Custom product card layouts requiring additional metadata or custom fields; Mixed content types (products + blog posts + collections); Tabbed interfaces showing different recommendation types; Comparison tables or side-by-side product features; Non-product page contexts requiring different data sources

### reset-password (`sections/reset-password.liquid`)
- Role: t:sections.main-reset-password.name section
- Mockup keywords: password reset form, two-field form, customer authentication, password confirmation, centered form layout, error message display, simple form container, account security
- Schema settings: 3 | Block types: 0
- Use when: When the design shows a password reset page with two password fields (new password and confirmation) with error handling and submit button
- Create new if: When the design requires additional fields beyond password/confirmation, alternative layouts (split-screen, multi-step), social login options, or significantly different form structures
- Requirements that exceed this section: Additional form fields beyond password and password confirmation are needed; Multi-step password reset flow is required; Side-by-side layout with imagery or promotional content; Integration with third-party authentication providers; Password strength indicator or custom validation UI; Alternative form layouts that aren't single-column centered

### search (`sections/search.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: search-results-grid, product-search-page, filtered-product-grid, search-with-filters, product-listing, sortable-grid, paginated-results, quick-add-grid, vertical-horizontal-filters, multi-column-grid
- Schema settings: 31 | Block types: 0
- Use when: When the mockup shows a search results page with product grid, optional filtering (vertical or horizontal), sorting, and pagination.
- Create new if: If the mockup requires a non-product search layout (articles, pages, mixed content types) or a completely different visual structure beyond grid display.
- Requirements that exceed this section: Search results need to display content types other than products (blog posts, pages, collections); Layout requires masonry, list view, or non-grid arrangements; Needs inline filtering without page reload beyond quick-add functionality; Requires search autocomplete/suggestions as primary interface rather than results grid; Custom card designs that can't be achieved through product-card component modification

### selling-points-v2 (`sections/selling-points-v2.liquid`)
- Role: Selling Points V2 section
- Mockup keywords: selling-points, feature-grid, icon-cards, benefit-tiles, value-props, service-highlights, feature-carousel, mobile-slider, clickable-cards, icon-grid
- Schema settings: 6 | Block types: 1
- Use when: When the mockup shows a grid or carousel of text-based selling points/features with optional links and icons, especially if mobile slider functionality is needed
- Create new if: When the mockup requires custom icons per block, images, different layouts beyond grid/slider, or complex content beyond title and description
- Requirements that exceed this section: Custom or different icons per selling point block; Images or media content within each selling point; More than two text fields per block (currently title + description); Complex layouts like alternating orientations or multi-column text; Button CTAs instead of card-level links; Background images or overlays per item; Custom icon upload capability; Video or animated content; Non-grid layouts like staggered or masonry

### selling-points (`sections/selling-points.liquid`)
- Role: Selling Points section
- Mockup keywords: icon-row, feature-grid, selling-points, icon-with-text, benefits-list, features-grid, icon-columns, trust-badges, value-props
- Schema settings: 6 | Block types: 1
- Use when: When mockup shows a grid of items with icons/images paired with titles and descriptions (common for features, benefits, or trust indicators)
- Create new if: When mockup requires links/buttons on each item, different layouts per breakpoint, alternating image positions, or animations beyond simple display
- Requirements that exceed this section: Individual items need CTAs or clickable links; Layout requires asymmetric or masonry grid patterns; Items need hover states with content reveals; Design includes progress bars, ratings, or interactive elements; Icons need to be SVG code rather than uploaded images; Content needs to be pulled from metafields or dynamic sources; Mobile layout requires carousel/slider instead of stacked grid

### shop-by-category-v2 (`sections/shop-by-category-v2.liquid`)
- Role: Shop By Category V2 section
- Mockup keywords: category grid, shop by category, image card grid, category tiles, collection navigator, category browser, clickable image cards, product category showcase
- Schema settings: 5 | Block types: 1
- Use when: When mockup shows a grid of clickable image cards with titles and arrows for navigating to different product categories or collections
- Create new if: When mockup requires subcategories, product counts, category descriptions, hover overlays, video cards, or a different grid layout than the standard responsive grid
- Requirements that exceed this section: Multiple images per card or image carousels within cards; Category descriptions or body text below titles; Product counts or pricing information on cards; Filterable or sortable category grid; Nested subcategories or hierarchical navigation; Video content instead of static images; Custom grid layouts beyond standard responsive behavior; Interactive hover states with additional content reveal; Badge or tag overlays on category images

### shop-by-category (`sections/shop-by-category.liquid`)
- Role: Shop By Category section
- Mockup keywords: category-navigation, split-layout, featured-image-left, vertical-link-list, shop-by-category, two-column-grid, collection-browser, category-menu, sidebar-navigation
- Schema settings: 8 | Block types: 1
- Use when: When the design shows a category browsing interface with a large featured image on one side and a vertical list of collection/category links on the other side.
- Create new if: When the design requires a grid of category cards, horizontal scrolling categories, or multi-column category layouts instead of a single featured image with a vertical list.
- Requirements that exceed this section: Multiple featured images displayed simultaneously; Grid layout with category cards in rows and columns; Horizontal scrolling or carousel of categories; Nested subcategory dropdowns or accordions; Category tiles with overlay text on each image; More than one featured image section visible at once; Interactive hover states that change the main featured image; Category filtering or search functionality

### shop-categories (`sections/shop-categories.liquid`)
- Role: Shop Categories section
- Mockup keywords: category-carousel, collection-slider, horizontal-scroll-categories, product-category-grid, image-card-slider, collection-showcase, category-navigation, swiper-carousel, shop-by-category, collection-tiles
- Schema settings: 5 | Block types: 1
- Use when: When the mockup shows a horizontal scrolling or carousel display of product categories or collections with images and titles that link to collection pages.
- Create new if: When the mockup requires a static grid layout without carousel functionality, vertical stacking, nested subcategories, or significantly different card designs like overlays with multiple CTAs.
- Requirements that exceed this section: Static grid layout required instead of swiper/carousel; Multiple images per category card; Video backgrounds for categories; Category filtering or search functionality; Nested subcategory display; Product count or pricing displayed on cards; Multiple call-to-action buttons per card; Masonry or asymmetric layout; Tab-based category switching; Vertical carousel orientation

### shop-the-look (`sections/shop-the-look.liquid`)
- Role: Shop The Look section
- Mockup keywords: shop-the-look, shoppable-image-slider, hotspot-carousel, product-tagging-gallery, lookbook-slider, interactive-image-carousel, swiper-gallery, tagged-product-images, lifestyle-image-slider, clickable-product-hotspots
- Schema settings: 10 | Block types: 1
- Use when: When a design shows a carousel/slider of lifestyle images with interactive hotspot dots that reveal product information or links, typically used for outfit styling or room decor showcases.
- Create new if: When the design requires a static grid layout instead of a slider, multi-image comparisons, video content with hotspots, or fundamentally different interaction patterns like hover-reveal instead of click-reveal.
- Requirements that exceed this section: Non-slider layout required (static grid, masonry, split-screen); Video content with hotspots instead of images; More than 3 hotspots per image needed; Hover interactions instead of click-to-reveal; Embedded product quick-buy instead of simple links; Before/after image comparisons; Vertical slider orientation required; Synchronized multi-carousel layout


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
