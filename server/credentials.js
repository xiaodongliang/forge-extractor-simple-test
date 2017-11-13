
var credentials ={
 
		// Replace placeholder below by the Consumer Key and Consumer Secret you got from
		// http://developer.autodesk.com/ for the production server
		client_id: process.env.CONSUMERKEY || '<your Forge key>',
		client_secret: process.env.CONSUMERSECRET || '<your Forge secret>',
		grant_type: 'client_credentials',
		scope: ['data:read']  
} ; 

module.exports =credentials ;
