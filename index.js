"use strict";
Date.prototype.getMonthLength = function () {
  let m = this.getMonth(), y = this.getFullYear();
  let ml = (m % 2 == 0)? 31: 30;
  if (m == 1) ml = 28;
  if (m == 1 && y % 4 == 0) ml = 29
  return ml;
};
function adjustHeight() {
  let main = document.getElementById("main");
  main.style.setProperty("height", window.visualViewport.height - 100 + "px", "important");
  main.style.setProperty("width", screen.width + "px", "important");
}
adjustHeight();
window.visualViewport.addEventListener("resize", adjustHeight);
let DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Enabling the functionality of .dm
let dSelectors = document.querySelectorAll(".date-selector");
dSelectors.forEach((selector) => {
  let children = selector.children;
  let input = children[0], icon = children[1], output = children[2];
  selector.setAttribute("selected-date", input.value);
  let date = new Date(input.value);
  output.textContent = DAYS[date.getDay()] + " " + date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear();
  icon.onclick = () => { input.click(); }
  input.onchange = function () {
    selector.setAttribute("selected-date", input.value);
    let date = new Date(input.value);
    output.textContent = DAYS[date.getDay()] + " " + date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear()
  }
});
let mSelectors = document.querySelectorAll(".month-selector");
mSelectors.forEach((selector) => {
  let children = selector.children;
  let input = children[0], icon = children[1], output = children[2];
  selector.setAttribute("selected-value", input.value);
  let date = new Date(input.value);
  output.textContent = MONTHS[date.getMonth()] + " " + date.getFullYear();
  icon.onclick = () => { input.click(); }
  input.onchange = function () {
    selector.setAttribute("selected-value", input.value);
    let date = new Date(input.value);
    output.textContent = MONTHS[date.getMonth()] + " " + date.getFullYear();
  }
});

let main = document.getElementById("main");
let emx = document.getElementById("emx"); emx.zIndex = 2;
let tdx = document.getElementById("tdx"); tdx.zIndex = 4;
let hom = document.getElementById("hom"); hom.zIndex = 5;
let atx = document.getElementById("atx"); atx.zIndex = 3;
let xtx = document.getElementById("xtx"); xtx.zIndex = 1;
let fcpx = document.getElementById("fcp"); // 6th element is the floating control panel.

let navi = document.getElementById("navi");
let nics = [...navi.children];
let nemx = nics[0]; nemx.section = emx; nemx.active = false;
let ntdx = nics[1]; ntdx.section = tdx; ntdx.active = false;
let nhom = nics[2]; nhom.section = hom; nhom.active = true;
let natx = nics[3]; natx.section = atx; natx.active = false;
let nxtx = nics[4]; nxtx.section = xtx; nxtx.active = false;

nics.forEach(function (nico) {
  nico.addEventListener("click", function () {
    if (this.active) {
      this.becomeInitial();
    }
    else {
      let nicp = nemx.active? nemx : ntdx.active? ntdx : nhom.active? nhom : natx.active? natx : nxtx;
      let pas = nicp.section;
      let nas = this.section;
      let z = nas.zIndex;
      nas.zIndex = pas.zIndex;
      pas.zIndex = z;
      
      pas.style.setProperty("visibility", "hidden");
      pas.style.setProperty("z-index", pas.zIndex);
      pas.style.setProperty("opacity", "0");
      nicp.active = false;
      nicp.classList.remove("active");
      
      nas.style.setProperty("visibility", "visible");
      nas.style.setProperty("z-index", nas.zIndex);
      nas.style.setProperty("opacity", "1");
      this.active = true;
      this.classList.add("active");
    }
  });
});

// Making the switch calender-events functional.
let emxsc = document.getElementById("emxsc");
let emxse = document.getElementById("emxse");
let emce  = document.getElementById("emce");

emxsc.active = true;

emxse.onclick = function () {
  if (emxse.active) return;
  emce.style.setProperty("left", "-100%");
  emxse.active = true;
  emxse.classList.add("active");
  emxsc.active = false;
  emxsc.classList.remove("active");
};
emxsc.onclick = function () {
  if (emxsc.active) return;
  emce.style.setProperty("left", "0");
  emxsc.active = true;
  emxsc.classList.add("active");
  emxse.active = false;
  emxse.classList.remove("active");
};