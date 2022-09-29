const express=require('express');

const app=express();

const port = 5000;

const logger=(req,res,next)=>{
    var today = new Date();
  
    if(today.getDay() == 6 || today.getDay() == 0 && today.getHours()<9 || today.getHours()>=17) {
      return res.send("<h1>The web application is only available during working hours (Monday to Friday,  from 9 to 17)</h1>");
    }
  
    next();
  }

// app.use(express.static("public"));

app.get('/', logger,(req, res) => {
    res.sendFile(__dirname + "/public/Home page.html");
  });
  app.get('/contact', logger,(req, res) => {
    res.sendFile(__dirname + "/public/Contact us.html");
  });
  app.get('/services',logger, (req, res) => {
    res.sendFile(__dirname + "/public/Our Services.html");
  });
  app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
  });
app.listen(port,()=> console.log(`server running on port ${port}`));