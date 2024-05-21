const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

document.querySelectorAll(".navbar__links").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const offsetTop =
      target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".navbar__links").forEach((link) => {
  link.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("is-active")) {
      mobileMenu.classList.remove("is-active");
      // Hide the navbar menu
      const navbarMenu = document.querySelector(".navbar__menu");
      navbarMenu.classList.remove("active");
    }
  });
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwbl9qxWAoKqqLprVPYtmcD9iu-1P52nDcxED4L9bq2ItErIQ1mNmdCZ1EAL3lx82zf/exec";
const form = document.forms["meetingForm"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Tu cita se agendo correctamente. Recibiras confirmación pronto")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
