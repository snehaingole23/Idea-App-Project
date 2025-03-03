/**
 * this wil  hold the schema for the     user
 * it   explain the different fields of use and how it will be stored in the mongodb
 */

const mongoose = require("mongoose"); //method

const userSchema = new mongoose.Schema({
  name: {
    //name is field
    type: String,
    required: true, //true constraint
  },

  userId: {
    type: String,
    required: true,
    unique: true,
  },

  password : {

    type : String,
    required : true
  },
  email : {

  type : String,
  required : true,
  unique : true,
  minLength : 10,
  lowercase : true

  },

  userType : {
    type : String,
    required : true,
    default : "CUSTOMER",
    enum : ["CUSTOMER","ADMIN"]

  }

},{timestamps : true});

/**
 * define the collection name where it will be stored
 */


    module.exports = mongoose.model("User", userSchema);  //create collection user