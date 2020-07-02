const book = require('../service/books')

async function getBooks(ctx,next){
    //解构 post 参数
    let {bookName,author} = ctx.request.body;   
    let data = await book.findBooks(bookName,author);
    return ctx.response.body = data;
}

module.exports = {
    getBooks
}