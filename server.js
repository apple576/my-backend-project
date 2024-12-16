const express = require('express');
const cors = require('cors');

const app = express();

// 啟用 CORS 中間件
app.use(cors());

// 其他路由或設定
app.get('/api/questions', (req, res) => {
    res.json({
        question: "這是一個範例問題？",
        option1: "選項1",
        option2: "選項2",
        option3: "選項3",
        option4: "選項4",
    });
});

// 啟動伺服器
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
