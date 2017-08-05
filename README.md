# gDriveTouch

*Automatically set the last updated time of all you Google Drive files
older than a given time to now!*

## Introduction

This repository provides 2
[Google scripts](https://www.google.com/script/start/) that will modify
the "Last modified" date of the file that are older than 950 days (the
threshold can easily be modified).

Use at your own risk and please read the section about known
limitations.

## gDriveTouch

Running this script will iteratively look at all the files in your
Google Drive account, determine whether their "Last updated" time is
older than the threshold and
[touch](https://developers.google.com/drive/v2/reference/files/touch)
(= set the last updated time to now).

The threshold as in the script is 82080000000 milliseconds which
corresponds to 950 days.

## gDriveTouchDir

Running this script essentially accomplishes the same thing as
gDriveTouch but on a given directory rather than on all the files in the
Google Drive account.

The folder is identified by its id. This is essentially the string in
the address bar: https://drive.google.com/drive/folders/xxxxxxxxxxxxxx,
represented here by the xxxxxxxxxxxxxx.

## How to install

### Enabling Google Script

If [Google Apps Script](https://www.google.com/script/start/), you can
enable it by following the procedure in the image below. Select "New" >
"More" > "Connect More Apps". Search for "Google script" and select
"Connect" when the application is retrieved.

![Enable Google Script Image](/imgs/img_01.png)

### Creating a new Script Project

To open a new script project, select "New" > "More" >
"Google Apps Script". A new window will open. This is your Google App
Script environment. You can change the Project title and start copying
the scripts.

![Create New Google Apps Script Project](/imgs/img_02.png)

Once the scripts have been imported, the project window will look like
the below.

![What the gDriveTouch Google Apps Project may look like](/imgs/img_03.png)

### Enabling Drive API

The
[touch](https://developers.google.com/drive/v2/reference/files/touch)
command used to modify the "Last updated" property is part of an API
called [Drive API](https://developers.google.com/drive/). To enable it,
Go to "Resources" > "Advanced Google Services", scroll down the list of
service and enable "Drive API" by turning the toggle to "on".

![Enable Drive API](/imgs/img_04.png)

### Running the gDriveTouch

You can run the script by pressing the play button or selecting "Run" >
"gDriveTouch". The first time you run a function, you have to authorize
it to access your files (the dialogue on the right-end side below will
appear).

![Run Google Apps Script](/imgs/img_05.png)

You can see the log of the files that were modified, by selecting "View" >
"Logs" from the menu

### Automatically run the script with "Triggers"

You can run scripts automatically by setting up triggers (see image
below). By default, triggers can be set hourly, weekly, monthly and so
forth. One can also set some alert in case of execution failure.

![Setting up triggers](/imgs/img_06.png)

## Known limitations

* The "Last update" timestamp can only be change to the current
date/time of server running the script, a limitation of the "touch"
function from the Drive API.

* If you are using
[Google Drive Sync](https://www.google.com/drive/download/), this
approach will not modify the timestamps on your local hardrive
(not sure why).

* If you have lots of files in your Google Drive account, you may exceed
the
[quotas](https://developers.google.com/apps-script/guides/services/quotas)
allowed.

## Future Development

There seem to be a new version of
[Drive API](https://developers.google.com/drive/v3/web/about-sdk) (v3)
that will be available. The "touch" function will be deprecated and
replaced by the
["update"](https://developers.google.com/drive/v3/reference/files/update)
with the advantage that the new timestamp will be customizable.


