const express = require('express');
const mysql = require('mysql2'); // 引入 mysql2 套件
const cors = require('cors'); // 處理跨域請求

const app = express();
const port = 3001;

app.use(cors({
  origin: "http://localhost:3000", // 允許的前端來源
  methods: "GET,POST",             // 允許的 HTTP 方法
  credentials: true                // 允許攜帶 cookie 等憑證
}));
// 啟用 CORS
app.use(cors());

// 資料庫連接設定
const db = mysql.createConnection({
  host: 'my-backend-db.cyurdpyeb4gn.us-east-1.rds.amazonaws.com', // 正確的 RDS 端點
  user: 'admin',               // 你的 MySQL 使用者名稱
  password: 'f131861913',   // 你的 MySQL 密碼
  database: 'question_db'      // 你的資料庫名稱
});

// 測試資料庫連線
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// 建立一個 API 端點來隨機抽題
app.get('/api/questions', (req, res) => {
    const query = 'SELECT * FROM questions ORDER BY RAND() LIMIT 1'; // MySQL 隨機抽 1 題
    db.query(query, (err, result) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
            return;
        }
        res.json(result[0]); // 回傳隨機題目
    });
});

// 啟動後端伺服器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
