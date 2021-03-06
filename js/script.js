var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

// 1
var img1 = document.getElementById("myImg");
var modalImg1 = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
  modal.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
};

// 2
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img1.onclick = function () {
  modal.style.display = "block";
  modalImg1.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
