const net = require('net');
const constants = require('./constants');

const connect = function(IP, PORT) {
  console.log(IP);
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });

  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    conn.write('Name: CJH');
 
    console.log("Successfully connected to the server.");
  });

  return conn;
}

module.exports = { connect };

