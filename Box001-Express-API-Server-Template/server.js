const SERVER_PORT = 3000
const mysql = require("mysql2/promise")

const express = require("express")
const app = express()



// Mysqlの接続設定
const mysql_config = {
    host: "HOST_NAME",
    user: "USER_NAME",
    password: "PASSWORD",
    port: 3304
}


// 簡単なSQLを一行実行してその結果をjsonで返すAPI
app.get("/test",
    async (req, res) => {
    const sql = "select * from TABLE_NAME"
    // mysql 接続
    const connection = await mysql.createConnection(mysql_config)
    try {

        const [sql_result, fields] = await connection.query(sql)
        res.json({error: false, result: sql_result})
    } catch (e) {
        console.log(e)
        res.json({error: true, message: "server error"})
    } finally {
        // コネクションを閉じる
        await connection.end()
    }
})


app.listen(SERVER_PORT)