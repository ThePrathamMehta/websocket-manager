import { WebSocketServer } from 'ws';
import { IncomingMessage } from 'http';
import url from 'url';
import jwt from 'jsonwebtoken';
import type { JwtToken } from '../common/types';



const websocket = new WebSocketServer({ port: Number(process.env.PORT!) || 8000 });

websocket.on('connection', (ws, req: IncomingMessage) => {

  const { query } = url.parse(req.url!, true);

  const token = query.token as string | undefined;

  if (!token) {
    ws.send('Please send user token');
    ws.close();
    return;
  }

  const userInfo = jwt.verify(token, process.env.JWT_SECRET!) as JwtToken;

  ws.on('open', () => {
    console.log('connected');
  });

});
