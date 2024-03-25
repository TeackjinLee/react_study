const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "word-replay-setting",
  mode: "development", // 실서버스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // entry에 app따로 하나하나 설정하기 힘듬 이를 위해 .js, .jsx같이 설정한것을 찾아와 entry app에 넣어줌
  },

  entry: {
    app: ["./client"],
  },

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
                  browsers: ["> 1% in KR"], //browserslist에서 확인가능
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"), // __dirname 현재폴더 // C:\users\zerocho\webstorm\react-webgame... 컴퓨터마다 다름 dist가 있는 위치
    filename: "app.js",
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: { directory: path.resolve(__dirname) },
    port: 9000,
    hot: true,
  },
};
