const http = require('http');

http.createServer((request, response)=>{

response.writeHead(200, {'content-type' : 'text/plain'});
response.end("Ola Ricardo");


}).listen(3000, (err) =>{
  if (err){
    console.log(err, "erro")
  }else{
    console.log("servidor rodando na porta 3000")
  }
})
