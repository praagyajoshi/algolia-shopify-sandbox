/* Do NOT modify this file  - Automatically generated */

window.algoliaShopify = {};
window.algoliaShopify.config = {
  app_id: "0F88BV4ZT0",
  search_api_key: "1ca74fd4d727197e3241b30c1bf5e4f2",
  index_prefix: "shopify_demo_store_",
  index_products: true,
  index_collections: true,
  index_articles: false,
  index_pages: false,
  sort_orders: [
    {
      key: "recently_ordered_count",
      title: "Popularity",
      desc: { active: true, title: "Most popular" }
    },
    {
      key: "price",
      title: "Price",
      asc: { active: true, title: "Cheapest first" }
    },
    {
      key: "inventory_quantity",
      title: "Inventory quantity",
      desc: { active: true, title: "Most available" }
    },
    { key: "vendor", title: "Vendor", asc: { active: true, title: "Vendor" } },
    { key: "title", title: "Name", desc: { active: true, title: "Name Z-A" } },
    {
      key: "published_at",
      title: "Publication date",
      desc: { active: true, title: "Newest first" }
    },
    {
      key: "price_ratio",
      title: "Price ratio",
      asc: { active: true, title: "Highest discount first" }
    },
    {
      key: "price",
      title: "Price",
      desc: { active: true, title: "Most expensive first" }
    },
    {
      key: "published_at",
      title: "Publication date",
      asc: { active: true, title: "Oldest first" }
    },
    {
      key: "grams",
      title: "Weight",
      desc: { active: true, title: "Heaviest first" }
    },
    { key: "title", title: "Name", asc: { active: true, title: "Name" } },
    {
      key: "grams",
      title: "Weight",
      asc: { active: true, title: "Lightest first" }
    },
    {
      key: "vendor",
      title: "Vendor",
      desc: { active: true, title: "Vendor Z-A" }
    }
  ],
  facets: [
    {
      enabled: true,
      name: "price",
      title: "Price",
      type: "slider",
      available_types: ["slider"],
      forgettable: null,
      searchable: false,
      refined_first: false
    },
    {
      enabled: true,
      name: "price_range",
      title: "Price range",
      type: "disjunctive",
      available_types: ["disjunctive"],
      forgettable: null,
      searchable: false,
      refined_first: false
    },
    {
      enabled: true,
      name: "vendor",
      title: "Vendor",
      type: "conjunctive",
      available_types: ["menu", "conjunctive", "disjunctive"],
      forgettable: null,
      searchable: false,
      refined_first: false
    },
    {
      enabled: true,
      name: "tags",
      title: "Tags",
      type: "conjunctive",
      available_types: ["menu", "conjunctive", "disjunctive"],
      forgettable: null,
      searchable: false,
      refined_first: false
    },
    {
      enabled: false,
      name: "product_type",
      title: "Type",
      type: "conjunctive",
      available_types: ["menu", "conjunctive", "disjunctive"],
      forgettable: null,
      searchable: false,
      refined_first: false
    }
  ],
  powered_by: true,
  colors: { main: "#213236", secondary: "#888", highlight: "#D5CBCA" },
  autocomplete_enabled: true,
  autocomplete_debug: false,
  input_selector:
    'form[action="/search"] input[type="text"], form[action="/search"] input[type="search"]',
  products_autocomplete_hits_per_page: 6,
  collections_autocomplete_hits_per_page: 2,
  articles_autocomplete_hits_per_page: 2,
  pages_autocomplete_hits_per_page: 2,
  instant_search_enabled: true,
  instant_search_enabled_on_collection: true,
  results_selector: ".main-content",
  products_full_results_hits_per_page: 12,
  collections_full_results_hits_per_page: 12,
  show_products: true,
  analytics_enabled: false,
  collection_id_indexing: true,
  collection_id_query_rules: false,
  collection_search_feature_enabled: true,
  collection_css_selector: ".main-content",
  collection_facets: {
    default: [
      {
        available_types: ["slider"],
        enabled: true,
        name: "price",
        title: "Price",
        type: "slider"
      },
      {
        available_types: ["disjunctive"],
        enabled: true,
        name: "price_range",
        title: "Price range",
        type: "disjunctive"
      },
      {
        available_types: ["menu", "conjunctive", "disjunctive"],
        enabled: true,
        name: "vendor",
        title: "Vendor",
        type: "conjunctive"
      },
      {
        available_types: ["menu", "conjunctive", "disjunctive"],
        enabled: true,
        name: "product_type",
        title: "Type",
        type: "conjunctive"
      },
      {
        available_types: ["menu", "conjunctive", "disjunctive"],
        enabled: false,
        name: "tags",
        title: "Tags",
        type: "conjunctive"
      },
      {
        enabled: false,
        name: "named_tags.category",
        title: "Category",
        type: "conjunctive",
        available_types: ["conjunctive", "disjunctive", "slider"],
        refined_first: false,
        forgettable: true
      }
    ],
    "188222439562": [
      {
        enabled: true,
        name: "price",
        title: "Price",
        type: "slider",
        available_types: ["slider"],
        forgettable: null,
        searchable: false,
        refined_first: false
      },
      {
        enabled: true,
        name: "price_range",
        title: "Price range",
        type: "disjunctive",
        available_types: ["disjunctive"],
        forgettable: null,
        searchable: false,
        refined_first: false
      },
      {
        enabled: true,
        name: "vendor",
        title: "Vendor",
        type: "conjunctive",
        available_types: ["menu", "conjunctive", "disjunctive"],
        forgettable: null,
        searchable: false,
        refined_first: false
      },
      {
        enabled: true,
        name: "product_type",
        title: "Type",
        type: "conjunctive",
        available_types: ["menu", "conjunctive", "disjunctive"],
        forgettable: null,
        searchable: false,
        refined_first: false
      },
      {
        enabled: false,
        name: "named_tags.category",
        title: "Category",
        type: "conjunctive",
        available_types: ["conjunctive", "disjunctive", "slider"],
        forgettable: true,
        searchable: false,
        refined_first: false
      },
      {
        enabled: true,
        name: "tags",
        title: "Tags",
        type: "conjunctive",
        available_types: ["menu", "conjunctive", "disjunctive"],
        forgettable: null,
        searchable: false,
        refined_first: false
      },
      {
        enabled: true,
        name: "options.color",
        title: "Color",
        type: "conjunctive",
        available_types: ["conjunctive", "disjunctive", "slider"],
        forgettable: true,
        searchable: true,
        refined_first: false
      },
      {
        enabled: false,
        name: "options.size",
        title: "Size",
        type: "conjunctive",
        available_types: ["conjunctive", "disjunctive", "slider"],
        forgettable: true,
        searchable: true,
        refined_first: false
      }
    ]
  },
  collection_sort_orders: {
    default: [
      {
        key: "recently_ordered_count",
        title: "Popularity",
        desc: { active: true, title: "Most popular" }
      },
      {
        key: "price",
        title: "Price",
        asc: { active: true, title: "Cheapest first" }
      },
      {
        key: "inventory_quantity",
        title: "Inventory quantity",
        desc: { active: true, title: "Most available" }
      },
      {
        key: "vendor",
        title: "Vendor",
        asc: { active: true, title: "Vendor" }
      },
      {
        key: "title",
        title: "Name",
        desc: { active: true, title: "Name Z-A" }
      },
      {
        key: "published_at",
        title: "Publication date",
        desc: { active: true, title: "Newest first" }
      },
      {
        key: "price_ratio",
        title: "Price ratio",
        asc: { active: true, title: "Highest discount first" }
      },
      {
        key: "price",
        title: "Price",
        desc: { active: true, title: "Most expensive first" }
      },
      {
        key: "published_at",
        title: "Publication date",
        asc: { active: true, title: "Oldest first" }
      },
      {
        key: "grams",
        title: "Weight",
        desc: { active: true, title: "Heaviest first" }
      },
      { key: "title", title: "Name", asc: { active: true, title: "Name" } },
      {
        key: "grams",
        title: "Weight",
        asc: { active: true, title: "Lightest first" }
      },
      {
        key: "vendor",
        title: "Vendor",
        desc: { active: true, title: "Vendor Z-A" }
      }
    ],
    "188222439562": [
      {
        key: "recently_ordered_count",
        title: "Popularity",
        desc: { active: true, title: "Most popular" }
      },
      {
        key: "price",
        title: "Price",
        asc: { active: true, title: "Cheapest first" }
      },
      {
        key: "inventory_quantity",
        title: "Inventory quantity",
        desc: { active: true, title: "Most available" }
      },
      {
        key: "vendor",
        title: "Vendor",
        asc: { active: true, title: "Vendor" }
      },
      {
        key: "title",
        title: "Name",
        desc: { active: true, title: "Name Z-A" }
      },
      {
        key: "published_at",
        title: "Publication date",
        desc: { active: true, title: "Newest first" }
      },
      {
        key: "price_ratio",
        title: "Price ratio",
        asc: { active: true, title: "Highest discount first" }
      },
      {
        key: "price",
        title: "Price",
        desc: { active: true, title: "Most expensive first" }
      },
      {
        key: "published_at",
        title: "Publication date",
        asc: { active: true, title: "Oldest first" }
      },
      {
        key: "grams",
        title: "Weight",
        desc: { active: true, title: "Heaviest first" }
      },
      { key: "title", title: "Name", asc: { active: true, title: "Name" } },
      {
        key: "grams",
        title: "Weight",
        asc: { active: true, title: "Lightest first" }
      },
      {
        key: "vendor",
        title: "Vendor",
        desc: { active: true, title: "Vendor Z-A" }
      }
    ]
  },
  stock_policy: "allow"
};
