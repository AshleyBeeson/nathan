//bugsSchema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');

var Schema = mongoose.Schema;

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

var bug = mongoose.model('bug', bugSchema);

bugs.map(data => {
	const bugList = new bug(data);

	bugList.save();
})
