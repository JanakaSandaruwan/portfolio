// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation and submission for contact form
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name && email && message) {
      if (isValidEmail(email)) {
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log("Form submitted:", { name, email, message });
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Email validation helper function
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Add a simple animation to project cards
const projectCards = document.querySelectorAll(".project-card, .project");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Implement a simple dark mode toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙";
darkModeToggle.style.position = "fixed";
darkModeToggle.style.bottom = "20px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.zIndex = "1000";
darkModeToggle.style.background = "none";
darkModeToggle.style.border = "none";
darkModeToggle.style.fontSize = "24px";
darkModeToggle.style.cursor = "pointer";

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Add dark mode styles
const darkModeStyles = `
      .dark-mode {
          background-color: #1a1a1a;
          color: #f0f0f0;
      }
      .dark-mode header {
          background-color: #2c2c2c;
      }
      .dark-mode nav ul li a {
          color: #f0f0f0;
      }
      .dark-mode .project-card,
      .dark-mode .project {
          background-color: #2c2c2c;
      }
      .dark-mode .tech-stack li {
          background-color: #3a3a3a;
          color: #f0f0f0;
      }
      .dark-mode input,
      .dark-mode textarea {
          background-color: #2c2c2c;
          color: #f0f0f0;
          border-color: #3a3a3a;
      }
  `;

const styleElement = document.createElement("style");
styleElement.textContent = darkModeStyles;
document.head.appendChild(styleElement);
