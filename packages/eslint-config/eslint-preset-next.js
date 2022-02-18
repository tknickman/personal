module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/all",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    next: {
      rootDir: [
        "apps/info/",
        "apps/parked/",
        "apps/teknologist/",
        "packages/ui/",
        "packages/utils/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
