const express = require("express");

const app = express();

const ENV = process.env.ENV_VALUE || "No env set";
const HOSTNAME = process.env.HOSTNAME || require("os").hostname();

app.get("/", (req, res) => {
    res.json({
        message: "Hello from Simple App (Node)",
        env: ENV,
        container: HOSTNAME
    });
});

module.exports = app;
