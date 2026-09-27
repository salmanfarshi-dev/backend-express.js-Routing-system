const express =require("express")
const router = express.Router()
const AuthRoute = require("./Api/index")
const Api = process.env.SECURE_API
console.log(Api);


router.use(Api,AuthRoute )

module.exports = router