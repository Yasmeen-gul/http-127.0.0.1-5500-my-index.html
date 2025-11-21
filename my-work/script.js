function upDate(previewPic) {
    console.log("Mouse Over Event Triggered");
    console.log("ALT: " + previewPic.alt);
    console.log("SRC: " + previewPic.src);

    // Change text
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change background image
    document.getElementById("image").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Mouse Leave Event Triggered");

    // Reset background
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset text
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}
