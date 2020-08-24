const { emit } = require('process');

const app=require('http').createServer();
const server=require('socket.io')(app);

app.listen(5000);

server.on('connect',(client)=>{
    client.on('send message',(data)=>{
        server.emit('boast message',{message:data.message})
    })
})