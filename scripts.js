function validateForm() {
    // Access Name and Email fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Check if fields are empty
    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false; // Prevent form submission
    }
    return true; // Allow submission
}

function toggleDescription(elementId, btn) {
    // Declare the variable for the description using var
    var description = document.getElementById(elementId);
    
    // Check the current display state
    if (description.style.display === "none") {
        description.style.display = "block"; // Show it
        btn.innerText = "Hide Description";  // Update button text
    } else {
        description.style.display = "none";  // Hide it
        btn.innerText = "Show Description";  // Update button text[cite: 1]
    }
}

// This runs when the script loads to attach listeners
var quotes = document.getElementsByTagName("blockquote");

for (var i = 0; i < quotes.length; i++) {
    // Mouseover event
    quotes[i].addEventListener("mouseover", function() {
        this.style.fontStyle = "italic";
        this.style.backgroundColor = "#e0f7fa"; // Light highlight
    });

    // mouseout event to revert style
    quotes[i].addEventListener("mouseout", function() {
        this.style.fontStyle = "normal";
        this.style.backgroundColor = "azure"; // Revert to original color[cite: 6]
    });
}

window.onload = function() {
    // Check if we are on the homepage
    if (document.title.includes("reema's homepage")) {
        var footer = document.getElementsByTagName("footer")[0];
        
        // Create new <p> element
        var datePara = document.createElement("p");
        
        // Get current date and time
        var now = new Date();
        
        // Create text node
        var statusText = document.createTextNode("Page loaded on: " + now.toLocaleString());
        
        // Append nodes
        datePara.appendChild(statusText);
        footer.appendChild(datePara);
    }
};