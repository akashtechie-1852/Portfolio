document.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.querySelector(".animated-text");
  const loadingLine = document.querySelector(".loading-line");
  const onloadContainer = document.querySelector(".onload-container");

  animatedText.addEventListener("animationend", () => {
    // Start the loading line animation after the zoom-out animation completes
    loadingLine.style.width = "100%"; // Expand to full width

    setTimeout(() => {
      document.querySelector(".roll-up").style.transform = "translateY(-100%)";
      document.querySelector(".roll-down").style.transform = "translateY(100%)";

      // Remove the onload container after the animation completes
      setTimeout(() => {
        onloadContainer.remove();
      }, 1000); // Adjust the delay as needed
    }, 10); // Adjust the delay as needed
  });
});
document.getElementById("github-logo").addEventListener("click", function () {
  window.location.href = "https://github.com/akashtechie-1852";
});

document.getElementById("linkedin-logo").addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/akash-techie-71b1512b2/";
});

document
  .getElementById("whatsappChatButton")
  .addEventListener("click", function () {
    // Replace the number with the desired WhatsApp number
    var whatsappNumber = "+919025106030";
    var whatsappMessage = "Hello!"; // You can change the default message if needed

    // Construct the WhatsApp URL
    var whatsappUrl =
      "https://wa.me/" +
      encodeURIComponent(whatsappNumber) +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    // Open the WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");
  });

document
  .getElementById("openGmailButton")
  .addEventListener("click", function () {
    var email = "akashtechie1852@gmail.com";
    var subject = "Subject of the email"; // You can change the default subject if needed
    var body = "Body of the email"; // You can change the default body if needed

    // Construct the mailto URL with the email address, subject, and body
    var mailtoUrl =
      "mailto:" +
      encodeURIComponent(email) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open the default email client (Gmail) with the new email
    window.open(mailtoUrl);
  });
document.addEventListener("DOMContentLoaded", function () {
  const contactSpans = document.querySelectorAll(".contact-span");

  contactSpans.forEach((contactSpan) => {
    contactSpan.addEventListener("click", function () {
      const linkText = this.querySelector("span").innerText;
      let link;

      switch (linkText) {
        case "+91 9025106030":
          link = "tel:+919025106030";
          break;
        case "akashtechie1852@gmail.com":
          link = "mailto:akashtechie1852@gmail.com";
          break;
        case "LinkedIn":
          link = "https://www.linkedin.com/";
          break;
        case "GitHub":
          link = "https://github.com/";
          break;
        case "Portfolio Link":
          link = "https://akash-m.netlify.app/";
          break;
        default:
          link = "#"; // Default to '#' if no matching link found
      }

      window.location.href = link;
    });
  });
});
// // Function to handle intersection changes
// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Check if the entry is entering or leaving the viewport
//       const isInViewport = entry.intersectionRatio >= 1;
//       let animationName = "moveLeftToRight";

//       // Check if the element has both class names ".Skills" and ".reverse"
//       if (
//         entry.target.classList.contains("Skills") &&
//         entry.target.classList.contains("reverse")
//       ) {
//         animationName = isInViewport ? "moveRightToLeft" : "moveLeftToRight";
//       }

//       // Apply animation to the element
//       entry.target.style.animation = `${animationName} 4s linear forwards`;

//       // Stop observing once animated
//       observer.unobserve(entry.target);
//     }
//   });
// }

// // Create a new Intersection Observer
// const observer = new IntersectionObserver(handleIntersection, {
//   rootMargin: "0px",
//   threshold: 1,
// });

// // Get all elements with class "Skills" and observe them
// const skillSections = document.querySelectorAll(".Skills");
// skillSections.forEach((section) => {
//   observer.observe(section);
// });

// JavaScript code for parallax effect
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  document.querySelectorAll(".parallax-section").forEach(function (element) {
    let speed = parseFloat(element.getAttribute("data-speed"));
    element.style.backgroundPositionY = -(offset * speed) + "px";
  });
});
