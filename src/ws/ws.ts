import { WebSocketServer } from 'ws';

const websocket = new WebSocketServer({port : Number(process.env.PORT!)}); 

websocket.on("connection",(ws) => {

    ws.on("open",() => {

    })
    
})