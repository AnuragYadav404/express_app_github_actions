import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hey there, we have succesfully complete the CD integrations"
    })
})

app.listen(3000);