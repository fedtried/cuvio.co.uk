module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("icon.png");
  eleventyConfig.addPassthroughCopy("hero_gif.gif");
  // Note: Image files are now in _site/img/hero/ directory
  // eleventyConfig.addPassthroughCopy("hero_image.png");
  // eleventyConfig.addPassthroughCopy("hero_image_2.png");
  // eleventyConfig.addPassthroughCopy("hero_image_3.png");
  // eleventyConfig.addPassthroughCopy("mockup.png");
  // eleventyConfig.addPassthroughCopy("cuvio.png");
  // eleventyConfig.addPassthroughCopy("Cuvio_Icon.PNG");
  eleventyConfig.addPassthroughCopy("*.ico");
  eleventyConfig.addPassthroughCopy("CNAME");
  
  // Create a simple collection for hero images (following Raymond Camden's approach)
  eleventyConfig.addCollection('heroImages', collectionApi => {
    return [
      { 
        src: './img/hero/hero_image-512w.webp', 
        alt: 'Cuvio AI meal planner app showing meal planning interface',
        title: 'Meal Planning Interface'
      },
      { 
        src: './img/hero/hero_image_2-512w.webp', 
        alt: 'Cuvio AI meal planner app showing camera interface',
        title: 'Camera Interface'
      },
      { 
        src: './img/hero/hero_image_3-512w.webp', 
        alt: 'Cuvio AI meal planner app showing camera settings',
        title: 'Camera Settings'
      }
    ];
  });
  
  // Add filters for SEO
  eleventyConfig.addFilter("absoluteUrl", function(url, base) {
    return new URL(url, base).href;
  });
  
  eleventyConfig.addFilter("dateToISO", function(date) {
    return new Date(date).toISOString();
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk"
  };
};
