const Router = require("koa-router")
const controller = require("../controller/bookController")


const router = new Router()

/* 设置请求地址 */
router.post("/bookQuery",controller.getBooks);


module.exports = router;
