const Router = require('koa-router')
const book = require('./bookRoute')

let router = new Router();
router.use(book.routes());

module.exports = router;