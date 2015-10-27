(function () {
	
	var teams = [
			{"teamId": "1233", "teamName": "Team1"},
			{"teamId": "1233", "teamName": "Team2"}
		],
		users = [
			{"userId": "987", "userName": "Imad"},
			{"userId": "987", "userName": "Imad"},
			{"userId": "987", "userName": "Imad"}
		],
		checkins = [
			{"userId": "987", "date": "", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "987", "date": "", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "987", "date": "", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "987", "date": "", "yesterday": "", "today": "", "blockers": ""}
		];

	function readData () {

	}

	function writeData () {
		localStorage.setItem('checkin_app', {
			teams: teams,
			users: users,
			checkins: checkins
		});
	}

	function populateTeams () {
		_.each(teams, function(team) {
			console.log(team);
		});
	}

	function populateUsers (teamName) {
		_.each(users, function (user) {
			console.log(user);
		});
	}


	populateTeams();
	populateUsers();

})();