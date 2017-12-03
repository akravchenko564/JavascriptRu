var user = prompt('Who are you?');

if (user == 'Admin') {
	var password = prompt('Enter password');
	if (password == 'Loki') {
		alert('Wellcome!');
	}	
	else if (password == 'Cancel') {
		alert('Canceled');
	}
	else {
		alert('Not correct password');
	}
}
 
else if (user == 'Cancel') {
	alert('Login canceled');
}

else {
	alert('Unknown user');
}