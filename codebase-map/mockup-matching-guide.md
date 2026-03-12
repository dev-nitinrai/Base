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
- **brand-story** (`sections/brand-story.liquid`) — Brand Story section
- **product-highlights** (`sections/product-highlights.liquid`) — Product Highlights section

### Text / Content Blocks
  None found

### Interactive (Sliders, Tabs, Accordions)
- **Faq-metaobjects** — FAQ — Metaobjects section [accordion]
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
- Mockup keywords: 404 error page, page not found, error state, centered text layout, call-to-action button, minimal error page, full-width centered content, error message
- Schema settings: 1 | Block types: 0
- Use when: When a designer shows a simple centered 404 error page with a heading, subtext, and a single call-to-action button to continue shopping.
- Create new if: When the mockup requires multiple CTAs, search functionality, product recommendations, image/illustration assets, multi-column layout, or custom navigation elements beyond a single continue shopping link.
- Requirements that exceed this section: Multiple call-to-action buttons with different destinations; Search bar or product search functionality; Product recommendations or related products grid; Custom illustrations or imagery requirements; Multi-column layout with additional navigation options; Breadcrumb navigation or sitemap links; Social media links or contact information; Custom icon elements or decorative graphics

### Faq-metaobjects (`sections/Faq-metaobjects.liquid`)
- Role: FAQ — Metaobjects section
- Mockup keywords: faq-accordion, collapsible-faq, accordion-list, expandable-questions, metaobject-faq, q&a-section, faq-dropdown, single-column-accordion
- Schema settings: 6 | Block types: 0
- Use when: When the mockup shows a vertical list of expandable question/answer pairs powered by metaobjects with plus/minus icons and optional section title.
- Create new if: When the mockup requires multi-column FAQ layout, categorized/tabbed FAQs, search functionality, rich media in answers, or FAQ data not from metaobjects.
- Requirements that exceed this section: FAQ items need to be organized into multiple columns or tabs/categories; Answers require rich text editor content, images, videos, or embedded media; Search or filter functionality is needed across FAQ items; FAQ data comes from product metafields, blog posts, or static blocks instead of metaobjects; Multiple accordion styles or layouts need to coexist in one section; Schema editor questions/answers are required instead of metaobject references; Icons other than plus/minus are needed or custom per-item icons; Side-by-side layout with image or illustration alongside questions

### Faq (`sections/Faq.liquid`)
- Role: FAQ section
- Mockup keywords: faq-accordion, collapsible-content, expandable-list, question-answer, accordion-section, toggle-content, plus-minus-icons, faq-list
- Schema settings: 5 | Block types: 1
- Use when: When mockup shows a vertically stacked list of questions that expand/collapse to reveal answers with plus/minus toggle icons
- Create new if: When mockup requires multi-column FAQ layout, tabbed categories, search functionality, or non-accordion display patterns like always-visible answers
- Requirements that exceed this section: FAQ items need to be organized in multiple columns or grid layout; Requires category tabs or filtering to organize questions by topic; Needs search or filter functionality to find specific questions; Questions should display in a table format or non-collapsible layout; Requires icons or images alongside each question; Needs pagination or 'load more' functionality for many items; Requires multiple answer formats (text, video, images) within single items; Needs nested accordions or sub-questions within answers

### account (`sections/account.liquid`)
- Role: t:sections.main-account.name section
- Mockup keywords: account-dashboard, customer-portal, order-history-table, logged-in-view, my-account, order-list, user-profile, account-overview, transaction-history, customer-orders
- Schema settings: 4 | Block types: 0
- Use when: When displaying a customer's account page with order history table and logout functionality.
- Create new if: If the design requires additional account features like address book, wishlist, subscription management, or loyalty points that aren't just order history.
- Requirements that exceed this section: Design includes tabbed navigation between multiple account sections; Need to display customer profile editing fields inline; Requires address management or multiple shipping addresses display; Design shows product recommendations or personalized content blocks; Needs integrated wishlist or saved items functionality; Requires subscription or membership status widgets; Design includes loyalty points, rewards, or credit balance display; Need customizable dashboard widgets or drag-and-drop layout

### activate-account (`sections/activate-account.liquid`)
- Role: t:sections.main-activate-account.name section
- Mockup keywords: account activation form, password setup, two-field form, dual password input, customer onboarding, account confirmation, submit-cancel buttons, form error messaging, centered form layout, customer authentication
- Schema settings: 3 | Block types: 0
- Use when: When you need a password activation form for new customer accounts with password confirmation and error handling
- Create new if: If the mockup requires additional account setup fields beyond password (like profile info, preferences) or multi-step activation process
- Requirements that exceed this section: Additional form fields needed beyond password and password confirmation; Multi-step activation wizard or progress indicator required; Social login or alternative authentication methods needed; Profile customization options during activation; Terms acceptance checkbox or additional legal agreements; Visual elements like welcome imagery or branding beyond basic form; Different button arrangements or more than two action buttons

### addresses (`sections/addresses.liquid`)
- Role: t:sections.main-addresses.name section
- Mockup keywords: customer account addresses, address book, form layout, add new address, edit address, paginated address list, customer portal, account management, address form fields, customer dashboard
- Schema settings: 3 | Block types: 0
- Use when: When the mockup shows a customer account page for managing multiple shipping/billing addresses with add/edit functionality
- Create new if: When the design requires a different address management interface (like inline editing, card-based layout, or non-paginated display) or needs to be embedded outside the customer account context
- Requirements that exceed this section: Address display needs a card-grid or multi-column layout instead of list view; Requires inline editing without modal/expandable forms; Needs address validation or autocomplete beyond Shopify's native implementation; Must show addresses in a different context (checkout, cart, product page); Requires different pagination limit or infinite scroll; Needs custom address labeling (Home, Work, Default) with visual indicators; Must integrate maps or geolocation features

