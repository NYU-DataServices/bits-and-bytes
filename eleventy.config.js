import { readdirSync } from 'fs'

const passthroughFiles = readdirSync('newsletters');

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('newsletters')
  eleventyConfig.addGlobalData("passthroughFiles", passthroughFiles)
  
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






