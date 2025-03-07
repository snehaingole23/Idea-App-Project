const express = require('express');

const serverConfig = require('./config/server.config');

const mongoose  = require('mongoose');

const dbConfig = require('./config/db.config');
 //const { init } = require('./models/user.model');
const userModel = require('./models/user.model');

const bcrypt  = require('bcrypt');

const app = express();

/**
 * logic to connect mongoDB and create an ADMIN USER 
 * 
 * need to have mongodb up and running in your local machine
 */

  mongoose.connect(dbConfig.DB_URL);
  const db = mongoose.connection ;

  db.on("error" ,()=>{
      console.log("Error while connecting to DB");

  });

  db.once("open", ()=>{

    console.log("DB is connected");

    init();
    
  })

    async function init(){

    /**
     * check if asdmin
     *  is   already  present
     */

    let admin =  await  userModel.findOne({

    
       userId : "admin"

    })

    if(admin){
      console.log("Admin user already present");
      return;
      
    }
         admin = await userModel.create(
        {
           name : "Sneha Ingole", 
           userId : "admin",
           email : "ingole123@gmail.com",
           userType : "ADMIN",
           password :  bcrypt.hashSync("Welcome1",8)
        
  });
    
   console.log(admin);
   

  }


app.listen(serverConfig.PORT, () =>{

    console.log(`server started on the port number ${serverConfig.PORT}`);
    
})