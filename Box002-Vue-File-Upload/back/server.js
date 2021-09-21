const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")

const app = express()
app.use(express.urlencoded({extended: true, limit: "50mb"}));

app.use(fileUpload())

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    optionsSuccessStatus: 200
}))

app.post("/post",async (req, res, next) => {
    console.log(req.files)
    // mvで保存できる
    // ヤベェ！！！
    await req.files.file.mv("./files/"+req.files.file.name)
    res.json({message:"アップロード完了！！！！"})
})


app.listen(3000)