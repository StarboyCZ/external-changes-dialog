An extension for Adobe Brackets editor
# External Changes Dialog

DESCRIPTION: Removing “External changes” dialog by automatically clicking on “Cancel” button.
It doesn’t affect the same named dialog about removed files.

VERSION: Tested in Jan 2021 for Brackets Editor of version 1.14.2 on Windows 10

STORY: I don’t know why, but my Brackets Editor
started to show me “External changes” dialog
even on switching applications. Maybe because
of changing my HDD to SSD, or Git extension
or changing my OS to Windows 10.

So, I created this my first plugin.

FUNCTIONALITY: It is mutation listener of body element.
It listens its childList, so on a change
it finds out the existance of that dialog
and its cancel button, and if that exists,
it will click on it.

AUTHOR:
Graphic designer
& amateur fullstack developer

Jiří Dvořák
