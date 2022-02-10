//const tsconfig = require("./tsconfig.test.json")
const moduleNameMapper = require("tsconfig-paths-jest")({
  "compilerOptions": {
    "paths": {
      "@node-di-example/services": [
        "./__test__/mocks/services"
      ],
    },
  },
})

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper,
};
