const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const Courses = new Schema({
    name: {type:String,minlength:10},
    description: {type:String,minlength:10},
    image:{type:String}
  });

  module.exports=mongoose.model('Course',Courses)