### animated-features-v2 (`sections/animated-features-v2.liquid`)
- Role: Animated Features V2 section
- Mockup keywords: animated-percentage, split-layout, image-with-stats, feature-checklist, stat-highlight, percentage-counter, animated-features, benefit-list, two-column-features, image-text-split
- Schema settings: 20 | Block types: 0
- Use when: When the mockup shows a large animated percentage/stat on one side with an image and checkmark feature list, especially for social proof or product benefits.
- Create new if: When the design requires multiple stats/percentages, different icon types beyond checkmarks, tabbed content, or video instead of static image.
- Requirements that exceed this section: Multiple animated statistics or percentage counters needed simultaneously; Custom icons per feature instead of uniform checkmarks; Video or animated media instead of static image; More than 4 features in the checklist; Interactive tabs or accordion within features; Progress bars or graphs instead of percentage display; Multiple images in a gallery or carousel format

### animated-features (`sections/animated-features.liquid`)
- Role: Animated Features section
- Mockup keywords: animated-features-grid, flip-card-grid, interactive-cards, 2-column-split-layout, features-with-images, hover-flip-cards, icon-feature-showcase, animated-grid-section
- Schema settings: 30 | Block types: 0
- Use when: When a design shows a left-aligned heading/CTA block beside a 2x2 grid of interactive flip cards with images and labels that reveal text on interaction.
- Create new if: When the mockup requires more or fewer than 4 cards, a different grid layout (3-column, 1-row, etc.), non-flip animations, or cards that link to different pages instead of revealing text.
- Requirements that exceed this section: More than 4 feature cards needed; Different grid arrangements (3x3, 1x4, 3-column, etc.); Cards need to link to pages instead of flipping to reveal text; Different animation types (slide, fade, scale instead of flip); Video content instead of static images; Multiple CTAs or form integration required; Cards need additional content blocks (pricing, ratings, multiple images); Vertical layout instead of side-by-side split

### announcement-bar (`sections/announcement-bar.liquid`)
- Role: Top-of-page announcement strip
- Mockup keywords: announcement-bar, top-banner, promo-banner, rotating-message-bar, alert-banner, sticky-header-banner, rotating-announcements, carousel-banner, notification-strip, promotional-header
- Schema settings: 4 | Block types: 1
- Use when: Use this section when a mockup shows a full-width horizontal banner at the top of the page with a single line of text or rotating messages, optionally with navigation arrows and a link.
- Create new if: Create a new section if the mockup requires multi-line content layouts, image backgrounds, complex CTAs with buttons, countdown timers, dismissible functionality, or side-by-side content arrangements.
- Requirements that exceed this section: Multiple lines of content or complex vertical layouts within the bar; Background images or video instead of solid colors; Multiple buttons or complex call-to-action layouts; Integrated countdown timer or dynamic content displays; Close/dismiss button functionality; Icon grids or multi-column layouts within the bar; Vertical sliding or fade transitions instead of horizontal rotation; Conditional display based on cart value or user behavior

### article (`sections/article.liquid`)
- Role: t:sections.main-article.name section
- Mockup keywords: article-hero, blog-post-layout, featured-image, article-content, back-button, blog-single, post-template, author-meta, share-buttons, pagination
- Schema settings: 4 | Block types: 5
- Use when: Use for single blog post or article pages with customizable title, content, featured image, and optional sharing/navigation elements.
- Create new if: Create new section if mockup requires multi-column article layouts, inline product recommendations, custom comment systems, or article carousels.
- Requirements that exceed this section: Article grid or list view (multiple articles); Inline product embeds within content; Custom table of contents navigation; Multi-column article layout; Related articles carousel; Custom comment/review system UI; Article filtering or search interface; Tabbed content within article; Sticky sidebar with additional content

### blog (`sections/blog.liquid`)
- Role: t:sections.main-blog.name section
- Mockup keywords: blog-grid, article-list, blog-posts, collage-layout, blog-archive, post-grid, article-feed, blog-listing, paginated-blog
- Schema settings: 9 | Block types: 0
- Use when: Use this section when the mockup shows a main blog listing page with article cards in either a grid or collage layout with pagination.
- Create new if: Create a new section if the mockup requires filtering by tags/categories, multiple blogs displayed simultaneously, custom article card designs, or alternative layouts beyond grid/collage.
- Requirements that exceed this section: Custom article card layout or content structure beyond image/date/author/excerpt; Filter or sort controls for blog posts; Multiple blogs displayed in one section; Sidebar with categories or recent posts; Custom pagination styles or infinite scroll; Featured posts or sticky posts at top; Different number of articles per page (currently fixed at 6); Mixed content types (articles plus other content blocks)

### blogs (`sections/blogs.liquid`)
- Role: Blogs section
- Mockup keywords: blog-grid, article-cards, blog-preview, content-grid, editorial-grid, blog-section, article-listing, post-preview-cards
- Schema settings: 9 | Block types: 1
- Use when: When mockup shows a grid of blog articles/posts with images, titles, descriptions, and an optional section heading with navigation link.
- Create new if: When mockup requires filtering, categories, multiple blogs mixed together, pagination, or complex card layouts beyond simple image-title-description.
- Requirements that exceed this section: Needs blog category filtering or tags; Requires date/author metadata display; Needs pagination or load-more functionality; Requires different card layouts (horizontal, compact, featured); Needs to pull from multiple blogs simultaneously; Requires social sharing buttons on cards; Needs read time or comment count display

