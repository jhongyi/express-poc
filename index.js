const express = require('express');

const app = express();
// 建立 Router 物件
const router = express.Router();

// 在每一個請求被處理之前都會執行的 middleware
router.use(function (req, res, next) {
  console.log('checking jwt token ...');
  // 輸出記錄訊息至終端機
  console.log(req.method, req.url);

  // 繼續路由處理
  next();
});

// 首頁路由 (http://localhost:8080)
router.get('/', function(req, res) {
  res.send('home page!');
});

// 另一張網頁路由 (http://localhost:8080/about)
router.get('/about/:name', function(req, res) {
  const name = req.params.name;
  res.send(`Hello! ${name}`);
});

app.route('/login')
  .get(function(req, res) {
    res.send('this is the login form');
  })
  .post(function(req, res) {
    res.send('processing the login form!');
  });

// 將路由套用至應用程式
app.use('/', router);
app.listen(3000);
