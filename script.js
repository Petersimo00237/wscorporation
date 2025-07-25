 document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
  this.reset();
  });
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
  color: #333;
}
header {
  background-color: #004aad;
  color: white;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
nav h1 {
  font-size: 1.5rem;
}
nav ul {
  display: flex;
  list-style: none;
}
nav ul li {
  margin-left: 20px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
.banner {
  text-align: center;
  padding: 60px 20px;
}
.banner h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
section {
  padding: 40px 20px;
}
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.service {
  background: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 250px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
form input, form textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
form button {
  background-color: #004aad;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
}
form button:hover {
  background-color: #003080;
}
footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}