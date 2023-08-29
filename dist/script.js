// animate

AOS.init();

// perguntas frequentes

const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.querySelector(".resposta");
    if (resposta.classList.contains("hidden")) {
      resposta.classList.remove("hidden");
      resposta.classList.add("flex"); // Adicione a classe flex
    } else {
      resposta.classList.add("hidden");
      resposta.classList.remove("flex"); // Remova a classe flex
    }
  });
});

// Abrir menu

const viconMenu = document.getElementById("icon-menu");
const vnavbar2 = document.getElementById("navbar2");

viconMenu.addEventListener("click", () => {
  if (vnavbar2.style.display === "flex") {
    vnavbar2.style.display = "none";
  } else {
    vnavbar2.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    vnavbar2.style.display = "none";
  }
});

// Parallax

var rellax = new Rellax(".rellax");

// galeria artigos
const swiper = new Swiper(".js-swiper-artigos", {
  // Optional parameters
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  freeMode: true,

  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 1.2,
      spaceBetween: 35
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1.3,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 1.4,
      spaceBetween: 45
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 1.5,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1536: {
      slidesPerView: 1.6,
      spaceBetween: 55
    }
  }
});

// galeria artigos
const swiper2 = new Swiper(".js-swiper-cards", {
  // Optional parameters
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 2,
  freeMode: true,
  breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 3.5,
      spaceBetween: 40
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3.5,
      spaceBetween: 45
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4.5,
      spaceBetween: 55
    },
    // when window width is >= 640px
    1536: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});

//avaliacao

// galeria artigos
const swiper3 = new Swiper(".js-swiper-avalicoes", {
  // Optional parameters
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  }
});