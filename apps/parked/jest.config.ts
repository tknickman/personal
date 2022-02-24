import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  preset: "@tek/jest-config/dist/presets/app-next",
};

export default createJestConfig(customJestConfig);