### brand-story-v2 (`sections/brand-story-v2.liquid`)
- Role: Brand Story V2 section
- Mockup keywords: accordion-image-split, expandable-content-layout, interactive-story-section, tab-image-toggle, two-column-accordion, content-image-switcher, brand-narrative, story-blocks
- Schema settings: 4 | Block types: 1
- Use when: When the mockup shows a two-column layout with expandable/accordion content on the left that changes a corresponding image on the right side
- Create new if: When the design requires multiple simultaneous images, video content, slide animations, or non-accordion interaction patterns like tabs or hover effects
- Requirements that exceed this section: Multiple images need to display simultaneously per item; Video or animated content required instead of static images; Horizontal tab navigation instead of vertical accordion; Carousel/slider functionality for the image area; Grid layout with more than two columns; Non-interactive static content display; Image positioning on left instead of right; Timeline or stepped progression visualization

### brand-story (`sections/brand-story.liquid`)
- Role: Brand Story section
- Mockup keywords: brand-story, image-comparison, before-after, side-by-side-images, two-column-layout, labeled-images, comparison-box, split-content, image-with-text, brand-narrative
- Schema settings: 13 | Block types: 0
- Use when: Use this section when the mockup shows two images side-by-side with labels (typically for before/after, comparison, or brand evolution storytelling) with accompanying text content on the right.
- Create new if: Create a new section if the mockup requires more than two comparison images, interactive slider/swipe functionality between images, or a significantly different layout pattern like stacked or diagonal arrangements.
- Requirements that exceed this section: More than 2 images in the comparison; Interactive slider or draggable divider between images; Video content instead of static images; Grid layout with 3+ columns; Carousel or slideshow functionality; Vertical stacking on desktop (not side-by-side); Multiple comparison boxes in a single section; Right-side content requires complex block types beyond standard text/heading

### cart (`sections/cart.liquid`)
- Role: t:sections.main-cart-items.name section
- Mockup keywords: shopping-cart, cart-page, line-items-list, cart-summary, quantity-selector, cart-item-row, product-thumbnail-cart, cart-totals, cart-variant-options
- Schema settings: 4 | Block types: 0
- Use when: When the mockup shows a standard cart page with line items displaying product images, titles, prices, variant options, and quantity controls in a list format.
- Create new if: When the mockup requires a mini-cart drawer/popup, multi-step checkout flow, editable bundled products in cart, or significantly different layout like card-grid instead of list.
- Requirements that exceed this section: Cart displayed as drawer/slide-out panel instead of full page; Multi-column or grid layout for cart items instead of vertical list; Advanced cart features like gift wrapping selector, delivery date picker, or cart notes per item; Bundled product editing or subscription management within cart; Upsell/cross-sell product recommendations integrated between cart items; Progress bar showing free shipping threshold or rewards tiers; Multi-step cart process with separate pages for items/shipping/payment

### collection (`sections/collection.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: product-grid, collection-layout, filter-sidebar, horizontal-filters, vertical-filters, pagination, product-card-grid, collection-hero, quick-add-buttons, multi-column-grid
- Schema settings: 27 | Block types: 0
- Use when: When a designer shows a product listing page with a collection title and grid of products with optional filtering (vertical sidebar or horizontal top filters).
- Create new if: When the mockup requires non-grid layouts (carousel, list view, masonry), custom product card designs beyond styling, or filtering mechanisms not supported by standard Shopify filtering.
- Requirements that exceed this section: Product display needs carousel/slider instead of grid; Custom filter UI beyond vertical/horizontal toggle (e.g., mega-menu filters, modal filters); Non-paginated infinite scroll or load-more functionality; Product cards require custom block content (not just styling); Multiple collection grids on same page; Grid needs masonry or variable-height layout; Requires category/subcategory navigation tree; Needs comparison or wishlist features within grid

### collections (`sections/collections.liquid`)
- Role: t:general.collections_grid section
- Mockup keywords: collection-grid, category-grid, collections-list, 3-column-grid, collection-cards, featured-collections, category-tiles, collections-overview
- Schema settings: 5 | Block types: 0
- Use when: When the mockup shows a grid of collection/category cards with images, titles, and optional descriptions in a responsive multi-column layout
- Create new if: When the mockup requires individual collection selection (blocks), custom filtering, alternative layouts (carousel, masonry), or per-collection custom styling controls
- Requirements that exceed this section: Need to select specific collections rather than displaying all collections; Requires blocks system for per-collection configuration; Design needs carousel/slider instead of static grid; Requires different image aspect ratios per collection; Needs overlay text on images rather than below; Requires product counts or other collection metadata beyond description; Design uses masonry or asymmetric grid layout; Needs tab-based or filtered collection organization

### custom-section (`sections/custom-section.liquid`)
- Role: t:general.custom_section section
- Mockup keywords: custom-content, flexible-container, background-image-section, grid-layout, modular-blocks, full-width-banner, theme-blocks-container, configurable-section
- Schema settings: 1 | Block types: 1
- Use when: When you need a flexible container section that accepts any theme blocks with an optional background image and standard grid layout.
- Create new if: When you need hardcoded specific block types, complex multi-column layouts, custom styling options (colors, spacing, alignment), or specialized functionality beyond basic block containment.
- Requirements that exceed this section: Need specific allowed block types instead of any @theme blocks; Require multiple column layout options or responsive grid controls; Need padding, margin, or spacing controls; Require text color, overlay, or background color settings; Need alignment options for content (left, center, right); Require animation or transition effects; Need container width controls (boxed vs full-width); Require height constraints or aspect ratio settings

