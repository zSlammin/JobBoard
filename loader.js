var anyDB = require('any-db');
var jobsConn = anyDB.createConnection('sqlite3://jobs.db');

jobsConn.query('CREATE TABLE jobs (id INT, title TEXT, hours TEXT, rate TEXT)')
	.on('end', function(){
		console.log('Made table!');
	});

for (var i=0;i<20;i++){
	var numericId = i.toString();
	jobsConn.query('INSERT INTO jobs VALUES ($1, $2, $3, $4)', [i, 'Dummy Job Title' + numericId, 
								'Dummy Hours ' + numericId, 'Dummy rate ' + numericId]).on('end', function(){
									console.log('added a row')          
								});
}