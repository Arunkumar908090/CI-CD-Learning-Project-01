const express = requir("express");

const app = express();

const ENV = process.env.ENV_VALU || "No env set";
const HOSTNAME = process.env.HOSTNAME || require("os").hostname();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Simple App (Node)",
        env: ENV,
        container: HOSTNAM
    });
});

module.exports = app;
