# Bloom surplus-food prototype

This version adds a browser-only community surplus-food prototype to the existing Jekyll/GitHub Pages site.

## Added

- Searchable/filterable community board on `/get-food/`
- Leaflet + OpenStreetMap map with approximate Kobe pickup areas
- Four clearly labeled demo listings
- Surplus-food submission form on `/donate/#list-food`
- Browser `localStorage` support so a visitor can create and then view a demo listing on the same device/browser
- Responsive and accessible styles for the new components
- Safety copy discouraging publication of private home addresses

## Important limitation

GitHub Pages cannot save shared form submissions by itself. The prototype stores new listings only in the current visitor's browser. To make listings visible to everyone, replace the localStorage functions in `assets/js/bloom-food.js` with a database/API such as Supabase or Firebase.

## Files changed

- `_layouts/page.html`
- `get-food.md`
- `donate.md`
- `assets/css/main.css`
- `assets/js/bloom-food.js` (new)
