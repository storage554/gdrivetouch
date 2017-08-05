function gDriveTouch() {
	Logger.clear();
	var files = DriveApp.getFiles();
	while (files.hasNext()) {
		var file = files.next();
		todayDate = new Date();
		lastUpdate = new Date(file.getLastUpdated());
		if (todayDate.getTime() - lastUpdate.getTime() >= 82080000000) { // 82080000000 milliseconds = 950 days ~ 2.6 years
			Logger.log('%s %s', file.getName(), file.getLastUpdated());
			Drive.Files.touch(file.getId());
		}
	}
}
