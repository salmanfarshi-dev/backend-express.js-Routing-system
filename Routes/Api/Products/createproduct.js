const express =require("express")
const router = express.Router()

router.get("/createproduct", (req,res)=>{
    res.send("this is createproduct");
    
})

module.exports = router