### dynamic-grid (`sections/dynamic-grid.liquid`)
- Role: Custom section
- Mockup keywords: dynamic-grid, content-grid, flexible-grid, multi-column-layout, grid-section, masonry-layout, tile-grid, grid-showcase
- Schema settings: 0 | Block types: 0
- Use when: When the mockup shows a grid-based layout with customizable title, description, and button that needs flexible content alignment and extensive typography controls.
- Create new if: When the mockup requires grid items with individual content blocks, variable column counts per breakpoint, image overlays, or repeating card patterns that this section cannot accommodate.
- Requirements that exceed this section: Grid items need individual images, text, or links (requires blocks schema); Variable column counts needed (2-col mobile, 3-col tablet, 4-col desktop); Grid items require hover states or interactive elements; Masonry or asymmetric grid layouts with different sized tiles; Product or collection grid with dynamic content population; Grid items need individual background colors or styling; Filtering or sorting functionality required

### featured-collections-v2 (`sections/featured-collections-v2.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: tabbed-collections, product-carousel, collection-tabs, multi-collection-slider, swiper-products, tabbed-product-grid, collection-switcher
- Schema settings: 18 | Block types: 1
- Use when: When the mockup shows multiple collections displayed via horizontal tabs with each collection's products in a swipeable carousel format.
- Create new if: When the mockup requires vertical tabs, accordion-style collection display, grid-only layout without carousel functionality, or mixing collections with other content types in tabs.
- Requirements that exceed this section: Tabs need to contain content other than product collections (e.g., blog posts, custom HTML blocks); Vertical tab orientation is required instead of horizontal; Static grid layout is needed without carousel/swiper functionality; Individual products need to be manually selected rather than pulled from collections; Tabs require icons, images, or complex styling beyond simple text labels; Multiple collection blocks need to be shown simultaneously in a masonry or mixed layout

### featured-collections (`sections/featured-collections.liquid`)
- Role: Grid of products from a collection
- Mockup keywords: featured collections grid, collection cards, collection showcase, multi-collection display, collection gallery, category grid, collection thumbnails, collection grid layout
- Schema settings: 7 | Block types: 1
- Use when: When a design shows multiple collection cards in a grid with images, titles, and optional Shop Now links that match this section's two style variants (overlay or below text).
- Create new if: When the design requires collection cards with product counts, multi-image carousels per collection, filterable collections, or layout patterns beyond a simple grid (e.g., masonry, staggered, or mixed card sizes).
- Requirements that exceed this section: Collection cards need to display product counts, prices, or best-selling products; Design requires carousel/slider navigation instead of static grid; Mockup shows mixed card sizes, masonry layout, or asymmetric grid patterns; Cards need hover effects with multiple images or product quick-views; Design includes filtering, sorting, or dynamic collection loading; Layout requires more than basic grid gap control (e.g., different gaps for mobile/desktop); Cards need multiple CTAs or complex content beyond image and title

### featured-products (`sections/featured-products.liquid`)
- Role: Single product showcase with form
- Mockup keywords: featured-products, product-carousel, product-slider, swiper-products, highlighted-products, curated-collection, product-showcase, horizontal-scroll-products
- Schema settings: 11 | Block types: 1
- Use when: When a design mockup shows a horizontal scrollable or carousel display of hand-picked individual products with heading, subheading, optional view-all link, and navigation arrows.
- Create new if: When the mockup requires automated collection-based product filtering, grid layout without carousel functionality, or complex product filtering/sorting controls beyond manual product selection.
- Requirements that exceed this section: Products need to be pulled automatically from a collection rather than manually selected per block; Layout requires a static grid instead of a swiper/carousel; Design needs product filtering, sorting, or search functionality; Mockup shows multiple products per slide or complex card layouts beyond single product cards; Requires pagination instead of horizontal scrolling; Needs product quick-view modals or add-to-cart functionality directly in cards

### footer (`sections/footer.liquid`)
- Role: Site footer with links and info
- Mockup keywords: footer, site-footer, multi-column-footer, footer-menu, footer-links, social-icons, brand-footer, newsletter-footer, footer-blocks, meganav-footer
- Schema settings: 11 | Block types: 4
- Use when: When the mockup shows a footer with any combination of link columns, text blocks, social media icons, or brand information arranged in a multi-column layout.
- Create new if: When the footer requires complex interactive elements like embedded maps, live chat widgets, product grids, or custom JavaScript-driven functionality beyond static content blocks.
- Requirements that exceed this section: Footer needs dynamic product recommendations or live inventory displays; Footer requires embedded third-party widgets (maps, live chat, custom forms with validation); Footer needs animation sequences or interactive elements beyond hover states; Footer requires conditional logic based on customer login state or cart contents; Footer needs sticky/fixed positioning behavior with scroll interactions; Footer requires image galleries or carousels within footer blocks; Footer needs accordion functionality for mobile that differs from desktop layout

### header (`sections/header.liquid`)
- Role: Site navigation header
- Mockup keywords: header, top-navigation, sticky-header, logo-nav-cart, mega-menu, utility-nav, site-header, horizontal-menu, drawer-menu, cart-icon
- Schema settings: 22 | Block types: 1
- Use when: When you need a site-wide navigation header with logo, menu links, cart icon, and optional sticky behavior that matches this grid-based layout structure.
- Create new if: When the mockup requires a fundamentally different header architecture like side navigation, full-screen overlay menu, split header with separate top bar, or integrated search/announcement bar.
- Requirements that exceed this section: Multiple rows with distinct backgrounds (e.g., announcement bar + main header + promo strip); Horizontal scrolling menu instead of wrapping; Inline search bar in the main header grid; Multi-column mega menu with images, promotions, or complex layouts; Side drawer navigation instead of dropdown menus; Header with integrated hero content or background images; Currency/language switchers in header icons; Social media icons in main header grid

