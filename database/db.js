const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.DB_URL;
function DbConnect() {
    
    mongoose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("data base connect successfully")
    })
    .catch((err)=>{
        console.log("error:",err);
    })
}
module.exports=DbConnect;

