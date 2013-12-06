window.addEventListener('load', function(){
	for(var i=0; i<20;i++){
		var entry = '<a href="#" class="list-group-item listbox"><h4 class="list-group-item-heading">Here\'s a Job</h4><p class="list-group-item-text">{{Job Title}} || {{Pay}} || {{Employer}}</p></a>';
		$('#jobList').append(entry);
	}
}); 