const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const confirmEmailInput = document.getElementById("confirmEmail");

form.addEventListener("submit", (event) => {
  if (emailInput.value !== confirmEmailInput.value) {
    event.preventDefault(); // Prevent form submission
    alert("The email addresses do not match. Please try again.");
  }
}); 

