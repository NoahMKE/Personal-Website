function sendEmail(event) {
    // This stops the page from refreshing so the email can actually send
    event.preventDefault();

    // These keys (left side) MUST match the {{tags}} in your EmailJS screenshot
    const templateParams = {
        name: document.querySelector("#fname").value + " " + document.querySelector("#lname").value,
        email: document.querySelector("#email").value,
        title: document.querySelector('input[name="title"]:checked')?.value || "No Title",
        message: document.querySelector("#comment").value,
        phone: document.querySelector("#phone").value
    };

    // Sending the email using your specific Service and Template IDs
    emailjs.send("service_letgcci", "template_diz10a6", templateParams)
        .then(() => {
            alert("Email sent successfully!");
            // Optional: clear the form after success
            document.querySelector("form").reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);
            alert("Failed to send email. Check the browser console for the error message.");
        });
}
