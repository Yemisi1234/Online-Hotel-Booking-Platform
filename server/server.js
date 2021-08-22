import express from 'express';
import fs from 'fs';

const app = express();

//route middleware
fs.readdirSync('./routes').map((val)=>
  app.use('/api', require(`./routes/${val})`)));


app.listen(8000, ()=> console.log(`server is running on port 8000`));