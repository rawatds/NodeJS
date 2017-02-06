console.log("Welcome to Node JS !!!");

var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.use('/assets', express.static('assets'));
// OR
//app.use('/assets', function(req, res, next){
//    console.log(" assets : " + req.url);
//    next();
//});

app.get('/', function(req, res){
    res.render('index')
});

app.get('/contacts/', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});


app.get('/contacts/:id', function(req, res){
    res.send("This is contact page for: " + req.params.id);
});


app.get('/profiles/:name', function(req, res){
    var data = {age:42, dept: 'Java', email:'dsrawat123@gmail.com', 
                hobbies: ['singing', 'programming', 'driving', 'swimming']} ;

    res.render('profiles', {data : data, name: req.params.name});
});
app.listen(3000);
console.log("The server is started at port 3000");
