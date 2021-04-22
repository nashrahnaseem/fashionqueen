// const http=require('http');
// const fs =require('fs');
// const hostname='127.0.0.1';
// const port =3000;
// const home =fs.readFileSync('index.html');
// const about =fs.readFileSync('about.html');
// const offers =fs.readFileSync('offers.html');
// const catagories =fs.readFileSync('catagories.html'); 
// const contactus =fs.readFileSync('contactus.html');
// const server =http.createServer((req,res)=>{
//     console.log(req.url)
//     url=req.url;
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     if(url='/home')
//     {
//         res.end(home);
//     }
//      else  if(url='/about')
//     {
//         res.end(about);
//     }
//     else  if(url='/offers')
//     {
//         res.end(offers);
//     }
//     else  if(url='/catagories')
//     {
//         res.end(catagories);
//     }
//     else  if(url='/contactus')
//     {
//         res.end(contactus);
//     } 
//     else{
//         res.statusCode=404;
//         req.end("<h1>404 not found</h1>");
//     }

// });
// server.listen(port,hostname,()=>{
//     console.log('serverrunninig at http://127.0.0.1:3000/');
// });
