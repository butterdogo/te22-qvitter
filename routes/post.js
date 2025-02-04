import express from "express"
import pool from "../db.js"

const router = express.Router()

router.get("/post", async (req, res) => {

    const [user] = await pool.promise().query(`select * from user;`)

    res.render('post.njk', {
    user: user
    })
})

router.post('/tweet', async (req, res) => {
    const { author_id, message } = req.body
  
    const [result] = await pool.promise().query('INSERT INTO tweet (author_id, message) VALUES (?, ?)', [author_id, message])
    

    res.redirect('/')
})



export default router