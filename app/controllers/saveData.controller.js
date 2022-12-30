const saveDataService = require('../service/saveDataService')
const {validationResult} = require('express-validator')
// const { validationResult } = require('express-validator');

exports.saveData = (req,res)=>{
    console.log(req.query);
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.send(errors)
        return
    }
    const data = {
        user : req.body.user,
        content:req.body.content
    }
   
    // saveDataService.saveData(null,(err,data)=>{
    //     if(err){
    //         res.send('thất bại')
    //         return
    //     }
    //     res.send(data)
    // })
}