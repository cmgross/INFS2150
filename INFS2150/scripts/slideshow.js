// (C) 2002 www.CodeLifter.com
// http://www.codelifter.com
// Free for all users, but leave in this header.

// ==============================
// Set the following variables...
// ==============================

// Set the slideshow speed (in milliseconds)
var SlideShowSpeed = 3000;

// Set the duration of crossfade (in seconds)
var CrossFadeDuration = 3;

var Picture = new Array(); // don't change this
var Caption = new Array(); // don't change this

// Specify the image files...
// To add more images, just continue
// the pattern, adding to the array below.
// To use fewer images, remove lines
// starting at the end of the Picture array.
// Caution: The number of Pictures *must*
// equal the number of Captions!

Picture[1] = 'images/braemarCarousel.jpg';
Picture[2] = 'images/braemarCarousel.jpg';
Picture[3] = 'images/braemarCarousel.jpg';
Picture[4] = 'images/braemarCarousel.jpg';
Picture[5] = 'images/braemarCarousel.jpg';
Picture[6] = 'images/braemarCarousel.jpg';
Picture[7] = 'images/braemarCarousel.jpg';
Picture[8] = 'images/braemarCarousel.jpg';
Picture[9] = 'images/braemarCarousel.jpg';
Picture[10] = 'images/braemarCarousel.jpg';

// Specify the Captions...
// To add more captions, just continue
// the pattern, adding to the array below.
// To use fewer captions, remove lines
// starting at the end of the Caption array.
// Caution: The number of Captions *must*
// equal the number of Pictures!

Caption[1] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[2] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[3] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[4] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[5] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[6] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[7] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[8] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[9] = "An amateur athlete throwing the 22lb Braemar stone.";
Caption[10] = "An amateur athlete throwing the 22lb Braemar stone.";

// =====================================
// Do not edit anything below this line!
// =====================================

var tss;
var iss;
var jss = 1;
var pss = Picture.length - 1;

var preLoad = new Array();
for (iss = 1; iss < pss + 1; iss++) {
    preLoad[iss] = new Image();
    preLoad[iss].src = Picture[iss];
}

function runSlideShow() {
    if (document.all) {
        document.images.PictureBox.style.filter = "blendTrans(duration=2)";
        document.images.PictureBox.style.filter = "blendTrans(duration=CrossFadeDuration)";
        document.images.PictureBox.filters.blendTrans.Apply();
    }
    document.images.PictureBox.src = preLoad[jss].src;
    if (document.getElementById) document.getElementById("CaptionBox").innerHTML = Caption[jss];
    if (document.all) document.images.PictureBox.filters.blendTrans.Play();
    jss = jss + 1;
    if (jss > (pss)) jss = 1;
    tss = setTimeout('runSlideShow()', SlideShowSpeed);
}