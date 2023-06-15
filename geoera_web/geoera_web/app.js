const http = require("http")
const port = 3000

const server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type": "text/html"})
})

server.listen(port, function(error) {
    if (error) {
        console.log("something went wrong", error)
    } else {
        console.log("Server is listening on port" + port)
    }
})