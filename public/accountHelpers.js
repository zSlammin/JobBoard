var first = new Boolean(true);

function experienceEdit(){
	if (first){
		var x = document.getElementById('changes1');
		x.parentNode.removeChild(x);
	
		document.getElementById("experience").innerHTML=
		"<button class=\"btn btn-default\" style=\"float:right\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title1\" style=\"resize:none;width:400px\"> Brown Group Tutor (2011 – Present)</textarea></p><p>Description: <textarea rows=\"10\" id=\"description1\" style=\"resize:none;width:400px\">Instruct underclassmen in various math, statistics and economics courses. Tutor both individuals and groups of students.</textarea></p><button class=\"btn btn-default\" style=\"float:right\" onclick=\"deleteExperience()\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title2\" style=\"resize:none;width:400px\"> The Princeton Review, SAT Instructor (Summer 2010)</textarea></p><p>Description: <textarea rows=\"10\" id=\"description2\" style=\"resize:none;width:400px\">Served as a classroom instructor and private tutor for this national test preparation company. Completed a rigorous certification/training program led by Princeton Review professionals. Led SAT prep classes and provided private instruction to students in the Bronx, NY.</textarea></p><p>Position Title (date): <textarea rows=\"1\" id=\"title3\" style=\"resize:none;width:400px\"></textarea></p><p>Description: <textarea rows=\"10\" id=\"description3\" style=\"resize:none;width:400px\"></textarea></p><button class=\"btn btn-default\" onclick=\"experienceUpdate()\">Submit</button>";
	} else {
		var title1 = document.getElementById("title1").innerHTML;
		var title2 = document.getElementById("title2").innerHTML;
		var title3 = document.getElementById("title3").innerHTML;
		var description1 = document.getElementById("description1").innerHTML;
		var description2 = document.getElementById("description2").innerHTML;
		var description3 = document.getElementById("description3").innerHTML;

		var x = document.getElementById('changes2');
		x.parentNode.removeChild(x);

		document.getElementById("experience").innerHTML= 
		"<button class=\"btn btn-default\" style=\"float:right\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title1\" style=\"resize:none;width:400px\">" + title1 + "</textarea></p><p>Description: <textarea rows=\"10\" id=\"description1\" style=\"resize:none;width:400px\">"+description1+"</textarea></p><button class=\"btn btn-default\" style=\"float:right\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title2\" style=\"resize:none;width:400px\">"+title2+"</textarea></p><p>Description: <textarea rows=\"10\" id=\"description2\" style=\"resize:none;width:400px\">"+description2+"</textarea></p><button class=\"btn btn-default\" style=\"float:right\" onclick=\"deleteExperience()\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title3\" style=\"resize:none;width:400px\">"+title3+"</textarea></p><p>Description: <textarea rows=\"10\" id=\"description3\" style=\"resize:none;width:400px\">"+description3+"</textarea></p></textarea></p><p>Position Title (date): <textarea rows=\"1\" id=\"title4\" style=\"resize:none;width:400px\"></textarea></p><p>Description: <textarea rows=\"10\" id=\"description4\" style=\"resize:none;width:400px\"></textarea></p><button class=\"btn btn-default\" onclick=\"experienceUpdate()\">Submit</button>";
	}
}

function deleteExperience(){
	var title1 = document.getElementById("title1").value;
		var title2 = document.getElementById("title2").value;
		var description1 = document.getElementById("description1").value;
		var description2 = document.getElementById("description2").value;
	document.getElementById("experience").innerHTML=
		"<button class=\"btn btn-default\" style=\"float:right\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title1\" style=\"resize:none;width:400px\">" + title1 + "</textarea></p><p>Description: <textarea rows=\"10\" id=\"description1\" style=\"resize:none;width:400px\">"+description1+"</textarea></p><button class=\"btn btn-default\" style=\"float:right\">Delete</button><p>Position Title (date): <textarea rows=\"1\" id=\"title2\" style=\"resize:none;width:400px\">"+title2+"</textarea></p><p>Description: <textarea rows=\"10\" id=\"description2\" style=\"resize:none;width:400px\">"+description2+"</textarea></p><p>Position Title (date): <textarea rows=\"1\" id=\"title3\" style=\"resize:none;width:400px\"></textarea></p><p>Description: <textarea rows=\"10\" id=\"description3\" style=\"resize:none;width:400px\"></textarea></p><button class=\"btn btn-default\" onclick=\"experienceUpdate()\">Submit</button>";
}

