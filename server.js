const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.urlencoded({extended:false}))


app.get('/',(req, res)=>{
    res.sendFile(__dirname+ "/index.html")
})

app.post('/',(req, res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1/(num2*num2);
    res.send("Ther answer is "+result);
})

app.listen(3000, ()=>{
    console.log("Server has started on port 3000");
});
