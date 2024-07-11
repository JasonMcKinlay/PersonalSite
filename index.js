import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.listen(port, console.log(`Server listening on port ${port}.`));