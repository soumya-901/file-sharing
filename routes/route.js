const router = require('express').Router();
const upload = require("../component/upload")
const getimage = require("../component/getimage")
//endpoint for uploading files
router.post("/upload",upload.upload);
router.get('/:uuid',getimage.getImage)


module.exports=router;