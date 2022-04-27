module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  globals: {
    '@vue/vue3-jest': {
      moduleFileExtensions: ["js", "json", "vue"],
      transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
      }
    }
  }  
};
