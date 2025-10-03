 document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
  this.reset();
  });

