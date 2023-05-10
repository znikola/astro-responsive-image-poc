# Astro Image Optimization

Shows how to _properly_ display responsive images on the web, using Astro's `assets` image optimization.

It achieves this with the `OptimizedImage.astro` component, which is just a convenient wrapper around Astro's `Image` component.

## 🚀 How to

There a couple of key points:

1. Make sure to [always](https://web.dev/patterns/web-vitals-patterns/images/responsive-images/) set the `width` and `height` of the `img.` Astro's `Image` components ensures this.
2. Create different image sizes, and make sure all of them have the same aspect ratio. For example, create small (300px width), medium (800px width) and large (1200px width).
3. Use `srcset` attribute to specify at which screen width to serve which image. This is achieved using the `buildSrcSet` util function.
4. By default, the image won't stretch beyond its original width. The reason is because we are explicitly supposed to set the `width` attribute on the `img` tag. To allow the image to stretch over its original width, use the CSS:

```css
img {
  /* make sure the image takes the full width of the parent container */
  width: 100%;
  /* maintains the aspect ratio */
  height: auto;
  /* image won't stretch beyond this value */
  max-width: 1200px;
}
```

5. To serve the images in the next-gen format (i.e. `webp`), we are using Astro's `Image` component.
6. If using the as the _hero_ image which takes the LCP, the Lighthouse / web vitals / page speed will report if its being lazily loaded. To fix this, set the `loading="eager"` attribute.

## 🧞 Lighthouse

To see the lighthouse score:

| Command                                                | Action                              |
| :----------------------------------------------------- | :---------------------------------- |
| `npm ci`                                               | Installs dependencies               |
| `npm run build && npm run preview`                     | Build and run                       |
| `npm run lighthouse http://localhost:3000 - -- --view` | Run the lighthouse on the given URL |
