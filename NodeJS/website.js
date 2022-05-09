const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1> This is NodeJS tutorial.</h1> <p>Lets get started.</p>')
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About NodeJS tutorial.</h1> <p>Lets get started.</p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Page not found!</h1>')
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`)
})