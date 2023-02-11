console.log('fetchHtmlPartials.js');

fetch('./components/headPartial.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('headPartial').innerHTML = data;
	});

fetch('./components/aside.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('aside').innerHTML = data;
	});
fetch('./components/games.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('games').innerHTML = data;
	});
fetch('./components/user.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('user').innerHTML = data;
	});

fetch('./components/preCalibration.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('preCalibration').innerHTML = data;
	});
fetch('./components/login.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('login').innerHTML = data;
	});
fetch('./components/constellationConfiguration.html')
	.then((response) => {
		return response.text();
	})
	.then((data) => {
		document.querySelector('constellationConfiguration').innerHTML = data;
	});
