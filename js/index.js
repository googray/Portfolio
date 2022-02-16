import i18Obj from "./translate.js";
//Burger

(function () {
  const burgerItem = document.querySelector(".burger");
  const menuItem = document.querySelector(".header-nav");
  const closeItem = document.querySelector(".header-nav__close");
  const useLink = document.querySelectorAll(".header-link");

  burgerItem.addEventListener("click", () => {
    menuItem.classList.add("header-nav__active");
  });
  closeItem.addEventListener("click", () => {
    menuItem.classList.remove("header-nav__active");
  });

  for (let i = 0; i < useLink.length; i++) {
    useLink[i].addEventListener("click", () => {
      menuItem.classList.remove("header-nav__active");
    });
  }
})();

//change img in portfolio
const portfolioImages = document.querySelectorAll(".portfolio-image");
const portfolioBtn = document.querySelector(".transparent-btn");
const portfolioBtns = document.querySelector(".portfolio-buttons");

portfolioBtns.addEventListener("click", function changeImage(event) {
  if (event.target.classList.contains("transparent-btn")) {
    let season = event.target.dataset.r22;
    portfolioImages.forEach((img, index) => {
      img.src = `./assets/img/${season}/${index + 1}.jpg`;
    });
  }
});

const seasons = ["winter", "spring", "summer", "autumn"];
seasons.forEach((seas) => {
  for (let i = 0; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${seas}/${i}.jpg`;
  }
});

//color button
const portBtns = document.querySelectorAll(".transparent-btn");

portfolioBtns.addEventListener("click", (e) => {
  portBtns.forEach((btn) => {
    if (btn.getAttribute("data-r22") === e.target.getAttribute("data-r22"))
      btn.classList.add("active");
    else btn.classList.remove("active");
  });
});

let lang = localStorage.getItem("lang");
const headerLang = document.querySelector(".lang-box");
function getTranslate(lang) {
  const translateData = document.querySelectorAll("[data-r22");
  translateData.forEach((elem) => {
    const key = elem.getAttribute("data-r22");
    elem.textContent = i18Obj[lang][key];
  });
}

headerLang.addEventListener("click", (e) => {
  lang = e.target.id;
  getTranslate(lang);
});

const langRu = document.querySelector(".ru");
langRu.addEventListener("click", switchRu);

function switchRu() {
  langRu.classList.add("active");
  langEn.classList.remove("active");
}

const langEn = document.querySelector(".en");
langEn.addEventListener("click", switchEn);

function switchEn() {
  langEn.classList.add("active");
  langRu.classList.remove("active");
}

const vectorBtn = document.querySelector(".hero-vector");
const activeCl = vectorBtn.classList;

vectorBtn.addEventListener("click", () => {
  activeCl.toggle("activ");
});

//BGR
const bodyBgr = document.querySelector(".body");
const wrappersBgr = document.querySelectorAll(".wrapper");

//Color text
const sectionsText = document.querySelectorAll(".section-title");
const linesLeftBgr = document.querySelectorAll(".line-left");
const linesRightBgr = document.querySelectorAll(".line-right");
const skillsCards = document.querySelectorAll(".skills-card__title");
const skillsCardDes = document.querySelectorAll(".skills-card__desc");
const pricesCardSt = document.querySelectorAll(".card-standart");
const pricesCardDesc = document.querySelectorAll(".card-description__items");
const priceBtns = document.querySelectorAll(".order-price");

const closeLineNav = document.querySelectorAll(".header-nav__close-line");
const headerNav = document.querySelector(".header-nav");
const headerLinks = document.querySelectorAll(".header-nav__link");

function switchLight() {
  wrappersBgr.forEach((el) => el.classList.add("light-bgr"));
  bodyBgr.classList.add("light-bgr");

  sectionsText.forEach((elem) => {
    elem.classList.add("light-text");
  });

  skillsCards.forEach((elem) => {
    elem.classList.add("light-text");
  });

  skillsCardDes.forEach((elem) => {
    elem.classList.add("light-text");
  });

  pricesCardSt.forEach((elem) => {
    elem.classList.add("light-text");
  });

  pricesCardDesc.forEach((elem) => {
    elem.classList.add("light-text");
  });
  portBtns.forEach((btn) => {
    btn.classList.add("light-text");
  });
  linesLeftBgr.forEach((elem) => {
    elem.classList.add("light-line");
  });

  linesRightBgr.forEach((elem) => {
    elem.classList.add("light-line");
  });

  portBtns.forEach((btn) => {
    btn.classList.add("light-btn");
  });

  headerNav.classList.add("light-backgrd");
  closeLineNav.forEach((elem) => {
    elem.classList.add("light-line");
  });

  headerLinks.forEach((btn) => {
    btn.classList.add("light-textes");
  });

  portBtns.forEach((btn) => {
    btn.classList.add("light-theme");
  });
  priceBtns.forEach((bton) => {
    bton.classList.add("light-theme");
  });
}

function switchDark() {
  wrappersBgr.forEach((el) => el.classList.remove("light-bgr"));
  bodyBgr.classList.remove("light-bgr");

  sectionsText.forEach((elem) => {
    elem.classList.remove("light-text");
  });

  skillsCards.forEach((elem) => {
    elem.classList.remove("light-text");
  });

  skillsCardDes.forEach((elem) => {
    elem.classList.remove("light-text");
  });

  pricesCardSt.forEach((elem) => {
    elem.classList.remove("light-text");
  });

  pricesCardDesc.forEach((elem) => {
    elem.classList.remove("light-text");
  });

  portBtns.forEach((btn) => {
    btn.classList.remove("light-text");
  });

  linesLeftBgr.forEach((elem) => {
    elem.classList.remove("light-line");
  });
  linesRightBgr.forEach((elem) => {
    elem.classList.remove("light-line");
  });
  portBtns.forEach((btn) => {
    btn.classList.remove("light-btn");
  });

  headerNav.classList.remove("light-backgrd");
  closeLineNav.forEach((elem) => {
    elem.classList.remove("light-line");
  });

  headerLinks.forEach((btn) => {
    btn.classList.remove("light-textes");
  });

  portBtns.forEach((btn) => {
    btn.classList.remove("light-theme");
  });
  priceBtns.forEach((bton) => {
    bton.classList.remove("light-theme");
  });
}

vectorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
  addLightClass();
});

function addLightClass() {
  try {
    if (localStorage.getItem("theme") === "light") {
      switchLight();
    } else {
      switchDark();
    }
  } catch (err) {}
}
addLightClass();

document.addEventListener("DOMContentLoaded", switchToLang);

langRu.addEventListener("click", () => {
  // e.preventDefault();
  if (localStorage.getItem("lang") === "en") {
    localStorage.removeItem("lang");
    localStorage.setItem("lang", "ru");
  } else {
    localStorage.setItem("lang", "ru");
  }
  switchToLang();
});

langEn.addEventListener("click", () => {
  // e.preventDefault();
  if (localStorage.getItem("lang") === "ru") {
    localStorage.removeItem("lang");
    localStorage.setItem("lang", "en");
  } else {
    localStorage.setItem("lang", "en");
  }
  switchToLang();
});

function switchToLang() {
  try {
    if (localStorage.getItem("lang") === "ru") {
      lang = "ru";
      getTranslate(lang);
    } else {
      lang = "en";
      getTranslate(lang);
    }
  } catch (err) {}
}
switchToLang();

function lighterLangSwitcher() {
  if (localStorage.getItem("lang") === "ru") {
    langRu.classList.add("active");
    langEn.classList.remove("active");
  } else {
    langEn.classList.add("active");
    langRu.classList.remove("active");
  }
}
lighterLangSwitcher();

const video = document.querySelector(".video");
const playIco = document.querySelector(".play-icon");
const volumeIco = document.querySelector(".volume-icon");
const playBtn = document.querySelector(".play-button__big");
const volume = document.querySelector(".volume");
const volumeValue = document.querySelector(".volume-value");
const progress = document.querySelector(".progress");
const fullScreen = document.querySelector(".fullscreen-icon");
const videoPlayer = document.querySelector(".player-container");
const background = document.querySelector(".background");
const speed = document.querySelector(".speed");
const speedValue = document.querySelector(".speed-value");
const speedIco = document.querySelector(".speed-icon");
const skipIcos = document.querySelectorAll("[data-skip");
const controls = document.querySelector(".controls");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  if (background.style.zIndex != "0") {
    background.style.opacity = "0";
    background.style.zIndex = "0";
  }
}

console.log(this);
function changeIcon() {
  const icon = this.paused ? "play" : "pause";
  playIco.style.backgroundImage = `url(./assets/svg/${icon}.svg)`;
  playBtn.classList.toggle("none");
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateVolume() {
  video["volume"] = volume.value;
  // console.log(video["volume"]);
  volume.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${
    volume.value * 100
  }%, rgba(0, 0, 0, 0.5) ${volume.value * 100}%, rgba(0, 0, 0, 0.5) 100%)`;
  volume.value == 0
    ? (volumeIco.style.backgroundImage = `url(./assets/svg/speaker-simple-x.svg)`)
    : (volumeIco.style.backgroundImage = `url(./assets/svg/speaker-simple-high.svg)`);
  volumeValue.textContent = `${Math.round(volume.value * 100)}%`;
}

function muteVolume() {
  if (volume.value == 0) {
    volume.value = 0.5;
    updateVolume();
  } else {
    volume.value = 0;
    updateVolume();
  }
}

function updateProgress() {
  const time = (video.currentTime / video.duration) * 100;
  progress.value = `${time}`;
  progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${time}%, rgba(0, 0, 0, 0.5) ${time}%, rgba(0, 0, 0, 0.5) 100%)`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}

function speedChange() {
  video["playbackRate"] = speed.value;
  speed.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${
    speed.value * 100 - 50
  }%, rgba(0, 0, 0, 0.5) ${speed.value * 100 - 50}%, rgba(0, 0, 0, 0.5) 100%)`;
  speedValue.textContent = `${speed.value}x`;
}

function normalizeSpeed() {
  speed.value = 1.0;
  speedChange();
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoPlayer.requestFullscreen();
  }
}

let mousedown = false;

video.addEventListener("click", togglePlay);
video.addEventListener("play", changeIcon);
video.addEventListener("pause", changeIcon);
video.addEventListener("timeupdate", updateProgress);
playIco.addEventListener("click", togglePlay);
background.addEventListener("click", togglePlay);
playBtn.addEventListener("click", togglePlay);
volumeIco.addEventListener("click", muteVolume);
volume.addEventListener("change", updateVolume);
volume.addEventListener("mousemove", updateVolume);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => {
  mousedown = true;
});
progress.addEventListener("mouseup", () => {
  mousedown = false;
});
speed.addEventListener("change", speedChange);
speed.addEventListener("mousemove", speedChange);
speedIco.addEventListener("click", normalizeSpeed);
fullScreen.addEventListener("click", toggleFullScreen);
skipIcos.forEach((icon) => icon.addEventListener("click", skip));