### hello-world (`sections/hello-world.liquid`)
- Role: Hello World section
- Mockup keywords: welcome-hero, split-layout, icon-illustration, three-column-highlights, feature-grid, informational-section, text-image-split, benefit-cards, educational-layout
- Schema settings: 4 | Block types: 0
- Use when: Use this section for welcome/introduction pages with a hero message paired with an icon, followed by three equal-width informational highlights or feature cards.
- Create new if: Create a new section if the mockup requires different grid layouts (not 3-column), dynamic blocks, image upload settings, video content, or customizable highlight quantities.
- Requirements that exceed this section: Variable number of highlight cards (schema blocks needed); Image upload instead of hardcoded SVG icon; Different column layouts (2-column, 4-column, or responsive grid options); Video or media content instead of static illustration; Call-to-action buttons with customizable URLs; Background image or overlay options; Accordion or tabbed content structure; Dynamic content from collections or products; Customizable icon or image per highlight card

### hero-v2 (`sections/hero-v2.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero, split-layout, hero-banner, video-hero, image-text-split, hero-with-cta, left-content-right-media, video-background-hero, featured-hero, homepage-hero
- Schema settings: 19 | Block types: 1
- Use when: When the mockup shows a hero section with text content (heading, description, CTA button) on the left and an image or video on the right, with customizable alignment and color schemes.
- Create new if: When the mockup requires multiple columns of content, overlaid text on the media, carousel/slider functionality, split-screen with content on both sides, or multiple CTAs in different positions.
- Requirements that exceed this section: Multiple images or videos in a carousel/slider format; Text content overlaid directly on top of the background media; Two-column text content with media in center or background; Multiple CTA buttons with different styles or positions; Content blocks that can be reordered (blocks structure); Parallax or advanced scroll effects; Form integration within the hero; Dynamic content blocks that editors can add/remove

### hero (`sections/hero.liquid`)
- Role: Full-width banner with headline and CTA
- Mockup keywords: hero banner, full-width hero, video background hero, image background hero, CTA banner, landing hero, endorsement banner, signature hero, star rating hero, overlay hero
- Schema settings: 22 | Block types: 0
- Use when: Use this for a primary hero banner at the top of a page with a single call-to-action, optional star rating, heading, subheading, and endorsement signature block over an image or video background.
- Create new if: Create a new section if the mockup requires multiple columns, side-by-side image/text layouts, carousel/slideshow functionality, multiple CTAs, product integration, or form inputs within the hero.
- Requirements that exceed this section: Split-screen or two-column hero layout with image on one side; Multiple hero slides or carousel functionality; Embedded forms (email capture, quiz, search) in hero; Product selection or add-to-cart functionality; Multiple call-to-action buttons with different destinations; Dynamic countdown timer or promotional date logic; Parallax scrolling effects; Animated text sequences or typewriter effects

### link-readme (`sections/link-readme.liquid`)
- Role: Link Readme section
- Mockup keywords: call-to-action button, single CTA, centered button, standalone link, simple action section, button-only section, minimal CTA, isolated button
- Schema settings: 7 | Block types: 0
- Use when: When the mockup shows a simple, standalone button or call-to-action link centered within a section with configurable padding and color scheme.
- Create new if: When the mockup requires additional content elements like headings, descriptions, icons, images, multiple buttons, or complex layout arrangements beyond a single centered button.
- Requirements that exceed this section: Multiple buttons or CTAs are needed; Heading, subheading, or descriptive text accompanies the button; Icons or images are part of the design; Button alignment options (left, right) are required; Multiple columns or grid layouts are present; Background images or overlays are needed; Custom button styling beyond the default button class is required

### login (`sections/login.liquid`)
- Role: t:sections.main-login.name section
- Mockup keywords: login-form, customer-login, password-recovery, email-input, auth-page, sign-in, shop-login-button, single-column-form, customer-account, recover-password
- Schema settings: 5 | Block types: 0
- Use when: When the mockup shows a customer login page with email/password fields and optional password recovery functionality.
- Create new if: If the design requires multi-step authentication, social login buttons beyond Shop Pay, or a split-screen layout with promotional content alongside the form.
- Requirements that exceed this section: Side-by-side layout with image or promotional content; Multiple third-party social login providers (Facebook, Google, Apple); Multi-step or wizard-style authentication flow; Embedded registration form on the same page; Custom field requirements beyond email and password; Modal or overlay-based login instead of dedicated page

### logos (`sections/logos.liquid`)
- Role: Logos section
- Mockup keywords: logo-marquee, logo-carousel, logo-strip, brand-logos, partner-logos, trust-badges, client-logos, infinite-scroll-logos, logo-ticker, brand-bar
- Schema settings: 9 | Block types: 1
- Use when: When a mockup shows a horizontal strip of brand/partner/client logos that scroll or animate continuously in a loop.
- Create new if: When logos need to be in a static grid layout, require individual links/CTAs, need category grouping, or display with accompanying text descriptions per logo.
- Requirements that exceed this section: Logos need to link to different URLs individually; Logos require captions or descriptive text beneath them; Layout needs to be a static multi-row grid instead of scrolling; Logos need to be grouped by categories or tabs; Section requires a heading or subheading above the logos; Logos need hover effects that reveal additional information; Different logo sizes or prominence levels are required (featured vs standard)

### order (`sections/order.liquid`)
- Role: t:sections.main-order.name section
- Mockup keywords: order-details-table, customer-account-order, order-history-detail, transactional-table, line-item-table, purchase-summary, order-confirmation-layout, tabular-data, account-dashboard-child, ecommerce-order-view
- Schema settings: 3 | Block types: 0
- Use when: When displaying detailed information about a single customer order including line items, SKUs, prices, quantities, and order metadata in a table format within the customer account area.
- Create new if: When the design requires a different visual treatment beyond table layout (like cards, lists), custom fulfillment tracking UI, integrated reorder functionality, or non-standard order information display outside the customer account context.
- Requirements that exceed this section: Design shows order items in card/grid format instead of table; Custom fulfillment tracking timeline or shipping visualization needed; One-click reorder or add-to-cart functionality from order history required; Integration with third-party order tracking or review systems; Custom grouping/filtering of line items beyond default structure; Public order lookup page (non-authenticated); Embedded order details in email templates or other contexts

