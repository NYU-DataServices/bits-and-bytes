
export default async function(eleventyConfig) {  
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}






