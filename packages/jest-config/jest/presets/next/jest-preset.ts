import type { Config } from "@jest/types";

const nodeConfig: Config.InitialOptions = {
  roots: ["<rootDir>"],
  transform: {
    ".(ts|tsx)$": "ts-jest",
    ".(js|jsx)$": "babel-jest",
  },
  passWithNoTests: true,
  collectCoverage: true,
  setupFilesAfterEnv: ["@tek/jest-config/dist/configs/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "<rootDir>/coverage/",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: [
    "<rootDir>/test/__fixtures__",
    "<rootDir>/node_modules",
    "<rootDir>/dist",
  ],
  preset: "ts-jest",
};

export default nodeConfig;
