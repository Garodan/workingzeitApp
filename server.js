 var express = require('express');
 var bodyParser = require('body-parser');
 var jsonfile = require('jsonfile')
 var app = express();
 var __dirname = "C:\\\\Users\\CKgar\\Documents\\GitHub\\workingzeitApp\\";
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 app.use("/", express.static(__dirname));

 app.get('*', function(req, res) {
     res.sendFile(__dirname + 'index.html');
 });

 app.post('/', function(request, response) {
     jsonfile.writeFile('database/workers.json', request.body, function(err) {
         console.error(err)
     })
     response.send(request.body);
 });


 app.listen(8080, 'localhost');