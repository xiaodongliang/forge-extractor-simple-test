import credentials from './credentials.js'
import express from 'express'
import mzfs from 'mz/fs'
import path from 'path'
import Forge from 'forge-apis'
import rimraf from 'rimraf'
 

import ExtractorSvc from './ExtractorSvc'

module.exports = function() {

  const router = express.Router() 

  //process of extract SVF package
  router.get('/:urn', async (req, res) => {
    
        try { 

          const urn = req.params.urn  
 
          const oAuth2TwoLegged = new Forge.AuthClientTwoLegged(
            credentials.client_id,
            credentials.client_secret,
            Array.isArray(credentials.scope) ? credentials.scope : [credentials.scope])

          const getToken = await oAuth2TwoLegged.authenticate(); 
    
          // name model to download 
          const filename = urn +'-svf';

          // Get Extractor service
          const extractorSvc = new ExtractorSvc();
    
          // target path to download SVF
          const dir = path.resolve(__dirname,
            './data/'+filename);

          console.log(dir)
    
          // perform download
          const files = await extractorSvc.download(
            getToken, urn, dir)
    
          // target zipfile
          const zipfile = dir + '.zip'
    
          // zip all files
          await extractorSvc.createZip(
            dir, zipfile + '.tmp', filename, files)
    
          mzfs.rename(zipfile + '.tmp', zipfile)
    
          // remove downloaded resources directory
          //rmdir(dir) //this method does not work at my side. so use rimraf instead
          rimraf(dir, function () { console.log('remove temp folder done'); });
           
          //send the file name and status to the client
          res.json({'status':'done','filename':filename+'.zip'}); 
          
        } catch (ex) {
    
          console.log(ex)
          res.status(ex.statusCode || 500)
          res.json({'status':'error','err':ex})
        }
      })

   //the route to download the SVF package   
  router.get('/download/:filename', async (req, res) => {

    const filename = req.params.filename
    const dir = path.resolve(__dirname,
      './data/'+filename);
    res.download(dir,filename)
    
  })
 
        
  return router
}


