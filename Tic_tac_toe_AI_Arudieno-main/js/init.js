function slide(n){
  var imgNames = ["null", "img_1.jpeg", "img_2.jpeg", "img_3.jpeg", "img_4.jpeg"];
  var selector = 'div#slider.slider img.slider-img';
  var imgName = $(selector)[0].outerHTML.split('img_');
  var imgNum = parseInt(imgName[1].split('.')[0]);
  if (n == 0) {
    var newName = (imgNum != 1) ? imgNames[imgNum - 1] : imgNames[imgNum + 3];
    $(selector)[0].outerHTML = getPath(imgName[0], newName);
  }
  else if (n == 1 ){
    var newName = (imgNum != 4) ? imgNames[imgNum + 1] : imgNames[imgNum - 3];
    $(selector)[0].outerHTML = getPath(imgName[0], newName);
  }
}
function getPath(path, imgName){
  return (path + imgName + "\">");
}



var clickimg;
function clicky() {
  document.getElementById("bi").innerText = "SELECTED";
  
  if(img.src = "img_1")
  {
  
  }
  else if(img.src = "img_2")
  {

    
  }


  }
  
  clickimg = document.getElementsByTagName("img");
  clickimg[0].addEventListener("click",clicky);
