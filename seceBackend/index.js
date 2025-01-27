const express = require('express')
const path=require('path')
const mdb=require('mongoose')
const dotenv=require('dotenv')
const Signup=require("./models/signupSchema")
dotenv.config()
const app = express()
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connection Successful")
}).catch((err)=>{
    console.log("MongoDB Connection Unsuccessful", err)
})
app.get('/', (req, res) => {
    res.send("Welcome to backend my friend\n Your Roller coster starts from now on\n Fasten your codebase so you can catchup what is been taught")
})
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"))
});


app.get('/getsignupdet',async(request,res)=>{
    varsignUpdet=await Signup.find()
    res.status(200).json(signUpdet)
})
app.listen(3001, () => {
    console.log("Server Started");
})