### page (`sections/page.liquid`)
- Role: t:sections.main-page.name section
- Mockup keywords: static page, about page, policy page, content page, centered text, single column, narrow width, text-only layout, simple page, information page
- Schema settings: 5 | Block types: 0
- Use when: Use this section for standard static content pages like About, Contact, Policies, or FAQ pages that need a simple title and formatted text content in a single narrow column.
- Create new if: Create a new section when the mockup requires custom layouts, multiple columns, media elements, interactive components, custom blocks, or specialized content types beyond basic rich text.
- Requirements that exceed this section: Multiple column layouts or grid structures; Image galleries, videos, or media embeds; Custom blocks or repeatable content sections; Interactive elements like tabs, accordions, or toggles; Forms or data collection components; Product displays or shopping functionality; Custom heading hierarchy beyond a single h1; Sidebar or asymmetric layouts; Call-to-action buttons or promotional elements; Background images or decorative elements

### password (`sections/password.liquid`)
- Role: Password Page section
- Mockup keywords: password-gate, coming-soon-page, store-lock-screen, centered-form-landing, email-capture-splash, launch-page, pre-launch-portal, storefront-unlock, access-restricted-landing
- Schema settings: 7 | Block types: 0
- Use when: When the store requires a password-protected landing page with branding, custom message, and email/contact info before granting access.
- Create new if: If the mockup shows multiple subscription forms, countdown timers, social proof elements, product previews, waitlist features, or multi-step unlock flows.
- Requirements that exceed this section: Countdown timer to store launch date; Email/SMS subscription list builder separate from password; Social media feed or follower count integration; Product teasers or sneak peek gallery; Multi-language password access with different messages; Video background or complex animation; Progress bar or multi-step unlock process; Admin login vs customer password differentiation; Age verification or region-based access control

### pickup-availability (`sections/pickup-availability.liquid`)
- Role: Custom section
- Mockup keywords: pickup-availability, store-locator, in-store-pickup, location-list, availability-drawer, modal-dialog, stock-status, product-availability, store-info
- Schema settings: 0 | Block types: 0
- Use when: When displaying product availability at physical store locations with pickup options, including a preview and expandable drawer showing multiple store details.
- Create new if: If the design requires complex store filtering, map integration, distance calculation, appointment booking, or inventory levels beyond simple available/unavailable states.
- Requirements that exceed this section: Interactive map or geolocation features needed; Advanced filtering by distance, amenities, or store hours; Real-time inventory quantities or low-stock warnings required; Appointment scheduling or reservation system integration; Multiple product variants compared across locations simultaneously; Store-specific pricing or promotions display; Reviews or ratings for individual store locations

### predictive-results (`sections/predictive-results.liquid`)
- Role: Custom section
- Mockup keywords: predictive-search, autocomplete-dropdown, search-suggestions, product-quick-results, live-search, typeahead-results, search-overlay, instant-search
- Schema settings: 0 | Block types: 0
- Use when: When implementing a live search dropdown that displays categorized results (suggestions, articles/pages, products) as users type in a search field.
- Create new if: If the design requires filtering controls, pagination, grid layouts with cards, advanced sorting options, or a full search results page instead of a dropdown overlay.
- Requirements that exceed this section: Search results need filtering by price, category, or attributes; Design requires a full-page search experience rather than dropdown; Results must be displayed in card grid format with add-to-cart buttons; Pagination or load-more functionality is required; Multiple image thumbnails per product result are needed; Advanced product information like ratings, reviews, or stock status must be shown; Results need to be organized in tabs rather than vertical sections

### product-details (`sections/product-details.liquid`)
- Role: Product Details section
- Mockup keywords: accordion, collapsible-content, product-details, expandable-sections, faq-style, details-accordion, tabbed-content, image-text-blocks, split-content, multi-block-accordion
- Schema settings: 5 | Block types: 1
- Use when: When the mockup shows collapsible/expandable content blocks with titles, text descriptions, and optional supporting images in an accordion pattern, typically for product specifications, care instructions, or detailed information.
- Create new if: When the mockup requires non-accordion layouts (tabs, side navigation, always-visible content), significantly different content structures (tables, comparison charts, video embeds), or custom interactive elements beyond expand/collapse functionality.
- Requirements that exceed this section: Non-accordion UI pattern (horizontal tabs, vertical navigation, always-expanded sections); Complex content types like comparison tables, size charts, specification grids, or embedded videos; Multiple image layouts per block (galleries, carousels, before-after sliders); Interactive elements like filtering, sorting, or search within content; Product-specific dynamic content that pulls from metafields or product data automatically; Custom animation requirements beyond simple expand/collapse transitions; Multi-column text layouts or magazine-style content presentation

### product-highlights (`sections/product-highlights.liquid`)
- Role: Product Highlights section
- Mockup keywords: split-layout, product-features, icon-list, two-column, feature-highlights, icon-with-text, product-showcase, benefit-list, image-text-split, feature-grid
- Schema settings: 9 | Block types: 1
- Use when: When the mockup shows a two-column layout with an image on one side and a list of features/benefits with icons on the other side.
- Create new if: When the mockup requires multiple images, video support, interactive elements, tabs/accordions, or more than two columns in the layout.
- Requirements that exceed this section: Multiple images or image gallery needed instead of single image; Video or animated media required; Features need to be organized in tabs, accordions, or expandable panels; Three or more column layout required; Interactive hover states or click-to-reveal functionality; Features need individual CTAs or links; Reversed or alternating image-text layouts for multiple feature sets; Background patterns or overlays beyond basic color schemes; Comparison tables or side-by-side product feature comparisons

