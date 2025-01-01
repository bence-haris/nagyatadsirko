/* Gallery - Image Viewer */

var galleryItems = document.querySelectorAll('.gallery a');
var imageViewer = document.querySelector('.imageViewer');

if (imageViewer) {
  var imageViewerImg = imageViewer.querySelector('img');

  function galleryItemClick(evt) {
    evt.preventDefault();

    var href = this.getAttribute('href');
    imageViewerImg.setAttribute('src', href);
    imageViewer.classList.add('visible');
  }

  for (var item of galleryItems) {
    item.addEventListener('click', galleryItemClick);
  }

  function imageViewerClick() {
    imageViewer.classList.remove('visible');
  }

  imageViewer.addEventListener('click', imageViewerClick);
}


function checkForVisibility() {
  var headers = document.querySelectorAll(".header");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("headerVisible");
    } else {
      header.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}

section = 1;
page = window.location.href.split("/").at(-1);
heights = [0,window.innerHeight,2*window.innerHeight,3*window.innerHeight]
// About us scroll to content
if (page == "aboutus.html"){
  window.onload = function() {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  
}



// Navigation: Compares nav-links to actual site: if a nav-link matches => this link is active
$(document).ready(function(){
    let links = document.getElementsByClassName('nav-link');
    let actual = window.location.href;
    for(let i = 0; i < links.length; i++){
        if(actual == links[i].href){
            links[i].classList.add('active');
            console.log(links[i].className);
        }
    }
});


