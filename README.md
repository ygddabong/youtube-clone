# YouTube Clone

A YouTube UI clone built with React — home feed, sidebar navigation, and a search results page.

Originally built in 2020 as a React learning project; modernized in 2026.

## Tech stack

- React 19 (function components + hooks)
- React Router 7
- MUI (Material UI) icons and components
- Vite

## Features

- Home page with a grid of recommended videos
- Sidebar navigation
- Search bar that routes to `/search/:searchTerm` and shows the query on the results page
- Channel and video rows on the search results page

Video data is mocked in [`src/data.js`](src/data.js); there is no backend or YouTube API call.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Requires Node.js 20+.

## 2026 update

- Migrated from Create React App to Vite
- React 16 → 19, React Router 5 → 7, Material UI v4 → MUI v9
- Fixed routing (`<Router>` was used where `<Route>` was needed, so the search page never rendered)
- Fixed `class`/`classname` JSX attribute typos
- Moved repeated mock data into `src/data.js` and render lists with `map`
- Removed an unused Firebase config file that contained an API key
