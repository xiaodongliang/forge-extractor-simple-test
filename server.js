//uncomment this line if you want to debug the project in Visual Code
//next, click F5 to start the debugging
import 'babel-polyfill';

import ExtractEndpoint from'./server/ExtractEndpoint'

var express = require('express');

var app = express();
var server = require('http').Server(app); 

app.use('/', express.static(__dirname+ '/www') ); 
//use the route of extractor
app.use('/svfextract',   ExtractEndpoint()); 

//set port
app.set('port', process.env.PORT || 3003);

server.listen(app.get('port'), function() {
    console.log('Server listening on port ' 
        + server.address().port);
});