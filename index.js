var express = require('express')
var app = express()
var path = require('path')
var exphbs = require('express-handlebars')

var scrape = require("./js/main.js")

app.use(express.static(path.join(__dirname, 'public')))
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}))
app.set('view engine', '.hbs')

app.get('/', function(req, res) {

  // var costalwatch = scrape.getCoastalWatchReport()
  //need a template engine

  scrape.getReports().then(function(reports) { 
  	// res.render('index', { reports: reports }); 
  	res.render('index', { coastalwatch: reports[0], swellnet: reports[1] }); 
  })

  
  // res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(3000, function() {
  console.log('surf report listening on port 300')
})
