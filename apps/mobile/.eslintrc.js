module.exports = {
  root: true,
  extends: '@react-native-community',
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx", ".js", ".jsx", ".json", ".native.js"]
      },
      "babel-module": {
        "extensions": [".ts", ".tsx",".js", ".jsx", ".json"],
        "alias": {
          "src": "./src",
        }
      }
    }
  }
};
