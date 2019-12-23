function gDriveTouchDir() {
	//Logger.clear();
	console.time(label); // Starts the timer.
	var folder_id;
	folder_id = "xxxxxxxxxxxxxx"; // Replace by the folder-id in your account
	ProcessFolder(folder_id);
	console.timeEnd(label); // Stops the timer, logs execution duration.
}

function ProcessFolder(folder_id) {
	var folders = DriveApp.getFolderById(folder_id).getFolders();
	var todayDate = new Date();
	var todayTime = todayDate.getTime();
	while (folders.hasNext()) {
		ProcessFolder(folders.next().getId());
	}
	var files = DriveApp.getFolderById(folder_id).getFiles();
	while (files.hasNext()) {
		var file = files.next();
		var lastUpdate = new Date(file.getLastUpdated());
		if (todayTime - lastUpdate.getTime() >= 82080000000) { // 82080000000 milliseconds = 950 days ~ 2.6 years
			//Logger.log('%s %s', file.getName(), file.getLastUpdated());
			console.info('%s %s', file.getName(), file.getLastUpdated());
			Drive.Files.touch(file.getId());
		}
	}
}
