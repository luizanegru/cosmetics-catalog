var hideShowButton = document.getElementById("hideShowButton");

hideShowButton.onclick = function () {


    var x = document.querySelectorAll("img");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display == 'none') {
            x[i].style.display = 'block';
        } else if (x[i].style.display == 'block') {
            x[i].style.display = 'none';
        }
    }
}