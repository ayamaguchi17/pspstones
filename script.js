const hamburger = document.querySelector(".hamburger")
const topNav = document.querySelector(".topNav")
const blocker = document.querySelector(".blocker")
const topAboutBtn = document.querySelector(".top-about-btn")
const topSpStonesBtn = document.querySelector(".top-sp-stones-btn")
const topJewelleryBtn = document.querySelector(".top-jewellery-btn")
const topCustomMadeBtn = document.querySelector(".top-custom-made-btn")
const topContactBtn = document.querySelector(".top-contact-btn")


function toggleClasses() {
  hamburger.classList.toggle("open")
  topNav.classList.toggle("open")
  blocker.classList.toggle("open")
}

hamburger.addEventListener("click", toggleClasses)

blocker.addEventListener("click", toggleClasses)

topAboutBtn.addEventListener("click", toggleClasses)

topSpStonesBtn.addEventListener("click", toggleClasses)

topJewelleryBtn.addEventListener("click", toggleClasses)

topCustomMadeBtn.addEventListener("click", toggleClasses)

topContactBtn.addEventListener("click", toggleClasses)

const upBtn = document.querySelector(".upBtn")

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upBtn.style.display = "block"
  } else {
    upBtn.style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

