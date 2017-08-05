function gDriveTouchDir() {
	Logger.clear();
	folder_id = "xxxxxxxxxxxxxx"; // Replace by the folder-id in your account
	ProcessFolder(folder_id);
}

function ProcessFolder(folder_id) {
	var folders = DriveApp.getFolderById(folder_id).getFolders();
	while (folders.hasNext()) {
		ProcessFolder(folders.next().getId());
	}
	var files = DriveApp.getFolderById(folder_id).getFiles();
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
