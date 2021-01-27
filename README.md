An extension for Adobe Brackets editor
# External changes dialog
Remove “External changes” dialog by clicking on “Cancel” button

Tested in Jan 2021 for Brackets Editor of version 1.14.2 on Windows 10

I don’t know why, but my Brackets Editor
started to show me “External changes” dialog
even on switching applications. Maybe because
of changing my HDD for SSD, or Git extension
or changing my OS to Windows 10.

So, I created this my first plugin.

It is mutation listener of body element.
It listens its childList, so on a change
it finds out the existance of that dialog
and its cancel button, and if that exists,
it click on it.

Graphic designer
& amateur fullstack developer
Jiří Dvořák
