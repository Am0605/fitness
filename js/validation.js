document.getElementById("membershipForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let package = document.getElementById("package").value.trim();
    let medical = document.getElementById("medical").value.trim();

    if (!name || !email || !phone || !gender || !package) {
        showModal("Form Error", "Please fill out all required fields.");
        return;
    }

    // Update phone validation
    if (!/^\d{2}-\d{7}$/.test(phone)) {
        showModal("Invalid Phone Number", "Please enter a valid Malaysian phone number format: XX-XXXXXXX");
        return;
    }

    // Display user input
    let fullPhone = `+60${phone}`;
    let output = `Name: ${name}\nEmail: ${email}\nContact: ${fullPhone}\nGender: ${gender.value}\nMembership: ${package}\nMedical: ${medical || "None"}`;
    
    showModal("Registration Successful!", output);
});

// Phone input formatting
document.getElementById("phone").addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Limit to max 9 digits (2 + 7)
    value = value.substring(0, 9);
    
    if (value.length >= 2) {
        // Add hyphen after first two digits
        value = value.substring(0, 2) + '-' + value.substring(2);
    }
    
    e.target.value = value;
});

// Function to Show Custom Modal
function showModal(title, message) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-message").innerText = message;
    document.getElementById("modal").classList.remove("hidden");
}

// Close Modal Button and redirect to index.html
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal").classList.add("hidden");
    window.location.replace("thankyou.html");
});
