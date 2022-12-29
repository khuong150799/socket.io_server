const saveDataService = require('../service/saveDataService')
const {validationResult} = require('express-validator')
// const { validationResult } = require('express-validator');

exports.saveData = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.send(errors)
        return
    }
    const data = {
        image_id : req.body.image_id,
        content_id:req.body.content_id
    }
    saveDataService.saveData(data,(err,data)=>{
        if(err){
            res.send('thất bại')
            return
        }
        res.send(data)
    })
}