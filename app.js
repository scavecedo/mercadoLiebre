const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve("./public")));

const port = process.env.PORT || 3000

app.listen(port,() => console.log(`Server corriendo en port ${port}`));
app.get ("/", (req,res) => {
    res.sendFile(path.resolve("./views/home.html"));
})
app.get ("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
})
app.get ("/login", (req,res) => {
    res.sendFile(path.resolve("./views/login.html"));
})