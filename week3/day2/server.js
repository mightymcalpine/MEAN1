const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.get('/', function(req, res){
  console.log('arrive at this point!!!');
  res.render('index');
});

app.post('/', function(req, res){
  console.log(req.body);

  const names = ['Jason', 'Marty', 'Selvi'];

  names.push(req.body.name);

  res.render('result', { names });
});

app.listen(port, () => console.log(`listening to server on ${port}`));
