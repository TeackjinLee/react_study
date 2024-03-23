module.exports = {
  name: "word-replay-setting",
  mode: "development", // 실서버스: production
  devtool: "eval",
  resolve: {
    extenstions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client.jsx"],
  },
  output: {
    path: path.join(__dirname, "dist"), // __dirname 현재폴더 // C:\users\zerocho\webstorm\react-webgame... 컴퓨터마다 다름 dist가 있는 위치
    filename: "app.js",
  },
};
