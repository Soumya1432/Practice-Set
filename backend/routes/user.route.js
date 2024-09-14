const express= require('express');
const router = express.Router();


router.get('/data',async(req,res)=>{
    try {
        const operation= await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await operation.json();
        return res.status(200).json({
            result,
            message:"Success",

        })
    } catch (error) {
        console.log(error.message);
    }
})

module.exports =router;