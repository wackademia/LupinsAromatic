# Lupin — Catalog Website (MERN)

A minimal, modern **catalog** site for the Lupin beauty brand. Browse-only —
no cart, no checkout. Built with **MongoDB · Express · React · Node**.

```
lupin/
├── server/   → Express API + MongoDB (product data)
│   └── data/products.js   ← EDIT THIS to add / change products
└── client/   → React (Vite) front-end
```

## 1. Prerequisites
- Node.js 18+
- MongoDB running locally (or a MongoDB Atlas connection string)

## 2. Set up the backend
```bash
cd server
npm install
cp .env.example .env        # then edit MONGODB_URI if needed
npm run seed                # loads products from data/products.js into MongoDB
npm run dev                 # API on http://localhost:5000
```

## 3. Set up the frontend (new terminal)
```bash
cd client
npm install
npm run dev                 # site on http://localhost:5173
```
The Vite dev server proxies `/api` to the backend automatically.

## 4. Adding your products
Open **`server/data/products.js`**. Each product is a simple block:

```js
{
  name: "Rosewater Toner",
  price: 22.0,
  category: "Skincare",     // groups it in the shop filter
  description: "Alcohol-free facial mist.",
  image: "/images/rosewater.jpg",  // or a full https:// URL
  featured: true,           // true = also shown on the home page
}
```

**For your own photos:** drop the image files into
`client/public/images/` and reference them as `/images/yourfile.jpg`.

After editing, re-seed:
```bash
cd server && npm run seed
```

## 5. Build for production
```bash
cd client && npm run build   # outputs client/dist
```
Serve `client/dist` from any static host and point it at your deployed API.
