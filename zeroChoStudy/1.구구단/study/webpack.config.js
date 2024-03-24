const path = require("path");

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
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), // __dirname현재 폴더 + dist
    filename: "app.js",
  }, // 출력
};
