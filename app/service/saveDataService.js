const db = require('../models')

exports.saveData =  (socket) =>{

   
        console.log('user connect');
        socket.on("hello", async(data) => {
            __io.emit("hello",data);
          console.log(data); // world
          const dataCreate = await db.User.create({user:data.user[0],content:data.content})
          console.log(dataCreate);
          
        });
    
}