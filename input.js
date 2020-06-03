const { connect } = require('./client');
let connection;


const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
};


const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit()}; 

  if (key === 'w') {
    setTimeout(() => {
        connection.write("Move: up");
      }, 100)
    };
  
  if (key === 'a') {
    setTimeout(() => {
      connection.write("Move: left");
    }, 100)
  };

  if (key === 's') {
    setTimeout(() => {
      connection.write("Move: down");
    }, 100)
    };

  if (key === 'd') {
    setTimeout(() => {
      connection.write("Move: right");
    }, 100)
    };

  if (key === 'r') {
    connection.write('Say: SKRRRRT'); 
    }

  };

module.exports = { setupInput };