// Beginning Scroll Up buttons & fixed toolbar
const mobileScrollUp = document.querySelector(".mobile-go-up");
const toolbar = document.querySelector(".header");
const toolbarFiller = document.querySelector(".dummy-header");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mobileScrollUp.classList.add("mobile-deployed");
    toolbar.classList.add("fixed-header");
    toolbarFiller.classList.add("dh-visible");
  } else {
    mobileScrollUp.classList.remove("mobile-deployed");
    toolbar.classList.remove("fixed-header");
    toolbarFiller.classList.remove("dh-visible");
  }
}

function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mobileScrollUp.addEventListener("click", goUp)
// End Scroll Up buttons


// Beginning deployable mobile menu
const mobileMenu = document.querySelector(".header-links");
const mobileMenuAccess = document.querySelector("#mobile-menu-access");
const mobileMenuExit = document.querySelector("#mobile-menu-exit");
const sail = document.querySelector(".sail");

mobileMenuAccess.addEventListener("click", deployMobileMenu);

async function deployMobileMenu() {
  mobileMenuAccess.removeEventListener("click", deployMobileMenu);
  sail.style.display = "block";
  mobileMenu.classList.toggle("deployed");
  sail.addEventListener("click", storeMobileMenu);
  mobileMenuExit.addEventListener("click", storeMobileMenu);
  return;
}

async function storeMobileMenu() {
  sail.removeEventListener("click", storeMobileMenu);
  mobileMenuExit.removeEventListener("click", storeMobileMenu);
  sail.style.display = "None";
  mobileMenu.classList.toggle("deployed");
  mobileMenuAccess.addEventListener("click", deployMobileMenu);
  return;
}
// End deployable mobile menu
