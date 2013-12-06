var studentLoggedOn = new Boolean(false);
var employerLoggedOn = new Boolean(false);
var jobMailOn = new Boolean(true);

function login(name,password){
	x = document.getElementById("login");
	if (!studentLoggedOn && !employer LoggedOn){
		if (name=="student"&&password=="true"){
			studentLoggedOn = true;
		}
		else if (name=="employer"&&password=="true"){
			employerLoggedOn = true;
		}
		else {
			x.innerHTML="Invalid username or password";
		}
	}
}

function jobmailNotifications() {
	x = document.getElementById("mailControl");
	if (jobMailOn){
		jobMailOn = false;
		x.innerHTML= "	<label class=\"btn btn-default\" onclick=\"jobmailNotifications()\">On</label>
				<label class=\"btn btn-primary active\" onclick=\"jobMailNotifications()\">Off</label>";
	}
	else {
		jobMailOn = true;
		x.innerHTML = "	<label class=\"btn btn-primary active\" onclick=\"jobmailNotifications()\">On</label>
				<label class=\"btn btn-default\" onclick=\"jobMailNotifications()\">Off</label>";
	}
}