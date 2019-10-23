module.exports = {
  projects: [
    {
      displayName: "client",
      preset: "ts-jest",
      globals: {
        "ts-jest": {
          tsConfig: {
            jsx: "react"
          }
        }
      },
      testEnvironment: "jsdom",
      testMatch: [
        "<rootDir>/packages/client/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/packages/client/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
      ],
      moduleDirectories: [
        "node_modules",
        "<rootDir>/packages/client/node_modules"
      ],
      moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy"
      },
      transform: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
          "jest-transform-stub"
      },
      transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.css$"
      ],
      collectCoverageFrom: [
        "<rootDir>/packages/client/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/packages/client/**/*.d.ts"
      ]
    },
    {
      displayName: "server",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/packages/server/src/**/__tests__/**/*.{js,ts}",
        "<rootDir>/packages/server/src/**/?(*.)(spec|test).{js,ts}"
      ],
      moduleDirectories: [
        "node_modules",
        "<rootDir>/packages/server/node_modules"
      ],
      transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|ts)$"],
      collectCoverageFrom: [
        "<rootDir>/packages/server/**/*.{js,ts}",
        "!<rootDir>/packages/server/**/*.d.ts"
      ]
    }
  ]
};