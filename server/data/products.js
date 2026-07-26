/*
 * ============================================================
 *  LUPIN'S AROMATIC PRODUCT CATALOG — EASY-EDIT DATA FILE
 * ============================================================
 *  To add / change products:
 *    1. Copy one { ... } block below.
 *    2. Fill in name, price, category, description, image.
 *       - image: paste an image URL, OR drop a file into
 *         client/public/images/ and use "/images/yourfile.jpg"
 *       - featured: true  -> shows on the home page
 *    3. Save this file, then run:  npm run seed
 *  That reloads the whole catalog into the database.
 * ============================================================
 */

const products = [
  {
    name: "English Rose Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Rose petals and homemade rose oil soften skin and bring a delicate, fresh fragrance to the face. Goat milk and almond nourish and hydrate deeply, improving facial texture. Nutmeg helps reduce redness and refines skin tone for a smoother appearance.",
    image: "/images/english-rose-bar.jpg",
    featured: true,
  },
  {
    name: "Cucumber Honey Lemon Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Goat milk, glycerin and almond deeply hydrate the skin and leave the face feeling soft. Cucumber soothes and cools while tea tree oil helps control excess oil and prevent breakouts. A touch of lemon brightens the complexion for a fresh, dewy look.",
    image: "/images/cucumber-honey-lemon.jpg",
    featured: false,
  },
  {
    name: "Turmeric Glow Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Turmeric and citrus peel help reduce pigmentation and revive dull skin for a natural glow. Rosemary, lavender and tea tree oils work to calm inflammation and fight bacteria. Regular use can help fade dark spots and even out facial skin tone.",
    image: "/images/turmeric-glow.jpg",
    featured: true,
  },
  {
    name: "Neem Tea Tree Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Neem and tea tree oil work together to gently cleanse and purify, helping keep everyday blemishes at bay. A crisp, herbal bar for skin that wants to feel clean without feeling stripped.",
    image: "/images/neem-tea-tree.jpg",
    featured: false,
  },
  {
    name: "Lavender Bliss Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Lavender oil soothes and calms sensitive facial skin while promoting a relaxed mood. Goat milk and ajwain deeply nourish to keep skin soft and resilient. Tea tree oil gently clears pores and supports the prevention of occasional breakouts.",
    image: "/images/lavender-bliss.jpg",
    featured: false,
  },
  {
    name: "Carrom Seed Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Ajwain extract soothes irritation and calms sensitive facial skin. Flaxseed, rice flour and coffee gently exfoliate to reveal cleaner, brighter skin. Aloe vera and tea tree nourish while helping control excess oil and blemishes.",
    image: "/images/carrom-seed.jpg",
    featured: false,
  },
  {
    name: "Orange Apple Honey Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Carrot, orange, tomato, lemon, apple and guava leaf come together with goat milk in a fruit-forward bar that leaves skin feeling brightened and nourished from the very first wash.",
    image: "/images/orange-apple-honey.jpg",
    featured: false,
  },
  {
    name: "Saffron Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "A golden bar built to unveil your natural glow — saffron and almond oil work together to brighten and deeply nourish the skin, leaving it soft and radiant.",
    image: "/images/saffron.jpg",
    featured: true,
  },
  {
    name: "Coffee Bean & Cocoa Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Coffee oil and cocoa powder brighten skin and gently exfoliate dull cells. Vitamin E improves texture and helps reduce fine lines and dark spots. Goat milk and tea tree oil nourish the skin while aiding oil control and preventing breakouts.",
    image: "/images/coffee-bean-cocoa.jpg",
    featured: false,
  },
  {
    name: "Coffee Bean & Lavender Bathing Bar",
    price: 3000,
    category: "Bathing Bars",
    description:
      "Flaxseed extract provides deep nourishment and helps calm sensitive skin. Lemon-honey oil and coffee extract offer gentle exfoliation and boost natural glow. Goat milk and vitamin E soothe redness and keep facial skin supple.",
    image: "/images/coffee-bean-lavender.jpg",
    featured: false,
  },
  {
    name: "English Rose Gift Set",
    price: 3000,
    category: "Gift Sets",
    description:
      "A complete English Rose bathing ritual: rose shampoo, bath gel, face & body scrub and a rose bathing bar, packed in a keepsake tin.",
    image: "/images/english-rose-gift-set.jpg",
    featured: false,
  },
  {
    name: "Lemon Gift Set",
    price: 3000,
    category: "Gift Sets",
    description:
      "Our lemon bathing ritual in one box: lemon shampoo, lemon bath gel, a lemon bathing bar, natural lemon face pack and a loofa.",
    image: "/images/lemon-gift-set.jpg",
    featured: false,
  },
  {
    name: "Coffee Bean Gift Set",
    price: 3000,
    category: "Gift Sets",
    description:
      "Coffee shampoo, coffee bath gel, a coffee bean bathing bar and a face pack — a full coffee-infused routine for energised, glowing skin.",
    image: "/images/coffee-bean-gift-set.jpg",
    featured: false,
  },
];

export default products;
