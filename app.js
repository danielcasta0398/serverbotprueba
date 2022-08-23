const express = require('express');
const { Server } = require('socket.io')
const cors = require('cors');

const app = express();
app.use(cors())
const PORT = 4005;



const server = app.listen(PORT, () => {
    console.log(`Conectado por el puerto ${PORT}`);
})

const io = new Server( server, {
    cors:{
        origin: "*"
    }
} )

io.on("connection", (socket) => {
    console.log(socket.id);
    io.emit('hola', 'hola')
  });