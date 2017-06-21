const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(function(request, response, next) {
  console.log('in our middleware');

  next();
});

// app.use(function(request, response, next) {
//   // console.log(`Request received on ${ new Date() }`);
//   request.timeStamp = new Date();
//   next()
// });

function dateRequested({ getOnly = true, errorIf = false, body = false, ignore = false } = {}) {
  console.log(getOnly, errorIf, body, ignore);

  return function(request, response, next) {
    if(ignore){
      return next();
    }
    if (getOnly) {
      if (request.method !== 'GET') {
        let error = null;
        if (errorIf) {
          error = new Error('This Method is not supported!');
        }

        return next(error);
      }
    }
    if (body) {
      request.body.timeStamp = new Date();
    } else {
      request.timeStamp = new Date();
    }

    // handle body

    next();
  }
}

// app.use(dateRequested({ body: true, getOnly: false }));



app.get('/', dateRequested(), function(req, res){
  console.log(req.timeStamp);
  console.log('arrive at this point!!!');
  res.render('index');
});



app.post('/', dateRequested({ getOnly: false, body: true }), function(req, res){
  console.log(req.body);
  console.log(req.timeStamp);
  //console.log(`Request received on ${ new Date() }`);

  const names = ['Jason', 'Marty', 'Selvi'];

  names.push(req.body.name);

  res.render('result', { names });
});

app.listen(port, () => console.log(`listening to server on ${port}`));




/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 cookies
*                 parameters
*                 protocol
*                 route
*                 url
*/
