const http = require("http");
const data = require('./FirstApiData')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'conent-type' : 'application\json'});
    resp.write(JSON.stringify(data))
    resp.end()
}).listen(3000)