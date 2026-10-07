// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thanks ${name}! Your message has been received.`;

    contactForm.reset();

});


// ================= FOOTER YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();