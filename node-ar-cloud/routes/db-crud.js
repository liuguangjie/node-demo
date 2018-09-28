const dbCrud = require('mariadb');


const opts = {
    host: '127.0.0.1',
    database: 'node_test',
    user:'root',
    password: 'root',
    connectionLimit: 10
}

const pool = dbCrud.createPool(opts)

const connection = pool.getConnection()

//拼接where
const whereJoin = function(where) {
    var whereString = ""
    if (where) {
        whereString += " where "
        var keys = Object.keys(where)
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i]
            whereString += " " + keys[i] + "="
            if (typeof where[k] === 'string') {
                whereString += "'" + where[k] + "' "
            } else if (typeof where[k] === 'number') {
                whereString += where[k] + " "
            }

            if (i != (keys.length - 1)) {
                whereString += " and "
            }
        }

    }

    return whereString

}

//拼接 limit
const limitJoin = function(limit) {
    let limitString = ""
    var start = 0
    var end = limit['end'] || 5
    if(limit['start'])  {
        start = (limit['start'] - 1) * end
    }
    limitString += " limit " + start +"," + end
    return limitString
}

module.exports = {
    getConnection: connection,

    queryAll: function (table, whereObj) {
        whereObj = whereObj || {}
        return new Promise(function (resolve, reject) {
            connection.then(function (conn) {
                const result = {}
                var sql = "select * from ".concat(table)
                var whereString  = whereJoin(whereObj['where'])
                var limitString = limitJoin(whereObj)

                sql = sql.concat(whereString).concat(limitString)

                conn.query(sql)
                    .then(rows => {
                    if ('meta' in rows) {
                        delete rows['meta']
                    }
                    result.rows = rows

                    return new Promise(function (resolve, reject) {
                        var countSql = "select count(1) as count from ".concat(table)

                        conn.query(countSql)
                            .then(rows => {
                                result.count = rows[0]['count'] || 0
                                resolve(result)
                            })
                    })
                })
                    .then(result => {

                        resolve(result)
                    })

            })
        })
    },

    //查询一条记录
    queryOne: function (table, whereObj) {
        whereObj = whereObj || {}
        return new Promise(function (resolve, reject) {
            connection.then(function (conn) {
                const result = {}
                var sql = "select * from ".concat(table)
                var whereString  = whereJoin(whereObj['where'])

                sql = sql.concat(whereString)

                conn.query(sql)
                    .then(rows => {
                        result.one = rows[0]
                        resolve(result)
                    })

            })
        })
    },


}


