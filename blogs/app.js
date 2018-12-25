//setup
var express = require('express');
var app = express();
app.use('/static', express.static("public"));
// mongo db
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blogs");
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
// create schema
var Schema = mongoose.Schema;
var postSchema = new Schema({body: String});
var Post = mongoose.model('Post', postSchema);

//Routes
app.get("/", (request, response) => {
  Post.find({},(error, posts) => {
    response.render('index', {posts: posts});
  })
})

app.post('/addPost', (request,response)=>{
  var postDate = new Post(request.body);
  postDate.save().then(result => {
    console.log(request.body);
    response.redirect('/');
  }).catch(error =>{
    response.status(400).send("unable to save data");

  });
});
//Listen to port
app.listen(3000,'0.0.0.0', () => {
  console.log("Server listening on 3000");
})
