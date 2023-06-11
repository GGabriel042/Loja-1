const slider = document.querySelector(".js-slider"),
firstImg = slider.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollerLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollerLeft = slider.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  slider.scrollLeft = prevScrollerLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop);