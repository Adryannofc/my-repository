Run a performance check on the built site.

1. Run `npm run build` and check for errors
2. Check the output in `dist/`:
   - Total HTML file count and sizes
   - Total CSS bundle size
   - Total JS bundle size
   - List any JS files > 10KB (potential optimization targets)
3. Verify font files are bundled (not loaded from external CDN)
4. Check that `dist/sitemap.xml` exists and contains both /en/ and /pt-br/ URLs
5. Check that `dist/robots.txt` exists
6. Verify meta tags in the built HTML (title, description, og:image, hreflang)
7. Report total build size and any performance concerns

Target: JS < 50KB gzipped, CSS < 15KB gzipped.
