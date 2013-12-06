window.addEventListener('load', function(){

	var meta = document.querySelector('meta[name=jobList]');
	var jobs = meta.content;
	console.log(meta);
	//get info on jobs list from server
	console.log("here doe");
	var jobArray=jobs.split('|');
	var l = jobArray.length;
	console.log(l);
	//populate info with info from jobList
	for(var i=0; i<l-1;i++){
		var vals = jobArray[i].split(';');
		var id = vals[0];
		var title = vals[1];
		var hours = vals[2];
		var rate = vals[3];
		console.log("appending");
		var entry = '<a #href="#" id="'+ id +'"" class="list-group-item listbox"><h4 class="list-group-item-heading">'+title+'</h4><p class="list-group-item-text">'+hours+' hours per week || '+rate+'</p></a>';
		$('#jobList').append(entry);
	}
});