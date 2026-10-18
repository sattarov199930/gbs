# Global Business Services

A React site for Global Business Services, the Tashkent consulting firm established in 2002. Copy and project records follow the firm’s public materials (gbs.uz and its Devex profile).

## See it on your computer

You need [Node.js](https://nodejs.org), which includes `npm`.

```bash
cd path/to/gbs
npm install
npm run dev
```

Vite prints a local address, usually http://localhost:5173. Open that in a browser.

Other commands:

```bash
npm run build     # production files in dist/
npm run preview   # serve the production build
npm run lint
```

## Where to edit

- `src/data/content.js` — words, projects, services, phone numbers
- `src/pages` — one file per page
- `src/components` — navigation, footer, shared pieces
- `src/styles/site.css` — the visual system

The contact and careers forms open an email to info@gbs.uz. They do not store messages on this website.