### product (`sections/product.liquid`)
- Role: t:sections.main-product.name section
- Mockup keywords: product-detail-page, pdp, split-layout, product-gallery, buy-box, variant-selector, add-to-cart, product-info, media-sidebar, product-hero
- Schema settings: 18 | Block types: 15
- Use when: When the mockup shows a product detail page with media gallery on one side and product information (title, price, variants, add-to-cart) on the other
- Create new if: When the mockup requires fundamentally different product page architecture like full-width media, embedded video backgrounds, sticky cart functionality, or tabbed product content sections
- Requirements that exceed this section: Horizontal media carousel layout instead of vertical gallery; Custom comparison tables or size charts as primary layout elements; Multi-column product information layout; Embedded 3D/AR viewers as primary media type; Split-screen scrolling effects between media and info; Product bundles with multiple independent add-to-cart actions; Integrated user-generated content gallery in main layout

### promo-banner (`sections/promo-banner.liquid`)
- Role: Banner image with text overlay
- Mockup keywords: promo-banner, product-spotlight, featured-product, split-layout, image-text-cta, promotional-card, product-callout, hero-product, image-beside-content, single-product-promo
- Schema settings: 13 | Block types: 0
- Use when: When the mockup shows a single product highlight with image, title, description, price, and call-to-action button in a split or side-by-side layout.
- Create new if: If the mockup requires multiple products displayed together, carousel functionality, variant selection, quantity picker, or add-to-cart functionality instead of just a link.
- Requirements that exceed this section: Multiple products need to be displayed in the same banner; Product variant selector or add-to-cart button is required; Carousel or slideshow of multiple promotional items; Interactive product options like size/color selection; Multiple CTAs with different actions; Grid layout of products rather than single product focus; Video content instead of static image; Timer/countdown functionality for sales; Customer reviews or ratings display

### register (`sections/register.liquid`)
- Role: t:sections.main-register.name section
- Mockup keywords: registration-form, account-signup, customer-register, user-creation-form, sign-up-page, new-account-form, customer-onboarding, input-fields-vertical, error-messaging-form, centered-form-layout
- Schema settings: 3 | Block types: 0
- Use when: When the mockup shows a customer account registration or sign-up form with first name, last name, email, and password fields.
- Create new if: When the mockup requires additional custom fields beyond standard Shopify customer attributes, multi-step registration, social login buttons, or complex validation logic not supported by Shopify's create_customer form.
- Requirements that exceed this section: Additional custom fields (phone, company, address) are required during registration; Multi-step or wizard-style registration flow is needed; Social media login buttons (Google, Facebook) must be integrated; Custom checkbox agreements beyond standard terms require specific styling; Side-by-side layout with promotional content or imagery is required; Age verification or CAPTCHA elements need to be embedded; Registration benefits or feature list needs to display alongside the form

### related-products (`sections/related-products.liquid`)
- Role: Related products section
- Mockup keywords: related-products, product-recommendations, product-carousel, product-grid, you-may-also-like, recommended-products, product-slider, swiper-carousel, product-upsell, cross-sell
- Schema settings: 22 | Block types: 0
- Use when: When a mockup shows a horizontal product carousel or grid of recommended/related items, typically below product details with navigation arrows and configurable columns.
- Create new if: When the mockup requires algorithmic filtering beyond Shopify's native recommendations (manual product selection, collection-based logic, or complex conditional display rules).
- Requirements that exceed this section: Manual product selection instead of automatic recommendations; Multiple recommendation algorithms or sources in one section; Custom filtering by tags, metafields, or vendor; Tabbed interface switching between different product sets; Integration with third-party recommendation engines; Product comparison features or side-by-side layouts; Mixed content types (products + blog posts or collections); Vertical carousel orientation or masonry grid layout

### reset-password (`sections/reset-password.liquid`)
- Role: t:sections.main-reset-password.name section
- Mockup keywords: password-reset-form, two-field-form, customer-account-form, centered-form-layout, error-messaging-form, password-confirmation-input, single-column-form, account-security-page
- Schema settings: 3 | Block types: 0
- Use when: When you need a customer password reset page with password and confirmation fields, error handling, and simple centered layout.
- Create new if: If the mockup requires multi-step password reset, additional security fields (security questions, 2FA), side-by-side layout, image backgrounds, or integration with third-party authentication systems.
- Requirements that exceed this section: Multi-step password reset flow with email verification; Additional form fields beyond password and confirmation; Two-column or split-screen layout with imagery; Social login or SSO integration options; Password strength meter or validation requirements display; Custom branding elements or promotional content blocks; Completely different form styling beyond padding adjustments

### search (`sections/search.liquid`)
- Role: t:sections.main-collection-product-grid.name section
- Mockup keywords: search-results-grid, product-grid, filterable-search, paginated-results, search-bar, multi-column-grid, product-card-layout, sort-filter-search, vertical-horizontal-filters, responsive-product-grid
- Schema settings: 31 | Block types: 0
- Use when: Use this section when mockups show a search results page with product grid layout, filtering/sorting controls, and configurable column layouts.
- Create new if: Create a new section if the mockup requires non-product search results (blog, pages, mixed content types), custom card layouts beyond standard product cards, or search-specific features like search suggestions, trending searches, or search history.
- Requirements that exceed this section: Search results must display non-product content types (articles, pages, collections) in the grid; Custom product card design that cannot be styled via CSS alone (requires different HTML structure); Search analytics, trending searches, or search history features are required; Alternative layout patterns like list view, masonry grid, or grouped/categorized results; Infinite scroll instead of pagination; Search refinement UI beyond standard filters (faceted search, range sliders, visual filters); No-results state requires custom content blocks or recommendations engine; Real-time search results updating without page reload

