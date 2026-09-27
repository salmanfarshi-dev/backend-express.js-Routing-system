const express =require("express")
const router = express.Router()
const LoginAuth = require("./Auth/login")
const regisAuth = require("./Auth/registration")
const createproduct = require("./Products/createproduct")
const getproduct = require("./Products/getproduct")

router.use("/authontecation", LoginAuth)
router.use("/authontecation", regisAuth)
router.use("/products",createproduct)
router.use("/products",getproduct)

module.exports = router