function experienceUpdate(){
	if (first){
		var title1 = document.getElementById("title1").value;
		var title2 = document.getElementById("title2").value;
		var title3 = document.getElementById("title3").value;
		var description1 = document.getElementById("description1").value;
		var description2 = document.getElementById("description2").value;
		var description3 = document.getElementById("description3").value;
		document.getElementById("experience").innerHTML =
		"<b><p style=\"margin-top:20px;color:black\" id=\"title1\">"+title1+"</p></b><p style=\"color:black;text-indent:30px\" id=\"description1\">"+description1+"</p>"+"<b><p style=\"margin-top:20px;color:black\" id=\"title2\">"+title2+"</p></b><p style=\"color:black;text-indent:30px\" id=\"description2\">"+description2+"</p>"+"<b><p style=\"margin-top:20px;color:black\" id=\"title3\">"+title3+"</p></b><p style=\"color:black;text-indent:30px\" id=\"description3\">"+description3+"</p>";
		first = false;
	} else {
		var title1 = document.getElementById("title1").value;
		var title2 = document.getElementById("title2").value;
		var description1 = document.getElementById("description1").value;
		var description2 = document.getElementById("description2").value;
		document.getElementById("experience").innerHTML =
		"<p style=\"margin-top:20px;color:black\"><b>"+title1+"</b></p><p style=\"color:black;text-indent:30px\">"+description1+"</p>"+"<p style=\"margin-top:20px;color:black\"><b>"+title2+"</b></p><p style=\"color:black;text-indent:30px\">"+description2+"</p>";		
	}
}

function editSkills(){

	var mySkills = 
	"<table class=\"table\"><tr>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"a\">"+document.getElementById("a").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"b\">"+document.getElementById("b").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"c\">"+document.getElementById("c").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"d\">"+document.getElementById("d").innerHTML+"</textarea></td>"+
	"</tr><tr>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"e\">"+document.getElementById("e").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"f\">"+document.getElementById("f").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"g\">"+document.getElementById("g").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"h\">"+document.getElementById("h").innerHTML+"</textarea></td>"+
	"</tr><tr>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"i\">"+document.getElementById("i").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"j\">"+document.getElementById("j").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"k\">"+document.getElementById("k").innerHTML+"</textarea></td>"+
	"<td><textarea rows=\"1\" style=\"resize:none;width:150px\" id=\"l\">"+document.getElementById("l").innerHTML+"</textarea></td>"+
	"</tr></table>";

	var x = document.getElementById('junk');
	x.parentNode.removeChild(x);

	document.getElementById("tbl").innerHTML = mySkills+"<button class=\"btn btn-default\" style=\"float:left\" onclick=\"applySkills()\">Apply Changes</button>";
	
}

function applySkills(){
	var mySkills = 
	"<table class=\"table\"><tr>"+
	"<td><text>"+document.getElementById("a").value+"</text></td>"+
	"<td><text>"+document.getElementById("b").value+"</text></td>"+
	"<td><text>"+document.getElementById("c").value+"</text></td>"+
	"<td><text>"+document.getElementById("d").value+"</text></td>"+
	"</tr><tr>"+
	"<td><text>"+document.getElementById("e").value+"</text></td>"+
	"<td><text>"+document.getElementById("f").value+"</text></td>"+
	"<td><text>"+document.getElementById("g").value+"</text></td>"+
	"<td><text>"+document.getElementById("h").value+"</text></td>"+
	"</tr><tr>"+
	"<td><text>"+document.getElementById("i").value+"</text></td>"+
	"<td><text>"+document.getElementById("j").value+"</text></td>"+
	"<td><text>"+document.getElementById("k").value+"</text></td>"+
	"<td><text>"+document.getElementById("l").value+"</text></td>"+
	"</tr></table>";

	document.getElementById("tbl").innerHTML = mySkills;
	
}

function myFunction()
{
	var x = document.getElementById("experience").action;
	document.getElementById("demo").innerHTML=x;
}