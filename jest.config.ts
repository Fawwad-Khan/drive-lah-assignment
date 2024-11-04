import type { Config } from "jest";
export default async (): Promise<Config> => {
  return {
    transform: {
      "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  };
};
