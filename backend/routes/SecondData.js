import express  from "express";
import mongoose from "mongoose";
import bodyparser from 'body-parser'

const app=express();

mongoose.connect('mongodb+srv://biswassoumya17:qs9tMFDGuXcqOKHM@cluster11.zd2b0.mongodb.net')
.then(()=>{
    console.log("Mongodb connected successfuly");
})
.catch((error)=>{
    console.log("error",error);
})

const schemaOne = new mongoose.Schema({},{strict:false});
const yourmodel= mongoose.model('comments',schemaOne);

app.use(express.json());
app.get("/api/data",async(req,res)=>{
    try {
        const data= await yourmodel.find();
        res.status(200).json({
            data,
            message:"Fidn all data"
        })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});