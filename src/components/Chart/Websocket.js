// import React, { useEffect, useState } from "react";
// import useWebSocket, { ReadyState } from "react-use-websocket";

// interface Message {
//   data: string;
// }

// const WebSocketComponent: React.FC = () => {
//   const [messageHistory, setMessageHistory] = useState<Message[]>([]);
//   const { sendMessage, lastMessage, readyState } = useWebSocket(
//     "ws://localhost:8080",
//   );

//   useEffect(() => {
//     if (lastMessage !== null) {
//       setMessageHistory((prev) => prev.concat(lastMessage));
//     }
//   }, [lastMessage]);

//   return (
//     <div>
//       <button onClick={() => sendMessage("Hello")}>Send Message</button>
//       <div>
//         {messageHistory.map((message, idx) => (
//           <p key={idx}>{message.data}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WebSocketComponent;

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        const data = JSON.parse(message);
        console.log(`Received: ${data.payload} 
    from client ${data.clientId}`);
        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Client ${data.clientId} 
        sent -> ${data.payload}`);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});