// 引入必要套件
const express = require("express");
const cors = require("cors");

// 初始化 Express 應用
const app = express();
const port = 3001;

// 設置 CORS 中間件，允許來自 http://localhost:3000 的請求
app.use(cors({
  origin: "http://localhost:3000", // 允許的前端來源
  methods: "GET,POST",             // 允許的 HTTP 方法
  credentials: true                // 允許攜帶 cookie 等憑證
}));

// 定義 API 路由
app.get("/", (req, res) => {
  res.send("後端服務運行中！");
});

app.get("/api/questions", (req, res) => {
  res.json({
    question: "這是一個範例問題？",
    option1: "選項1",
    option2: "選項2",
    option3: "選項3",
    option4: "選項4"
  });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
