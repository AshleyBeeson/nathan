var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db'); //connects server to mongodb
var Schema = mongoose.Schema;
const MongoClient = require('mongodb');
var app = express();

//document setup for mongodb      this the schema which each bug will be mapped to. I derived this from the provided bugs_format.json file
var bugSchema = new Schema ({
    "id": Number,
    "issueId": String,
    "dateCreated": Date,
    "summary": String,
    "description": String,
    "highPriority": {type: String, Values: ['TRUE','FALSE']},
    "severity": {type: String, Values: ['HIGH','MEDIUM','LOW']},
    "reporter": String,
    "assignedUser": String,
    "actions": [
      {"user": String,
      "dateCreated": Date,
      "action": String},
      {"user": String,
        "dateCreated": Date,
        "action": String}],
    "status": {type: String, Values:['TO DO','IN PROGRESS', 'IN REVIEW', 'IN TEST', 'IN DEMO', 'DONE']}
});

const bugs = [
  {"id": 1,"issueId": "BUG-00001","dateCreated":"03/07/2017 11:15","summary": "Search function doesn't like special characters","description": "When searching for something that contains a special character the search fails","highPriority": "TRUE","severity": "MEDIUM","reporter": "QAC","assignedUser": "Un-assigned","actions": [{"user": "Ashley","dateCreated": "03/07/2017 11:06","action": "Created a git branch called searchBug"},{"user": "Ashley",
    "dateCreated": "03/07/2017 11:07","action": "Updated git branch as work had been started"}],"status": "TO DO"},
  {"id": 2,"issueId": "ISSUE-00001","dateCreated":"04/05/2017 09:23","summary": "The food in the fridge isn't cold","description": "The food that is being put in the fridge isn't being chilled. Maybe the fridge is broken","highPriority": "TRUE","severity": "MEDIUM","reporter": "QAC","assignedUser": "Un-assigned","actions": [{"user": "Gareth","dateCreated": "03/07/2017 10:00","action": "Told Someone about it"}],"status": "IN PROGRESS"},
  {"id": 3,"issueId": "ISSUE-00002","dateCreated":"01/06/2017 10:54","summary": "The pool table is slanted","description": "The pool table is slanted and is putting me off from winning all my games","highPriority": "FALSE","severity": "LOW","reporter": "Elliott","assignedUser": "Jake","actions": [{"user": "Dev","dateCreated": "04/07/2017 12:00","action": "Elliott stop complaining"}],"status": "IN REVIEW"},
  {"id": 4,"issueId": "BUG-00002","dateCreated":"06/06/2017 11:20","summary": "The filter doesn't filter properly","description": "The filter ability is only filtering on issueId and not on anything else","highPriority": "FALSE","severity": "LOW","reporter": "Ashley","assignedUser": "Ashley","actions": [],"status": "IN TEST"},
  {"id": 5,"issueId": "BUG-00003","dateCreated":"03/07/2017 11:38","summary": "Issues can be duplicated","description": "Some of the issues created are being duplicated","highPriority": "TRUE","severity": "MEDIUM","reporter": "Gareth","assignedUser": "Un-assigned","actions": [],"status": "TO DO"},
  {"id": 6,"issueId": "BUG-00003","dateCreated":"03/07/2017 11:38","summary": "Issues can be duplicated","description": "Some of the issues created are being duplicated","highPriority": "FAlSE","severity": "MEDIUM","reporter": "Gareth","assignedUser": "Un-assigned","actions": [],"status": "TO DO"}
]

var bug = mongoose.model('bug', bugSchema); //declares a new model called bug based on the schema template

bugs.map(data => {
	const bugList = new bug(data); //function that maps eahc bug in the bugs const above using the model and saves it to a collection in the database

	bugList.save();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

bugsArray = [];

app.get("/bugList", (req, res) => {//sets the page on the server where the data from the document will be called
  MongoClient.connect('mongodb://localhost/db', function(err, db) {//connects server to mongo
  	const bugsList = db.collection('bugs').find({},{'_id':0}).toArray(function(err,docs){//finds collection called bugs and returns each part of it except the auto generated mongodb _id attribute
  		bugsArray = docs;//bug details from mongodb to array
  	})
  });
  if (typeof bugsArray !== 'undefined') {
    res.json(bugsArray); //returns json file containing all the bugs
  } else {
    res.json([]); //if the bugsArray doesnt exist it returns an empty array.
  }
});



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
