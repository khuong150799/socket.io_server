const route = require('express').Router()
const {body} = require('express-validator')
const saveDataController = require('../controllers/saveData.controller')

module.exports = (app)=>{
    route.post('/save-data',[body('user','The user is not empty').notEmpty().trim(),body('content','The content is not empty').notEmpty().trim()],saveDataController.saveData)

    app.use('/api',route)
}