module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
