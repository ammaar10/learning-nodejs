const http = require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.end("Welcome")
    } 
    else if (req.rl==="/about"){
        res.end("Welcome to about page")
    }
    else res.end(`
    <h1>Oooops!</h1>
    <p>page not working</p>
    <a href="/" >Go back to home</a>  
        `)
})

server.listen(5000) 