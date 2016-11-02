var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var count=0;
app.get('/count',function(req,res){
    count=count+1;
   res.send(count.toString());
});

var names=[];
app.get('/sub',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});
app.get('/ui/:id/comments', function (req, res)
{
  //url type: ui/3/comments?comment=... here id = 3
  var id=req.params.id;
  var id_no=parseInt(id,10);//convertin id containg string type  value to int type decimal value
  var comment=req.query.comment;
  if (comment!=="")
    {list[id_no].push(comment);}
  //returning only the row containing the comments from current page as JSON string represntation of that row,stored in a 2-D array
  res.send(JSON.stringify(list[id_no]));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate[articleName]);
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
