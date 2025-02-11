import express, { query } from "express"
import pool from "../db.js"

const router = express.Router()

router.get("/", async (req, res) => {
  const [tweets] = await pool.promise().query(`
    SELECT tweet.*, user.name
    FROM tweet
    JOIN user ON tweet.author_id = user.id;`)

  res.render("index.njk", {
    title: "Qvixter",
    message: "Message from routes/index.js",
    tweets: tweets,
  })
})

router.get("/:id/delete", async (req, res) => {
  const id = req.params.id

  await pool.promise().query('DELETE FROM tweet WHERE id = ?', [id])

  res.redirect("/")
})

export default router

router.get("/:id/repost", async (req, res) => {
  const id = req.params.id

  await pool.promise().query('INSERT INTO tweet (author_id, message) VALUES (?, ?)', [author_id, message])

 res.redirect("/")
})