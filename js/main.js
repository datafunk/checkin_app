(function () {
	"use strict";

	var teams = [
			{"teamName": "Team1"},
			{"teamName": "Team2"}
		],
		users = [
			{"userId": "987", "userName": "Imad", "teamName": "Team1"},
			{"userId": "986", "userName": "Pete", "teamName": "Team1"},
			{"userId": "985", "userName": "Imad2", "teamName": "Team2"},
			{"userId": "984", "userName": "Pete2", "teamName": "Team2"},
			{"userId": "983", "userName": "Imad3", "teamName": "Team3"},
			{"userId": "982", "userName": "pete3", "teamName": "Team3"}
		],
		checkins = [
			{"userId": "987", "date": "2015-10-26", "yesterday": "Ate pie", "today": "will do the same", "blockers": "exist, but hey"},
			{"userId": "986", "date": "2015-10-26", "yesterday": "Ate pizza", "today": "will do different", "blockers": "exist, but hey"},
			{"userId": "985", "date": "2015-10-26", "yesterday": "Ate salad", "today": "will do something", "blockers": "exist, but hey"},
			{"userId": "987", "date": "2015-10-27", "yesterday": "Ate hot dogs", "today": "will do whatever", "blockers": "exist, but hey"},
			{"userId": "986", "date": "2015-10-27", "yesterday": "Ate cookies", "today": "will do, promise", "blockers": "exist, but hey"},
			{"userId": "985", "date": "2015-10-27", "yesterday": "Ate cake", "today": "will do if have to", "blockers": "exist, but hey"},
			{"userId": "987", "date": "2015-10-28", "yesterday": "Drunk coke", "today": "will do, NOT!", "blockers": "exist, but hey"},
			{"userId": "986", "date": "2015-10-28", "yesterday": "Drunk beer", "today": "will do, do do do do do", "blockers": "exist, but hey"},
			{"userId": "985", "date": "2015-10-28", "yesterday": "Drunk soda", "today": "ha!?", "blockers": "exist, but hey"},
			{"userId": "987", "date": "2015-10-29", "yesterday": "Drunk limonade", "today": "will try", "blockers": "exist, but hey"},
			{"userId": "986", "date": "2015-10-29", "yesterday": "Drunk water", "today": "will do or will not", "blockers": "exist, but hey"},
			{"userId": "985", "date": "2015-10-29", "yesterday": "Drunk coffee", "today": "will do the same again", "blockers": "exist, but hey"}
		],
		userInputs = {};

	function setMaxDate() {
		var max_date = new Date();
    	var yyyy = max_date.getFullYear().toString();
	    var mm = (max_date.getMonth() + 1).toString(); // getMonth() is zero-based
	    var dd = max_date.getDate().toString();
	    var date_str = yyyy + '-' + mm + '-' + dd;
	    $('#date').attr('max', date_str);
	    $('#date').attr('value', date_str);
	}

	function readData () {

	}

	function writeData () {
		localStorage.setItem('checkin_app', {
			teams: teams,
			users: users,
			checkins: checkins
		});
	}

	function clearFields () {
		$("#yesterday").val("");
		$("#today").val("");
		$("#blockers").val("");
	}

	function populateTeams () {
		let html = "";

		_.each(teams, function(team) {
			html += "<option value=\"" + team.teamName + "\">" + team.teamName + "</option>";
		});

		return html;
	}

	function populateUsers (teamName) {
		var html = "",
			usersArray = _.where(users, {teamName: teamName});

		_.each(usersArray, function (user) {
			html += "<option value=\"" + user.userId + "\">" + user.userName + "</option>";
		});

		return html;
	}

	function populateList () {
		userInputs = {
        	selectedDate: $('#date').val(),
        	selectedUser: $('#users').val(),
        	selectedTeam: $('#teams').val()
        }

		var found = _.where(checkins, {userId: userInputs.selectedUser, date: userInputs.selectedDate});

		if (found.length) {
			$("#yesterday").val(found[0].yesterday);
			$("#today").val(found[0].today);
			$("#blockers").val(found[0].blockers);
		}
	}

	function saveCheckin () {
		var teamName,
			userId,
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


	setMaxDate();

	$("#teams").append(populateTeams());

	$('#teams').on('change', function(e){
        $("#users").html(populateUsers($('#teams').val()));

        clearFields();
        populateList();
    });

    $('#users').on('change', function(e){
    	clearFields();
        populateList();
    });

	$('#date').on('change', function(e){
        clearFields();
        populateList();
    });

    $('#checkin').on('click', function(e){
    	saveCheckin();
    });

})();
