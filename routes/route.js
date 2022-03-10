const router = require('express').Router();
const upload = require("../component/upload")
const getimage = require("../component/getimage")
//endpoint for uploading files
router.post("/upload",upload.upload);
router.get('/:uuid',getimage.getImage)
router.get('/', function(req, res){
    // Rendering home.ejs page
    res.send('home');
})

module.exports=router;