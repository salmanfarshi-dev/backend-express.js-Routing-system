const express =require("express")

const router = express.Router()

router.get("/login", (req,res)=>{
  res.send("Now I am login page");
  
} )

module.exports = router