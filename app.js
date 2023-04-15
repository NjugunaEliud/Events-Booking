const express = require('express')
const app = express();
const bodyParser = require("body-parser")

app.use(
    express.urlencoded({ extended: true })
);
const morgan = require('morgan');
app.use(morgan('dev'));
    
app.use(express.json());

app.use(express.static('public'))
const mongoose= require('mongoose');

// image 
const multer = require('multer');


app.use(express.urlencoded({extended:true}))


app.set('view engine', 'ejs')

const dbUrl='mongodb+srv://Kamaa:Kamaa254@cluster0.5lsu4zs.mongodb.net/node?retryWrites=true&w=majority'
const Event=require('./modules/events.js')
const Advert=require('./modules/adverts.js')
mongoose.connect(dbUrl)
.then((result) =>app.listen(3000))

// .then(console.log('The db connection was successful'))
.catch((err) =>console.log(err))



app.get('/' ,(req, res)=>{
    res.redirect('/event')
})
app.get('/event',(req,res)=>{
    Event.find().sort({createdAt:1})
    .then((result)=>{
        console.log(result)
        res.render('index',{result:result})
    })
    .catch(err=> console.log(err))
  })
// app.get('/event' ,(req, res)=>{
//     res.render('index')
// })

app.get('/admin' ,(req, res)=>{
    res.render('admin',{title:"Main Page"})
})
app.get('/adverts' ,(req, res)=>{
    res.render('adverts')
})
//post
app.post('/event', (req, res) => {
    const event = new Event(req.body)
    
    event.save() 
   .then((result)=>{
    res.redirect('/event',{result:result})
   })
   .catch(err => console.log(err))
  });
  
  
// post adverts
app.post('/adverts',(req,res)=>{
    const advert= new Advert(req.body)
    advert.save()
    .then((result)=>{
        res.render('adverts',{result:result})
    })
    .catch(err=>[
        console.log(err)
    ])
})
