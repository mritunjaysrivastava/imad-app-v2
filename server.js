var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool;  //import db-connection

//config db
var config = {
    host: 'db.imad.hausra-app.io',
    user: 'mritunjaysri',
    password: process.env.DB_PASSWORD,
    database: 'mritunjaysri',
    port: '5432'
};

//db connection establish
var pool = new Pool(config);
app.get('/test-db', function(req, res){
   pool.query('SELECT * FROM test', function(err, result){  //make a request
       if (err) {
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result));
       }
   });
   //return with response with result
});

//content details
var merge = {
    title: 'Merge | js & HTML',
    content: `<p>
                    It is able to reduce the code comlexity.
                </p>
                <p>
                    It decrease the number of files.
                </p>
                <p>
                    It reduce the space complextiy. 
                </p>
                <p>
                    It allow to design multiple page on one page.
                </p>
                <p>
                    <a href="/">Home</a>
                </p>`
};

//merge Html and java_script 
function html (data) {
    var title = data.title;
    var para = data.content;
    
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <h1>Merge | js & HTML</h1>
                </div>
                <div>
                  ${para}
                </div>
            </div>
        </body>
    </html>`
    ;
    
    return htmlTemplate;
}

//index.html
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//style.css
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

//madi.png
app.get('/ui/Profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Profile.jpg'));
});


//article-two
app.get('/article-two', function(req, res){
    res.send("Web page linked at server side at article_two");
});

//article-one
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

//mergejshtml.html
app.get('/mergejshtml', function (req, res) {
  res.send(html(merge));
});

//main.js
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

//counter
var counter=0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());                   //toString() convert int to string.
});

//set port
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});