const express =require("express")
const router = express.Router()


router.get("/registration", (req,res)=>{
   res.send("Now i am registration page");
    

})

module.exports = router