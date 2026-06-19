
// ===========================================================================
//  APP REGISTRY
//  ---------------------------------------------------------------------------
//  This is the ONLY file you edit to list a new app on the homepage.
//
//  For each app:
//    1. Save its page as:  apps/<slug>.html
//    2. Add one object to the APPS array below.
//
//  Fields:
//    slug      (required)  filename without .html  -> apps/<slug>.html
//    name      (required)  app name
//    tagline   (required)  one sentence: what it does for the user
//    icon      (optional)  path to an icon image (e.g. "apps/img/spendly_icon_1024.png")
//    initials  (optional)  2 chars shown in the icon tile if no icon image
//    badge     (optional)  small status pill, e.g. "On the Store"
//    features  (optional)  up to 3 short benefit lines shown on the card
// ===========================================================================
 
window.APPS = [
  {
    slug: "spendly",
    name: "Spendly",
    tagline: "A private money tracker that keeps your finances on your own PC.",
    icon: "apps/img/spendly_icon_1024.png",
    initials: "S",
    badge: "On the Store",
    features: [
      "Completely offline — your data never leaves your device",
      "Import bank statements from CSV in seconds",
      "Dashboard, reports, trends and category breakdowns"
    ]
  },
  {
    slug: "dineops",
    name: "DineOps",
    tagline: "Restaurant staff management that runs entirely on your Windows PC.",
    icon: "apps/img/dineops_icon.png",
    initials: "DO",
    badge: "On the Store",
    features: [
      "Schedule employees, clock in/out, and track tips — all offline",
      "Automated labor cost insights and plain-English recommendations",
      "No subscription, no cloud account, no data leaving your machine"
    ]
  },
  {
    slug: "currencypulse",
    name: "Currency Pulse",
    tagline: "Live exchange rates, price alerts, a travel planner and crypto in one dashboard.",
    icon: "apps/img/currencypulse_icon.jpg",
    initials: "CP",
    badge: "On the Store",
    features: [
      "Live rates for 30+ currencies with 10-day trend charts",
      "Price alerts that notify you when a rate crosses your target",
      "Travel budget planner and live crypto prices built in"
    ]
  },
  {
    slug: "inventoryhq",
    name: "Inventory HQ",
    tagline: "Offline inventory, sales and staff management for the small shop running on one PC.",
    icon: "apps/img/inventoryhq_icon.png",
    initials: "IH",
    badge: "On the Store",
    features: [
      "Items, sales, employees, tasks and tools — all in one offline app",
      "Decision engine compares months and tells you what to do next",
      "One-time purchase, no subscription, no cloud account"
    ]
  },
{
    slug: "pdfworkbench",
    name: "PDF Workbench",
    tagline: "Local PDF toolkit — edit, merge, split, password, and sign — all on your PC.",
    icon: "apps/img/pdfworkbench_icon.png",
    initials: "PW",
    badge: "On the Store",
    features: [
      "Edit, merge, split, convert, password-protect, and sign PDFs — all offline",
      "Everything stays on your PC — no cloud uploads, no accounts, no subscriptions",
      "Native Windows app that opens instantly and keeps your documents private"
    ]
}
];