/* 
This is unused right now, as we're using the play CDN to include tailwind styles
for storybook. This skips the purge step, and allows all styles to be available in 
storybook for testing.
*/

module.exports = {
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/icons/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/utils/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
