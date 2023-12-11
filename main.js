var imageArray = [
    "Resources/homepage2.avif.jpg",
    "Resources/homepage3.avif.jpg",
    "Resources/homepage4.avif.jpg",
    "Resources/homepage5.jpg"
 ];

 var index = 0;

 function changeImage() {
    document.getElementById("myImage").src = imageArray[index];
    index++;

    if (index >= imageArray.length) {
      index = 0;
    }
 }

 setInterval(changeImage, 3000); // change image every 3 seconds