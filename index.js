var express = require('express')
var app = express()
var path = require('path')

var scrape = require("./js/main.js")

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  var costalwatch = scrape.getCoastalWatchReport()
  //need a template engine
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000, function() {
  console.log('surf report listening on port 300')
})
