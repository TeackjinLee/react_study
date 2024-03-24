const path = require("path");

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
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), // __dirname 현재폴더 // C:\users\zerocho\webstorm\react-webgame... 컴퓨터마다 다름 dist가 있는 위치
    filename: "app.js",
  },
};
