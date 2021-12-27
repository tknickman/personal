module.exports = {
  extends: ["next", "prettier"],
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
