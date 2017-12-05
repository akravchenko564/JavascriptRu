var user = prompt('Who are you?');

if (user.toLowerCase() == 'Admin'.toLowerCase()) {
	var password = prompt('Enter password');
	if (password == 'Loki') {
		alert('Wellcome!');
	}	
	else if (password.toLowerCase() == 'Cancel'.toLowerCase()) {
		alert('Canceled');
	}
	else {
		alert('Not correct password');
	}
}
else if (user.toLowerCase() == 'Cancel'.toLowerCase()) {
	alert('Login canceled');
}
else {
	alert('Unknown user');
}