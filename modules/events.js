const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title:{
    type:String
  , required:true
  } ,
  img: {
    data: Buffer,
    contentType: String
  },
  event:{
    type:String
    , required:true
  } ,
  venue:{
    type:String
    , required:true
  } ,
  date:{
    type:Date
    , required:true
  } ,
  price:{
    type:Number
    , required:true
  } ,
  descrip:{
    type:String
    , required:true
  },

},{
  timestamps:true
});

const Event = mongoose.model('event', eventSchema, 'events');

module.exports = Event;
