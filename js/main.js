(function () {
	
	var teams = [],
		users = [],
		checkins = [];

	function readData () {
		
	}

	function writeData () {
		localStorage.setItem('checkin_app', {
			teams: teams,
			users: users,
			checkins: checkins
		});
	}

})();