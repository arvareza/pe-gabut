// Toggle class active (memunculkan nav utama lewat hamburger menu)
const navbarUt = document.querySelector(".navbar-utama");
// ketika di klik
document.querySelector(".burger").onclick = () => {
  navbarUt.classList.toggle("active");
};

//Bisa klik diluar hamburger untuk menyembunyikan nav utama
const hamburger = document.querySelector(".burger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarUt.contains(e.target)) {
    navbarUt.classList.remove("active");
  }
});
//jadi selama yang ditekan bukan menu dan nav utama maka jalankan event (menyembuyikan nav utama)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".choice");
hiddenElements.forEach((el) => observer.observe(el));
