const ImageSchema = require('../dBschema/imageschema')

const getimage={
 async getImage(req, res) {
    // Extract link and get file from storage send download stream 
    const file = await ImageSchema.findOne({ uuid: req.params.uuid});
    // Link expired
    if(!file) {
        return res.status(410).json({ error: 'Link has been expired.'});
    } 
//     const response = await file.save();
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
 }
}


module.exports = getimage;