// Form Submission Handler (Original Logic Preserved)
function submitForm(event) {
  event.preventDefault();

  document.getElementById("msg").innerText =
    "Message sent successfully ✅";

  event.target.reset();

  // Clear message feedback after 5 seconds
  setTimeout(() => {
    const msgElement = document.getElementById("msg");
    if (msgElement) msgElement.innerText = "";
  }, 5000);
}

// Interactive Features for Premium Portfolio Experience
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // 1. Scroll-sensitive Navbar Style Shift
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // 2. Active Section Navigation Link Highlight
    let currentSection = "home";
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // 3. Mobile Hamburger Menu Toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});