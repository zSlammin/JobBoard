window.addEventListener('load', function(){

	var meta = document.querySelector('meta[name=jobList]');
	var jobs = meta.content;
	//get info on jobs list from server
	var jobArray=jobs.split('|');
	var l = jobArray.length;
	//populate info with info from jobList
	for(var i=0; i<l-1;i++){
		var vals = jobArray[i].split(';');
		var id = vals[0];
		var title = vals[1];
		var hours = vals[2];
		var rate = vals[3];
		var entry = '<a #href="#" id="'+ id +'"" class="list-group-item listbox"><h4 class="list-group-item-heading">'+title+'</h4><p class="list-group-item-text">'+hours+' hours per week || '+rate+'</p></a>';
		$('#jobList').append(entry);
	}
});

function filter(){
	var meta = document.querySelector('meta[name=jobList]');
	var jobs = meta.content;
	var jobArray=jobs.split('|');
	var l = jobArray.length;
	$('#jobList').empty();
	for(var i=0; i<l-1;i++){
		var vals = jobArray[i].split(';');
		var id = vals[0];
		var title = vals[1];
		var hours = vals[2];
		var rate = vals[3];
		var othRate =rate.substring(1,3)
		console.log(othRate);
		if(othRate>=12){
			var entry = '<a #href="#" id="'+ id +'"" class="list-group-item listbox"><h4 class="list-group-item-heading">'+title+'</h4><p class="list-group-item-text">'+hours+' hours per week || '+rate+'</p></a>';
			$('#jobList').append(entry);
		}
	}
}