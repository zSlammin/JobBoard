var express = require('express');
var app = express();

var anyDB = require('any-db');
var jobsConn = anyDB.createConnection('sqlite3://jobs.db');

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
app.get('/job/:id', function(request, response){
	response.status='200';
	var id = request.params.id;
	//this json will be constructed out of things received from jobs database and sent
	var json = {stuff: "things"};
	response.json(json);
	console.log("json response sent");
});

app.listen(8080, function(){
	console.log('Server listening on port 8080');
});