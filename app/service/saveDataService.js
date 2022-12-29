const db = require('../models')

exports.saveData = async (data,result) =>{
const dataCreate = await db.User.create(data)
console.log(dataCreate);
result(null,dataCreate)
}