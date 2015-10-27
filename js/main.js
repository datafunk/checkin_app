(function () {
	"use strict";
	
	var teams = [
			{"teamName": "Team1"},
			{"teamName": "Team2"}
		],
		users = [
			{"userId": "987", "userName": "Imad", "teamName": "Team1"},
			{"userId": "986", "userName": "Imad", "teamName": "Team1"},
			{"userId": "985", "userName": "Imad", "teamName": "Team2"}
		],
		checkins = [
			{"userId": "987", "date": "26/10/2015", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "986", "date": "26/10/2015", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "985", "date": "26/10/2015", "yesterday": "", "today": "", "blockers": ""},
			{"userId": "986", "date": "27/10/2015", "yesterday": "", "today": "", "blockers": ""}
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
		let html = "";

		_.each(teams, function(team) {
			html += `<option value="team.teamName">team.teamName</option>`;
		});
	}

	function populateUsers (teamName) {
		var html = "",
			users = _.where(users, {teamName: teamName});

		_.each(users, function (user) {
			html += `<option value="user.userId">user.userName</option>`;
		});

		return html;
	}

	function populateList (user, date) {
		var found = _.where(checkins, {userId: user, date: date});

		console.log(found);
	}

	function saveCheckin () {
		var userId,
			date,
			yesterday,
			today,
			blockers;

		checkins.push({
			userId,
			date,
			yesterday,
			today,
			blockers
		});
	}



	populateTeams();
	populateUsers();

	populateList("987", "26/10/2015");

})();