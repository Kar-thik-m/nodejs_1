import express from "express"
import fs from "fs"
const app = express()

app.use(express.json());







app.get('/files', function (req, res) {

  const date = new Date("2023-09-05"); // Replace this with your date
  const timestamp = date.getTime().toString();
  
  const currentDate = new Date().toISOString().split('T')[0];
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const currentTimeString = `${hours}-${minutes}-${seconds}`;
  const filename = `${currentDate}_${currentTimeString}`;


  fs.writeFileSync(`${filename}.text`,timestamp,(err)=>{
    if(err) throw err;
    console.log("keep time change");
  })

  res.send(`${filename}.text`)
})

app.listen(5000 ,()=>console.log("run"))