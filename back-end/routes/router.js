const express = require('express');
const router =express.Router();
const apiController= require('../controllers/aqiController');
const userController= require('../controllers/userController');

router.post('/airquality/', async (req, res) => {
    apiController.setCity(req,res);
        
});
router.get('/get/:id', async (req, res) => {
    apiController.getCity(req,res);
        
});
router.post('/user/create', async (req, res) => {
    userController.createUser(req,res);
        
});
router.get('/searchistory', async (req, res) => {
    apiController.getHistory(req,res);
        
});





module.exports = router;