
  var myimages=new Array();
  var numImages=0;

  function preLoad() {
    preLoadImg("images/1thumb.jpg");
    preLoadImg("images/2thumb.jpg");
    preLoadImg("images/3thumb.jpg");
    preLoadImg("images/4thumb.jpg");
    preLoadImg("images/5thumb.jpg");
    preLoadImg("images/jthumb.jpg");
  }

  function preLoadImg(name) {
    myimages[numImages]=new Image();
    myimages[numImages].src = name;
    numImages++;
  }

  function changeImage(imgNum,imgSrc) {
    document.images[imgNum].src = imgSrc;
  }


  window.onload = preLoad;

