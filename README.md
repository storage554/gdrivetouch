# gDriveTouch

*Automatically set the last updated time of all you Google Drive files
older than a given time to now!*

## Introduction

This repository provides 2
[Google scripts](https://www.google.com/script/start/) that will modify
the "Last modified" date of the file that are older than 950 days (the
threshold can easily be modified).

Use at your own risk and please read the section about known lmitations.

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
"Connect" when the apps is retrieved.

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
service and enable "Drive API" by turning the toglle to "on".

![Enable Drive API](/imgs/img_04.png)

### Running the gDriveTouch

