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
enable it by following the procedure in the image below. Select "New" >>
"More" >> "Connect More Apps". Search for "Google script" and select
"Connect" when the apps is retrieved.

![Enable Google Script Image](/imgs/img_01.png)
