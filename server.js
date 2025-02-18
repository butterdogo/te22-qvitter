import "dotenv/config"
import express from "express"
import nunjucks from "nunjucks"
import indexRouter from "./routes/index.js"
import postRouter from "./routes/post.js"
import newuserRouter from "./routes/newuser.js"
import updateRouter from "./routes/update.js"
import bodyParser from "body-parser"

const app = express()
const port = 3000

nunjucks.configure("views", {
    autoescape: true,
    express: app,
})

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", indexRouter)
app.use("/", postRouter)
app.use("/", newuserRouter)
app.use("/", updateRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})