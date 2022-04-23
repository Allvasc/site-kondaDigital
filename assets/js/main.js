const menuBot = document.getElementById("botMenu");
const mobLinksMenu = document.getElementById("mob-links-menu");
menuBot.addEventListener("click", mostraMenu);
function mostraMenu() {
  mobLinksMenu.classList.toggle("show");
  const corpo = document.querySelector("body");
  corpo.classList.toggle("no-scroll");
}

mobLinksMenu.addEventListener("click", hideMenu);
function hideMenu() {
  mobLinksMenu.classList.toggle("show");
  const corpo = document.querySelector("body");
  corpo.classList.toggle("no-scroll");
  menuBtn.classList.remove("open");
  openMenu = false;
}

const menuBtn = document.querySelector(".botMenu");
let openMenu = false;
menuBtn.addEventListener("click", () => {
  if (!openMenu) {
    menuBtn.classList.add("open");
    openMenu = true;
  } else {
    menuBtn.classList.remove("open");
    openMenu = false;
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "flip",
  grabCursor: true,
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");

const prod1 = document.getElementById("prod1");
const prod2 = document.getElementById("prod2");
const prod3 = document.getElementById("prod3");
const prod4 = document.getElementById("prod4");
const prod5 = document.getElementById("prod5");
const prod6 = document.getElementById("prod6");

link1.addEventListener("click", function () {
  if (prod1.classList.contains("hide")) {
    prod1.classList.remove("hide");
    prod1.classList.add("show");
    prod2.classList.add("hide");
    prod3.classList.add("hide");
    prod4.classList.add("hide");
    prod5.classList.add("hide");
    prod6.classList.add("hide");
  }
});

link2.addEventListener("click", function () {
  if (prod2.classList.contains("hide")) {
    prod2.classList.remove("hide");
    prod2.classList.add("show");
    prod1.classList.add("hide");
    prod3.classList.add("hide");
    prod4.classList.add("hide");
    prod5.classList.add("hide");
    prod6.classList.add("hide");
  }
});

link3.addEventListener("click", function () {
  if (prod3.classList.contains("hide")) {
    prod3.classList.remove("hide");
    prod3.classList.add("show");
    prod1.classList.add("hide");
    prod2.classList.add("hide");
    prod4.classList.add("hide");
    prod5.classList.add("hide");
    prod6.classList.add("hide");
  }
});

link4.addEventListener("click", function () {
  if (prod4.classList.contains("hide")) {
    prod4.classList.remove("hide");
    prod4.classList.add("show");
    prod1.classList.add("hide");
    prod2.classList.add("hide");
    prod3.classList.add("hide");
    prod5.classList.add("hide");
    prod6.classList.add("hide");
  }
});

link5.addEventListener("click", function () {
  if (prod5.classList.contains("hide")) {
    prod5.classList.remove("hide");
    prod5.classList.add("show");
    prod1.classList.add("hide");
    prod2.classList.add("hide");
    prod3.classList.add("hide");
    prod4.classList.add("hide");
    prod6.classList.add("hide");
  }
});

link6.addEventListener("click", function () {
  if (prod6.classList.contains("hide")) {
    prod6.classList.remove("hide");
    prod6.classList.add("show");
    prod1.classList.add("hide");
    prod2.classList.add("hide");
    prod3.classList.add("hide");
    prod4.classList.add("hide");
    prod5.classList.add("hide");
  }
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches

    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");
    const link4 = document.getElementById("link4");
    const link5 = document.getElementById("link5");
    const link6 = document.getElementById("link6");

    const closeModal1 = document.getElementById("close-modal1");
    const closeModal2 = document.getElementById("close-modal2");
    const closeModal3 = document.getElementById("close-modal3");
    const closeModal4 = document.getElementById("close-modal4");
    const closeModal5 = document.getElementById("close-modal5");
    const closeModal6 = document.getElementById("close-modal6");

    const caseprodutos = document.getElementById("case-produtos");

    link1.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });

    link2.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });
    link3.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });
    link4.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });
    link5.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });
    link6.addEventListener("click", function () {
      caseprodutos.style.display = "block";
    });
    closeModal1.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
    closeModal2.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
    closeModal3.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
    closeModal4.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
    closeModal5.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
    closeModal6.addEventListener("click", function () {
      caseprodutos.style.display = "none";
    });
  }
}

var x = window.matchMedia("(max-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
