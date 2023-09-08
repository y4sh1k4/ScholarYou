const express = require('express');
const router = express.Router();
const {addData,getData}= require('./controller/data')

router.post('/',addData)
      .get('/',getData)