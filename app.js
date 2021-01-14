const exp = require("express")
const app = exp()

app.get("/",(req,res) => {
    res.send("Hello, world!")
})
app.get("/:name",(req,res) => {
    let uname = req.params.name;
    console.log(uname);
    res.send(`Hello ${uname}`);
})

app.listen(3000)