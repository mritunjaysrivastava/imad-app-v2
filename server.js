var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//content
var content = {
    title: 'Merge | js & HTML',
    content: `<p>
                    It is able to reduce the code.
                </p>
                <p>
                    It decrease the number of files.
                </p>
                <p>
                    It reduce the space complextiy. 
                </p>
                <p>
                    It allow to design multiple page on one page
                </p>
                <p>
                    <a href="/">Home</a>
                </p>`
};


function html (data) {
    var title = data.title;
    var content = data.content;
    
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
                  ${content}
                </div>
            </div>
        </body>
    </html>`
    ;
    
    return html;
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
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


//article-two
app.get('/article_two', function(req, res){
    res.send("Web page linked at server side at article_two");
});

//article-one
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

//mergejshtml.html
app.get('/mergejshtml', function (req, res) {
  res.send(html(content));
});

//set port
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
