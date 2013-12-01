window.addEventListener('load', function(){
	var meta = document.querySelector('meta[name=jobList]');
	var jobs = meta.content;
	console.log("meta is " + jobs);
	if(jobs.length>0){
		var jobArray = jobs.split("|");
		var l = jobArray.length;
		for(var i =0; i<l-1;i++){           //will always be a trailing space
			var li = document.createElement('li');
			li.innerHTML = '<a href=#>' +jobArray[i] + '</a>';
			$('#joblist').append(li);
		}
	}
}, false);