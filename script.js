const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;


prev.addEventListener("click", function() {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
})

next.addEventListener("click", function() {
  nextSlide();
  updateCircleIndicator();
  resetTimer();

})

// create circle indicators
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onclick", "indicateSlide(this)")
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function resetTimer() {
  // when click to indicator or controls button
  // stop timer
  clearInterval(timer);
  // then started again timer
  timer = setInterval(autoPlay, 4000);
}


function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

window.addEventListener("load",() =>  {
  const preloader = document.querySelector('.preload');

  preloader.classList.add('preload-finish');
});


function mueveElBoton(){
  width = window.innerWidth;
  height = window.innerHeight;

  newWidth = (Math.random() * width/2);
  newHeight = (Math.random() * height/2);

  document.getElementById('btnNo').style.position = "absolute";
  document.getElementById('btnNo').style.left = newWidth + "px";
  document.getElementById('btnNo').style.top = newHeight + "px";
  

}


function showTime(){
  myDate = new Date();
  hours = myDate.getHours();
  minutes = myDate.getMinutes();
  seconds = myDate.getSeconds();
  if (hours < 10) hours = 0 + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  $("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
  setTimeout("showTime()", 1000);
  
  }