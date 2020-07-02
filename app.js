const Koa = require('koa');
const router = require('./router/router')
const bodyParser = require('koa-body')
const cors = require('koa2-cors')

var app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes())

console.log("服务启动:http://localhost:2020")
app.listen(2020)