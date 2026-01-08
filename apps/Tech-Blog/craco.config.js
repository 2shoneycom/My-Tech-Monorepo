// apps/tech-blog/craco.config.js
const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const packagesPath = path.join(__dirname, "../../packages");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        // 여기에 앱 바깥의 packages 폴더 경로를 추가해서 JSX 해석을 허용하게 함
        match.loader.include = include.concat[packagesPath];
      }

      return webpackConfig;
    },
  },
};