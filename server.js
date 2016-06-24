var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path')

var id = 7;
var data = {
    1: { id:1, firstName:"Son", lastName:"Iophi" , email:"jIopr@gmail.com" },
    2: { id:2, firstName:"Kon", lastName:"sdasda" , email:"jqsdas@gmail.com" },
    3: { id:3, firstName:"Ill", lastName:"qsdasdas" , email:"j12esa@gmail.com" },
    4: { id:4, firstName:"Ich", lastName:"lasdao" , email:"joasla.@gmail.com" },
    5: { id:5, firstName:"Que", lastName:"saldjp" , email:"jsnow@gmail.com" },
    6: { id:6, firstName:"Niq", lastName:"Bellow" , email:"jBellow@gmail.com" },
    7: { id:7, firstName:"Mon", lastName:"Iophi" , email:"jsnow@gmail.com" }

}

app.use(bodyParser.json());
// app.use(express.static('/public'));


app.set('views', path.join(__dirname, 'public/templates')); // Convenience since it's the fault anyway.
app.use(express.static('public'));
// app.use('public/img',express.static(path.join(__dirname, 'public/img')));
// app.use('dist/js',express.static(path.join(__dirname, 'public/dist/js')));
// app.use('dist/css',express.static(path.join(__dirname, 'public/dist/css')));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {});
});


app.listen(3500);
