// contact-validation.js
// Make sure to include form-utils.js before this script in your HTML

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('contactResponse');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop default HTML submission

            let isValid = validateContactForm();
            
            if (isValid) {
                // Client-Side Validation passed, now use AJAX to "submit"
                ajaxSubmit(form);
            }
        });
    }

    function validateContactForm() {
        let isValid = true;
        const nameInput = document.getElementById('cname');
        const emailInput = document.getElementById('cemail');
        const subjectSelect = document.getElementById('subject');
        const messageTextarea = document.getElementById('message');

        // Reset all errors
        [nameInput, emailInput, subjectSelect, messageTextarea].forEach(clearError);

        // 1. Name Validation
        if (nameInput.value.trim().length < 2) {
            displayError(nameInput, 'Please enter your full name.');
            isValid = false;
        }

        // 2. Email Validation
        if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        // 3. Subject Validation
        if (subjectSelect.value === '') {
            displayError(subjectSelect, 'Please select a message type.');
            isValid = false;
        }

        // 4. Message Validation (Min length check)
        if (messageTextarea.value.trim().length < 20) {
            displayError(messageTextarea, 'Message must be at least 20 characters long.');
            isValid = false;
        }

        return isValid;
    }

    // Function to handle AJAX Submission (using the modern fetch API)
    function ajaxSubmit(form) {
        const formData = new FormData(form);
        const emailBody = `
            Thank you for contacting Gaming Academy!
            
            We have received your message and will respond shortly.
            
            **Your Submission Details (for Compilation into Email):**
            From: ${formData.get('cname')} (${formData.get('cemail')})
            Subject: ${formData.get('subject')}
            Message: ${formData.get('message')}
        `;

        // Simulate an AJAX POST request to a server (replace with a real endpoint if deployed)
        // Since this is a school project, we are simulating the success response.
        
        responseDiv.style.display = 'block';
        responseDiv.innerHTML = `
            <h4>✅ Submission Successful!</h4>
            <p>Your general message has been received.</p>
            <p>A compilation of your information has been prepared for email transmission:</p>
            <pre>${emailBody.trim()}</pre>
        `;

        form.reset(); // Clear form on successful "submission"
    }
});