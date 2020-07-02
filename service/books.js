const sqlActions = require('../lib/mysql');

/* 查询数据库实例 */
async function findBooks(bookName,author){
    let sql = `select * from books where bookName='${bookName}' and author='${author}'`;
    return sqlActions.sqlActions(sql).then(res => {
        return {
            msg:'获取成功',
            code:200,
            data:res
        }
    })
}


module.exports = {
    findBooks
}