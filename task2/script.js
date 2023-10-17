const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	console.log("aaaaaaaaa")
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	console.log("aaaaaaaaa")

	container.classList.remove("right-panel-active");
});

function saveFormData() {
	// Get form values
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	// Create an object to store form data
	var formData =[
		{
			name: name,
			email: email,
			password: password
		
		 
		}
	] ;

	var formDataJson = JSON.stringify(formData);


	localStorage.setItem('formData', formDataJson);

	alert('Regiatered successfully.');
  }
  function validlogin() {
	
	var email = document.getElementById('emaillog').value;
	var password = document.getElementById('psw').value;
  

	var items = JSON.parse(localStorage.getItem('formData'));

	for(let i =0 ;i<items.length;i++){
		if (items[i].email == email && items[i].password == password)
		{
		alert("welcome");
			
		}
		else{
			alert("your email or passord is not correct")
		}
	}
	
	}