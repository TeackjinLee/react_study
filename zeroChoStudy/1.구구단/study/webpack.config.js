const path = require("path");
const webpack = require("webpack");

// webpack으로 인해 여러 컴포넌트 .jsx들을 하나로 합칠수 있게 됨
module.exports = {
  name: "gugudan-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  // https://github/browserslist
                  browsers: ["> 5% in KR", "last 2 chrome versions"], //browserslist에서 확인가능
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"), // __dirname현재 폴더 + dist
    filename: "app.js",
  }, // 출력
};
