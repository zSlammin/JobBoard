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
	$(".list-group-item").click(function(){
		console.log("clicked" + this.id)
		var reqJobInfo = new XMLHttpRequest();
		var url = '/job/' +this.id;
		reqJobInfo.open('GET', '/job/' + this.id, true);
		console.log("preload");
		reqJobInfo.addEventListener('load', function(e){
			console.log("loaded");
			if(reqJobInfo.status=200){
				var content = reqJobInfo.responseText;
				var data = JSON.parse(content);
				console.log(data.stuff);
			}else{
				alert("job info request failed");
			}
		}, false);
		reqJobInfo.send(null);
	});
});

function handleClick() {
    this.value = (this.value == 'Show Advanced Search Options' ? 'Hide Advanced Search Options' : 'Show Advanced Search Options');
}

$(window).scroll(function() { 
    if ($(window).scrollTop() <= 156) { 
        $(jobdetail).offset({top: 231});
        $(jobdetail).css({overflow: "hidden"});
    } else {
        $(jobdetail).css({top: 60, bottom: 0, overflow: "scroll"});
    }
});

function tagClick(tag) {
    var searchbar = document.getElementsByName('searchtext')[0];
    searchbar.value = searchbar.value + 'tag:"' + tag + '"; ';
};

function athletics() {
	var joblist = $(jobList).children();
	var listlen = joblist.length;
	document.getElementsByName('searchtext')[0].value="";
	for (var i=5;i < listlen;i++){
		joblist[i].remove();
	}
	console.log($(joblist).offset().top);	
	//$(window).scrollTop($(results).offset().top);
	$('html,body').animate({
        scrollTop: ($(joblist).offset().top)},
        'medium');
}
