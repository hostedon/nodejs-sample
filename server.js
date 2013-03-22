fs = require('fs')

fs.readFile('/root/environment.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  jsonobj = JSON.parse(data);
  port = jsonobj['PIGEON_HTTP_PORT'];

  console.log(port);


  var ip   = "0.0.0.0";
  var http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  }).listen(port, ip);

  console.log("Server running at http://" + ip + ":" + port);

});
