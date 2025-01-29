const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const dotenv = require('dotenv');
const Signup = require("./models/signupSchema");
const bcrypt=require("bcrypt")
const cors = require("cors")
const jwt=require("jsonwebtoken")
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

mdb.connect(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB Connection Successful");
}).catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
});

const verifyToken=(req,res,next)=>{
    console.log("Middleware is Trigerred")
    var token = req.headers.authorization
    if(!token) {res.send("Request Denied")}
    try{
const user=jwt.verify(token,process.env.SECRET_KEY)
console.log(user)
req.user = user
    }catch(err) {
        console.log(err)
        res.send("Error in Token")
    }
    next()
}
app.get('/', (req, res) => {
    res.send("Welcome to backend my friend\nYour roller coaster starts now!\nFasten your codebase so you can catch up with what's being taught.");
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/json", verifyToken,(req, res) => {
    console.log("Inside Json Route")
res.json({message:"This is a Middleware Check",user:req.user.userName})
})

app.post('/signup', async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;
    var hashedPassword= await bcrypt.hash(password,10)
   // console.log(hashedPassword)
    try {
        const newSignup = new Signup({
            firstName:firstName,
            lastName:lastName,
            userName:userName,
            email:email,
            password:hashedPassword
        });
        await newSignup.save();
        res.status(201).send("SignUp Successful");
    } catch (err) {
        res.status(400).send("SignUp Unsuccessful");
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Signup.findOne({ email });
        //console.log(user)
        if (user) {
            const payload={
email:user.email,
userName:user.userName
}
            const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1hr"})
            console.log(token)
            var isPasswordCorrect= await bcrypt.compare(password, user.password)
            console.log(password,user.password);
            if (isPasswordCorrect) {
            res.status(200).json({message:"Login Successful",IsLoggedIn:true,token:token});
        }
        else{
            res.status(200).json({message:"Login Unsuccessful",IsLoggedIn:false});
        }
        }
         else {
            res.status(401).json({message:"User not found please signup!",IsLoggedIn:false});
        }
    } catch (err) {
        res.status(500).json({message:"Error during login"});
    }
});

app.get('/getsignupdet', async (req, res) => {
    try {
        const signUpdet = await Signup.find();
        res.status(200).json(signUpdet);
    } catch (err) {
        res.status(500).send("Error fetching signup details");
    }
});

app.post('/updatedet', async (req, res) => {
    try {
        const updateRec = await Signup.findOneAndUpdate(
            { userName: "abi2006" },
            { $set: { userName: "abi06" } }
        );
        if (!updateRec) {
            return res.status(404).send("Record not found");
        }
        console.log(updateRec)
        res.json("Record Updated");
    } catch (err) {
        res.status(500).send("Error updating record");
    }
});

app.post('/delete', async (req, res) => {
    try {
        const deleteRec = await Signup.findOneAndDelete(
            { userName: "abi06" },
        );
        if (!deleteRec) {
            return res.status(404).send("Record not found");
        }
        console.log(updateRec)
        res.json("Record Deleted");
    } catch (err) {
        res.status(500).send("Error deleting record");
    }
});

app.listen(3001, () => {
    console.log("Server Started");
});
