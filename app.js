const express=require('express')
const bodyParser=require('body-parser')
const { getDate } = require('./date')

let items=[]
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/',function(req,res)
{
    let day=getDate()
    res.render('list',{kindOfday:day,newListItem:items})
})

app.post('/',function(req,res)
{
    let item=req.body.newItem
    items.push(item)
    res.redirect('/')
})
const port=process.env.PORT || 3000
app.listen(port,function()
{
    console.log('Server Port:' + port)
})