import http from 'http';
http.createServer((req,res)=>{
res.end('Hello world');
}).listen(3000,()=> console.log("server started at port http://localhost:3000"))