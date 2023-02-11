const express = require('express')
const router = express.Router()
const { records, managed_records } = require("../controller/controller")

// to fetch the data from database
router.get("/records", records)

// to managed data 
router.get("/managed-records", managed_records)






module.exports = router;