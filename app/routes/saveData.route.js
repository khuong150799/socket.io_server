const route = require('express').Router()
const {body} = require('express-validator')
const saveDataController = require('../controllers/saveData.controller')

module.exports = (app)=>{
    route.post('/save-data',[body('image_id','The image_id is not empty').notEmpty().trim(),body('content_id','The content_id is not empty').notEmpty().trim()],saveDataController.saveData)

    app.use('/api',route)
}