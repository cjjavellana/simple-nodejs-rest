import dotenv from "dotenv";
import express from "express";
import http from "http";
import io from "socket.io";
import WebSocket, { AddressInfo } from "ws";
import * as wsListener from "./listeners/websockets";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.locals.io = io(server);

wsListener.register(app);

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello World!\n" );
} );

// start our server
server.listen(process.env.SERVER_PORT || 8999, () => {
    console.log(`Server started on port ${(server.address() as AddressInfo).port} :)`);
});
