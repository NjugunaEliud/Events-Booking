const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertSchema= new Schema({
    title:{
        type:String
      , required:true
      } ,
    datee:{
        type:Date,
        required:true
    },
    descripi:{
        type:String,
        required:true
    }
})




const Advert = mongoose.model('advert', advertSchema, 'adverts');

module.exports= Advert;