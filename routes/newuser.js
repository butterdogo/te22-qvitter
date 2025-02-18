import express from "express"
import pool from "../db.js"

const router = express.Router()

router.get("/newuser", async (req, res) => {

    res.render('newuser.njk', {
    
    })
})

router.post('/user', async (req, res) => {
    const { name } = req.body
  
    const [result] = await pool.promise().query('INSERT INTO user (name) VALUES (?)', [name])
    const [tweets] = await pool.promise().query(`SELECT tweet.*, user.name FROM tweet JOIN user ON tweet.author_id = user.id;`)

    res.redirect("/")
   
})



export default router