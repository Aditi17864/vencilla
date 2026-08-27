# Vencilla — MERN Stack Website

A premium B2B pharmaceutical API supplier website, rebuilt as a full MERN
application (MongoDB, Express, React, Node.js) from the original WordPress
brief.

## Structure

```
vencilla-mern/
├── client/     React 18 + Vite + Tailwind CSS frontend
└── server/     Express + MongoDB (Mongoose) REST API
```

## Design system

- **Colors:** deep pharma navy (`#0F2A3D`), scientific teal accent (`#0E7C86`),
  gold trust accent (`#C9A24B`), off-white background (`#F6F7F5`).
- **Type:** Newsreader (display serif), Inter (body sans), IBM Plex Mono
  (data/spec labels — used for CAS numbers, molecular formulas, certifications).
- **Signature motif:** a "Certificate of Analysis" style data tag (`.coa-tag`)
  used throughout the site to reinforce the regulatory/scientific identity.

## Pages implemented

Home, About, Products (search + category filter), Product Detail (dynamic by
slug), Quality & Manufacturing, Global Presence, Insights/Blog (list +
detail), Contact, Request a Quote (multipart form with file upload).

## Getting started

### 1. Backend

```bash
cd server
cp .env.example .env     # adjust MONGO_URI if needed
npm install
npm run seed              # populates MongoDB with sample products & posts
npm run dev                # starts API on http://localhost:5000
```

Requires a running MongoDB instance (local `mongod`, Docker, or MongoDB
Atlas connection string in `MONGO_URI`).

### 2. Frontend

```bash
cd client
npm install
npm run dev                # starts Vite dev server on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:5000`
(see `client/vite.config.js`). The frontend also ships with local fallback
data (`client/src/data/`) so pages render sample content even before the
API/database is running.

### 3. Production build

```bash
cd client
npm run build               # outputs static files to client/dist
```

Serve `client/dist` via any static host (or have Express serve it) and
point `VITE`-time `/api` calls at your deployed API origin.

## API reference

| Method | Endpoint                | Description                          |
|--------|--------------------------|---------------------------------------|
| GET    | `/api/products`          | List products (`category`, `q`, `featured`, `limit` query params) |
| GET    | `/api/products/:slug`    | Single product by slug                |
| POST   | `/api/products`          | Create product (admin/dashboard)      |
| PUT    | `/api/products/:slug`    | Update product                        |
| DELETE | `/api/products/:slug`    | Delete product                        |
| GET    | `/api/blog`               | List articles (`category`, `q`, `limit`) |
| GET    | `/api/blog/:slug`         | Single article by slug                |
| POST   | `/api/contact`            | Submit general enquiry                |
| POST   | `/api/quote`               | Submit quote request (multipart, optional `document` file) |

## Notes on the original WordPress brief

This build ports the approved visual identity and section structure from
the WordPress/Elementor brief into React components, with products and blog
posts sourced from MongoDB instead of WordPress custom post types — so
content stays just as easy to manage via a small internal admin tool (not
included) or directly through the REST endpoints above, while giving you a
fully custom, framework-free-of-WordPress codebase.
