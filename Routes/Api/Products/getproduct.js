const express =require("express")
const router = express.Router()

router.get("/getproduct", (req,res)=>{
    res.send("this is getproduct");
    
})

module.exports = router