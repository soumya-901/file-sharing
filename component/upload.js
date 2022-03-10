const ImageSchema = require('../dBschema/imageschema')
require('dotenv').config();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');


let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/') ,
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
              cb(null, uniqueName)
    } ,
});

let imageupload = multer({ storage, limits:{ fileSize: 1000000 * 100 }, }).single('image'); //100mb
const imageUpload={
   upload(req,res){
    imageupload(req, res, async (err) => {
        if (err) {
          return res.status(500).send({ error: err.message });
        }
        const findimage = await ImageSchema.findOne({imagename:req.body.imagename});
        if(findimage)
        {
           return res.status(409).json({error:"such image is already exit"})
        }
          const file = new ImageSchema({
              imagename:req.body.imagename,
              filename: req.file.filename,
              uuid: uuidv4(),
              path: req.file.path,
              size: req.file.size
          });
          const response = await file.save();
        //   console.log(response)
          return res.status(200).json({ file: `${process.env.APP_BASE_URL}/api/${response.uuid}` });
        });
   }
}
module.exports=imageUpload;