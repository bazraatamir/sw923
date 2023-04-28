const express = require('express');
const router = express.Router();
const{getTodo,postData,deleteData}= require('../controller/todoController')

router.route('/').get(getTodo).post(postData);
router.route('/:id').delete(deleteData)
module.exports = router
//mvc
//user username email password
//post title image description