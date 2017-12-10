var login = prompt('Enter login');
var message = (login.toLowerCase() == 'Vasya'.toLowerCase()) ? 'Hi' :
	(login.toLowerCase() == 'Director'.toLowerCase()) ? 'Hello' :
	(login == '') ? 'No login' : '';
alert(message);