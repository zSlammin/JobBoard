var express = require('express');
var app = express();

var anyDB = require('any-db');
var jobsConn = anyDB.createConnection('sqlite3://jobs.db');
var infoConn = anyDB.createConnection('sqlite3://jobsinfo.db');
var engines = require('consolidate');
app.engine('html', engines.hogan);
app.set('views', __dirname + "/templates");
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function(request, response){
	//get information for top var in list. Populate variables based on that.
	var jobsList = new Array();
	var q = "SELECT * FROM jobs";
	var i =0;
	var allJobs = jobsConn.query(q);
	console.log(allJobs);
	allJobs.on('row', function(row){
		jobsList[i] = row;
		i++;
	})
	allJobs.on('end', function(){
		var l = jobsList.length;
		console.log(l);
		var jobStr="";
		for(var j=0; j<l; j++){
			var row = jobsList[j];
			jobStr+= row.id + ";" + row.title +";" +row.hours +";" + row.rate+"|";
		}
		response.render("home.html", {jobs: jobStr });
	});
	
});
app.get('/jobmail', function(request, response){
		response.render("jobmail.html");
});

app.get('/account', function(request,response){
	response.render("studentAccount.html");
})
app.get('/job/:id', function(request, response){
	response.status='200';
	var id = request.params.id;
	var q = "SELECT * FROM Jobs WHERE id="+id+"";
	var jobInfo = infoConn.query(q);
	var json;
	jobInfo.on('row', function(row){
		console.log("row found for " + id);
		json = {PhoneNumber: row.PhoneNumber, WorkLocation: row.WorkLocation, EmailAddress:row.EmailAddress, PrimaryContact: row.PrimaryContact, EndDate: row.EndDate, StartDate: row.StartDate, TimeFrame: row.TimeFrame, HourlyRate: row.HourlyRate, Hours: row.Hours, Openings: row.Openings, ID: row.ID, Title:row.Title, Employer: row.Employer, DatePosted: row.DatePosted, Category: row.Category, JobType: row.JobType, JobDescription: row.JobDescription, JobRequirements: row.JobRequirements};
	})
	
	//this json will be constructed out of things received from jobs database and sent
	jobInfo.on('end', function(){
		console.log(json);
		response.json(json);
	});
	
});

app.listen(8080, function(){
	console.log('Server listening on port 8080');
});