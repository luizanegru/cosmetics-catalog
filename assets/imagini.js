//Hide/Show Promo Button
var hideButton = document.getElementById("hideButton");
hideButton.onclick = function () {
    var slideshows = document.getElementsByClassName("slideshow-container");
    for (var slideshow of slideshows) {
        if (slideshow.style.display != "none") {
            slideshow.style.display = "none";
        } else {
            slideshow.style.display = "block";
        }
    }
}