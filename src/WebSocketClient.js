const WebSocketClient = new WebSocket('ws://localhost:3000/ws');

WebSocketClient.onopen = function(event) {
  console.log('WebSocket is open now.');
};

WebSocketClient.onclose = function(event) {
  console.log('WebSocket is closed now.');
};

WebSocketClient.onerror = function(error) {
  console.error('WebSocket Error: ', error);
};

export default WebSocketClient;