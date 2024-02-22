const express =require("express");
const https=require("https");
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html")
   
});


const url ="https://us5.api.mailchimp.com/3.0/lists/5f82d24bde";
    const options = {
        method: "POST",
        auth: "manas1:ee7f25cd8549944a5a5b3fed708c6239-us5"
    }

var jira_token:ATATT3xFfGF0CZBL-2qeR3NVxx7ONzTP5iNf7xwapoDN3E2nQXoimkArrMRTWTCwpA-BnCaDTm_BLm6WAt6EGw0JuEzC4Br_xfkJ_ipW3AAvfca-ho3b8VtvVb8et5ZUSaxg47090tEZ0488mL8nFt1qH9j5F-7E9XITSBI8rkgSMYA-SyyCt_A=B575DA4F
app.post("/",function(req,res){

    
    const query=req.body.cityName;
const apiKey="52cace17cf141bc38a26d7b970950dc6";
const units="metric";

const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;

https.get(url,function(response){

    console.log(response.statusCode);

    response.on("data",function(data){
        const weatherData=JSON.parse(data)
        const temp = weatherData.main.temp
        const weatherDescription= weatherData.weather[0].description
        const icon =weatherData.weather[0].icon
        const imgURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"
        

       
        res.write("<p>the weather is currently "+weatherDescription+" <p>");
        res.write("<h1>the temperature in "+query +" is" + temp +" degrees celcius.</h1>");
        res.write("<img src="+imgURL+">");

        res.send()
    })
})
    console.log("post request received.");
})

/**/


app.listen(3000,function(){
console.log("server is running on port 3000");
})
