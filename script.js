
// Get the <a> element by its ID
let wtf = document.getElementById("wtf","wfd","flw","ed");

// This is the desired URL for your home page
let homePageURL = "index.html";

// Check if the current page's URL matches the home page URL
if (window.location.href.endsWith("./index.html")) {
  // If on the home page, add the click event listener
  wtf.addEventListener("click", function(event) {
    let destinationURL = "./topFreezer.html";
    window.location.href = destinationURL;
    // Remove the click event listener to make the image non-clickable
    
    wtf.removeEventListener("click", handleClick);
    
  })}


//this is where the js for the contactpage starts.
let contact =document.getElementById("contact");

 contact.addEventListener(click,function(){
   window.open("./contactpage.html")
 });

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