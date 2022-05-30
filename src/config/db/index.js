// import mongoose from 'mongoose';
const mongoose =require('mongoose')
// await mongoose.connect('mongodb://localhost/f8_education_dev');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true

        });
        console.log('ok')


    }
    catch(error){
        console.log('vaithilon')
    }
}
module.exports={connect}