const express=require('express');
const DbConnect = require("./database/db");
const routes = require("./routes/route")
const PORT = process.env.URL;
const app = express();

// Data base connection
DbConnect();
// Connect with routes
app.use(express.json());
app.use('/api',routes);



app.listen(PORT,()=>{
    console.log(`listen on ${PORT}`)
})