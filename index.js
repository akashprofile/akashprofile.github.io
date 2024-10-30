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

let hom = document.getElementById("hom");
let emc = document.getElementById("emc");
let main = document.getElementById("main");
let nem = document.getElementById("nem");
nem.section = "emx";
let nho = document.getElementById("nho");
nho.section = "hom";

let navIcons = [nem, nho]

let eme = {};
main.appendChild(hom);


console.log(nho);
nem.addEventListener("click", openEM);
nho.addEventListener("click", openHO);

/* Find the opened section earlier.
 * each navigation icon corresponds to a unique section.
 * remove .currentSection from icon of earlier section.
 * add .currentSection to icon of current section.
 */
function setCurrentSection(cs) {
  navIcons.forEach(icon => {
    if (icon.section == cs) {
      icon.classList.add("currentSection");
      icon.currentSection = true;
    }
    else {
      icon.classList.remove("currentSection");
      icon.currentSection = false;
    }
  });
}
function openHO() {
  if (!nho.currentSection)
    setCurrentSection("hom");
  main.removeChild(main.children[0]);
  main.appendChild(hom);
  console.log("$");
}
function openEM() {
  if (!nem.currentSection)
    setCurrentSection("emx");
  if (eme.open) {
  
  }
  else {
    main.removeChild(main.children[0]);
    eme.open = false;
    emc.open = true;
    emc.style.setProperty("display", "block");
    main.appendChild(emc);
  }
}
