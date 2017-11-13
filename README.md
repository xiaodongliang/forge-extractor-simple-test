simple Node.js test harness to consumes the code of extracting SVF package
=============================

[![node.js](https://img.shields.io/badge/node.js-6.11.1-yellow.svg)
[![Visual Code](https://img.shields.io/badge/VisualCode-1.17.2-yellowgreen.svg) 


##Description

A simple Node.js test harness to consumes the code of extracting SVF package in this blog: https://forge.autodesk.com/blog/forge-svf-extractor-nodejs

##Dependencies
* Node.js 6.11 
* Get your credentials (client key and client secret) of Forge at http://developer.autodesk.com 
* Visual Code 


##Setup/Usage Instructions

* These are the test drawings. Please use other ways to translate the source mode  to the format for Forge Viewer in advance.
* open the project in Visual Code
* input your credencials of Forge in line 6,7 of credentials.js, or reuse the enviorment paramters
* run npm install
* open localhost:3003 in the browser
* input the urn of the model and click [Request Extraction]
* when the status messgae shows 'done;, click [Download SVF Package], the dataset will be downloaded locally.

###Debug
 * to debug the project in Visual Code, uncomment line 3 in server.js and press F5 
  
# License

This sample is licensed under the terms of the [MIT License](http://opensource.org/licenses/MIT).
Please see the [LICENSE](LICENSE) file for full details.


## Written by

[Xiaodong Liang](https://github.com/xiaodongliang/) [Forge Partner Development](http://forge.autodesk.com)


