module.exports = {
  stories: [
    "../../../apps/**/*.stories.mdx",
    "../../../packages/**/*.stories.mdx",
    "../../../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      // add support for mjs (need dist here because of local packages/)
      test: /\.mjs$/,
      include: [/node_modules/, /dist/],
      type: "javascript/auto",
    });
    return config;
  },
};
