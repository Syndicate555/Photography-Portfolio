var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

$(function () {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".showcase-left", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".showcase-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
});
sr.reveal(".showcase-btn", {
  duration: 2000,
  delay: 2000,
  origin: "bottom",
});
sr.reveal("#testimonial div", {
  duration: 2000,
  origin: "bottom",
});
sr.reveal(".info-left", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2,
});
sr.reveal(".info-right", {
  duration: 2000,
  origin: "right",
  distance: "300px",
  viewFactor: 0.2,
});
