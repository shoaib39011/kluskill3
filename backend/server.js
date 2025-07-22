//import modules
const express = require("express");
const cors = require("cors");
const jwt = require("jwt-simple");
const {MongoClient} = require("mongodb");


//create rest object
const app = express();
//where app object used to develop api's Ex. Get, Post, Put, Delete


app.use(cors());

app.use(express.json());


//create client object
const excelRClient = new MongoClient("mongodb+srv://admin:admin@excelr.dykn3.mongodb.net/?retryWrites=true&w=majority&appName=ExcelR");

//create login request
app.post("/login",async (req,res)=>{
    await excelRClient.connect();
    
    const obj = await excelRClient.db("miniproject").collection("login").findOne({"username":req.body.username, "password":req.body.password});

    if(obj == null){
        res.json({"login":"fail"});
    }else{
        res.json({"login":"success"});
    }
});




//create get request
app.get("/laptops", async (req,res)=>{
    await excelRClient.connect();
    if(Object.keys(req.query).length == 0){
        const arr = await excelRClient.db("miniproject").collection("laptops").find().toArray();
        res.json(arr);
    }else{
        let pid = req.query.pid;
        let record = await excelRClient.db("miniproject").collection("laptops").findOne({"pid":parseInt(pid)});
        res.json(record);
    }
});

//mobiles
app.get("/mobiles",async(req,res)=>{
    await excelRClient.connect();
    if(Object.keys(req.query).length==0){
        const arr=await excelRClient.db("miniproject").collection("mobiles").find().toArray();
        res.json(arr);
        return;
    }
    else{
        let pid = req.query.pid
        let record = await excelRClient.db("miniproject").collection("mobiles").findOne({"pid":parseInt(pid)})
        res.json(record);
    }
});

//headphones
app.get("/headphones",async(req,res)=>{
    await excelRClient.connect();
    if(Object.keys(req.query).length==0){
        const arr=await excelRClient.db("miniproject").collection("headphones").find().toArray();
        res.json(arr);
        return;
    }
    else{
        let pid = req.query.pid
        let record = await excelRClient.db("miniproject").collection("headphones").findOne({"pid":parseInt(pid)})
        res.json(record);
    }
});



//assign port no
app.listen(8080,()=>{
    console.log(`server listening port no.8080`);
});