const net = require('net'); 

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
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
