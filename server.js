var connect = require('connect'),
    directory = './';

connect()
  .use(connect.static(__dirname + '/.')).listen(3000);

console.log('Listening on port 3000');