function gDriveTouch() {
	//Logger.clear();
	console.time(label); // Starts the timer.
	var todayDate = new Date();
	var todayTime = todayDate.getTime();
	var files = DriveApp.getFiles();
	while (files.hasNext()) {
		var file = files.next();
		var	lastUpdate = new Date(file.getLastUpdated());
		if (todayTime - lastUpdate.getTime() >= 82080000000) { // 82080000000 milliseconds = 950 days ~ 2.6 years
			//Logger.log('%s %s', file.getName(), file.getLastUpdated());
			console.info('%s %s', file.getName(), file.getLastUpdated());
			Drive.Files.touch(file.getId());
		}
	}
	console.timeEnd(label); // Stops the timer, logs execution duration.
}
