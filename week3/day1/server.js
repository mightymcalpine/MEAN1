/**
 http instance
 content
 routing system
 port
*/
const http = require('http');
const fs = require('fs');
const server = http.createServer();


function handleHTTPRequest(request, response) {
  let body = [];

  request.on('error', console.log)
    .on('data', (chunk) => body.push(chunk))
    .on('end', function() {
      body = Buffer.concat(body).toString();

      console.log(body);

      if (request.url === '/') {
        fs.readFile('index.html', function(error, content) {
          if (error) {
            throw error;
          }

          console.log(content.toString());
          response.writeHead(200,
            {
              'Content-Type': 'text/html'
            }
          );

          response.write(content);

          response.end();
        });
      } else if (request.url === '/pizza') {
        if (request.method === 'GET') {
          try {
            const contents = fs.readFileSync('pizza.html');

            console.log('pizza', contents);

            response.end(contents);
          } catch (e) {
            response.writeHead(404, {
              'Content-Type': 'text/html',
            });

            response.end('<h1>content not found</h1>');
          }
        } else {
          response.end(body);
        }
      } else {
        const readStream = fs.createReadStream('donut.html');

        readStream.pipe(response);
      }
    });
}


server.on('request', handleHTTPRequest);


server.listen(8880, () => console.log('listening on port 8880'));
