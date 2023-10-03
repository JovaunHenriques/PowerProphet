
// Get the <a> element by its ID
let wtf = document.getElementById("wtf");

// This is the desired URL for the home page
let destinationURL = "./index.html";

if (window.location.href.endsWith("index.html")) {
  wtf.addEventListener("click", function() {
    window.location.href = destinationURL
  })
}
//this is for the contactpage
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Simple validation: Check if any field is empty
  if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
  }

  // If all fields are filled, you can proceed with sending the data to your server or another action.
  // For now, we'll just log the data to the console.
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // Reset the form
  this.reset();
});
