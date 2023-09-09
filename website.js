const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is CodewithTanya</h1> <p> Hey this is the way to rock the world!</p>')
    } else if(req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About CodewithTanya</h1> <p> Hey this is about!</p>')
    } else if(req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    } else {
        // res.taani();
        res.statusCode = 404;
        res.end('<h1> not found</h1> <p> Hey this is about!</p>')
    }
    
});

server.listen(port, () => {
    console.log(`Server is listening on port  ${port}`)
});