### selling-points-v2 (`sections/selling-points-v2.liquid`)
- Role: Selling Points V2 section
- Mockup keywords: selling-points, feature-grid, icon-cards, benefits-grid, highlights-row, info-cards, feature-blocks, mobile-slider-cards
- Schema settings: 6 | Block types: 1
- Use when: When the mockup shows a horizontal grid of feature/benefit cards with titles, descriptions, and icons that may need to slide on mobile
- Create new if: When the design requires images instead of icons, different layouts per card, complex icon customization, or grid patterns beyond equal-width items
- Requirements that exceed this section: cards need individual images or media instead of a single shared icon; layout requires alternating card sizes or asymmetric grid; icons need to be customizable per block (different icons per card); cards need buttons with custom text instead of full-card links; design requires column count controls or responsive breakpoint customization; cards need background images or overlay effects; content needs rich text formatting instead of plain escaped text

### selling-points (`sections/selling-points.liquid`)
- Role: Selling Points section
- Mockup keywords: icon-grid, features-grid, selling-points, icon-text-blocks, benefits-section, usp-grid, icon-list, trust-badges, feature-highlights
- Schema settings: 6 | Block types: 1
- Use when: When mockup shows a grid of icons/images with titles and descriptions showcasing product features, benefits, or unique selling propositions
- Create new if: When mockup requires interactive elements, animations, custom layouts beyond a simple grid, links/CTAs per item, or significantly different content structure
- Requirements that exceed this section: Items need individual clickable links or buttons; Layout requires asymmetric or custom grid arrangements not achievable with CSS; Content needs more than icon + title + description (e.g., pricing, ratings, badges); Requires carousel/slider functionality instead of static grid; Needs per-item color schemes or backgrounds; Requires video or animated icons instead of static images

### shop-by-category-v2 (`sections/shop-by-category-v2.liquid`)
- Role: Shop By Category V2 section
- Mockup keywords: category-grid, image-cards-with-links, shop-by-category, category-tiles, category-navigation, clickable-image-grid, product-category-cards, image-grid-with-arrows
- Schema settings: 5 | Block types: 1
- Use when: Use when mockup shows a grid of clickable image cards representing product categories or collections with titles and arrow indicators
- Create new if: Create new section if mockup requires multiple images per card, text overlays on images, category descriptions, or non-grid layouts like carousels or asymmetric masonry
- Requirements that exceed this section: Multiple images per category card; Text overlay directly on images instead of below; Subcategory navigation or nested categories; Product counts or pricing displayed on cards; Carousel/slider functionality instead of static grid; Description text or bullet points per category; Filter or sorting controls; Masonry or asymmetric grid layout; Video content instead of static images; Hover states requiring different images

### shop-by-category (`sections/shop-by-category.liquid`)
- Role: Shop By Category section
- Mockup keywords: category-grid, collection-list, split-layout, featured-image-sidebar, category-navigation, image-with-list, two-column-categories, category-links, shop-by-category
- Schema settings: 8 | Block types: 1
- Use when: When the mockup shows a featured image on one side with a list of category/collection links on the other side in a two-column layout.
- Create new if: When the mockup requires multiple images per category, a grid layout instead of a list, or interactive filtering/sorting functionality.
- Requirements that exceed this section: Categories displayed in a multi-column grid instead of a vertical list; Each category needs its own visible image thumbnail; Interactive hover states that change the main featured image; Carousel or slider functionality for categories; Nested subcategory navigation; Filter or search functionality within categories; Card-based layout with images, descriptions, and CTAs per category; More than two columns in the layout; Category counts or product quantities displayed

### shop-categories (`sections/shop-categories.liquid`)
- Role: Shop Categories section
- Mockup keywords: category-carousel, collection-slider, shop-by-category, horizontal-scroll-cards, image-card-carousel, category-grid-slider, collection-tiles, swiper-categories, product-category-navigation, filtered-collection-showcase
- Schema settings: 5 | Block types: 1
- Use when: When the design shows a horizontal carousel or slider of collection/category cards with images and titles linking to different product collections.
- Create new if: When the design requires a static grid layout without slider functionality, vertical stacking, or significantly different card structures like overlaid text, icon-based categories, or multi-row grids.
- Requirements that exceed this section: Static grid layout without carousel/swiper functionality; Vertical card stacking or masonry layout; Category cards with product counts, pricing, or other metadata beyond title and image; Interactive filters or tabbed navigation within categories; Multi-row grid that doesn't scroll horizontally; Card hover states requiring complex overlays or animations beyond CSS; Nested subcategory navigation or expandable category trees; Video backgrounds or animated content instead of static images

### shop-the-look (`sections/shop-the-look.liquid`)
- Role: Shop The Look section
- Mockup keywords: shop-the-look, shoppable-image, product-hotspots, interactive-slider, image-carousel-with-products, lookbook, tagged-products, clickable-hotspots, product-showcase-slider, swiper-carousel
- Schema settings: 10 | Block types: 1
- Use when: When the mockup shows an image carousel/slider with interactive hotspot dots that reveal product information overlaid on lifestyle or styled product photography.
- Create new if: When the design requires a static grid layout without slider functionality, video content instead of images, or fundamentally different interaction patterns like hover cards or modal popups.
- Requirements that exceed this section: Video or animated content instead of static images; Grid layout without carousel/slider functionality; More than 3 hotspots per image (current limit appears to be 3); Hotspots triggering full-page modals or cart drawers; Multi-column simultaneous image display; Before/after image comparison functionality; Integration with quiz or product recommendation logic


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
