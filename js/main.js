const inputs = document.querySelectorAll(".input");

function validate(){
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	if ( username == "laptop" && password == "040821"){
		alert ("Gratulacje! Za chwilę zostaniesz przeniesiony.");
		window.location = "/LosSantosZGINIE/1337/brawo.html";
		return false;
	}
	else{
		alert("Niepoprawne dane logowania.");
		}
}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
