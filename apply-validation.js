// apply-validation.js
// NOTE: Requires form-utils.js to be loaded first for displayError/clearError functions.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get DOM elements
    const form = document.getElementById('applicationForm'); 
    const responseContainer = document.getElementById('enquiryResponse');
    
    // Check if the form and container exist
    if (!form || !responseContainer) {
        console.error("Application form or response container not found.");
        return;
    }

    // 2. Add event listener for form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        let formIsValid = validateApplicationForm();
        
        if (formIsValid) {
            // A. Process and display the custom enquiry response (cost, availability)
            processEnquiryResponse(form, responseContainer);
            
            // B. Display the required pop-up confirmation
            displaySubmissionConfirmation();
            
            // C. Clear the form fields
            form.reset(); 
        }
    });

    // --- 3. Core Validation Function ---
    function validateApplicationForm() {
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const courseSelect = document.getElementById('course');
        const experienceTextarea = document.getElementById('experience');

        // Reset all errors before validation run
        [nameInput, emailInput, courseSelect, experienceTextarea].forEach(clearError);

        // Validation Checks:
        
        // 1. Name Check (Minimum length 2)
        if (nameInput.value.trim().length < 2) {
            displayError(nameInput, 'Full name is required.');
            isValid = false;
        }

        // 2. Email Check (Format validation using function from form-utils.js)
        if (!isValidEmail(emailInput.value.trim())) { // Assuming isValidEmail is in form-utils.js
            displayError(emailInput, 'Please enter a valid email address.');
            isValid = false;
        }

        // 3. Course Selection Check (Must select a value other than the default placeholder)
        if (courseSelect.value === '') {
            displayError(courseSelect, 'Please select a course you wish to apply for.');
            isValid = false;
        }
        
        // 4. Prior Experience Check (Minimum length of 10 characters for a brief description)
        if (experienceTextarea.value.trim().length < 10) {
            displayError(experienceTextarea, 'Please briefly describe your prior experience (min 10 characters).');
            isValid = false;
        }

        return isValid;
    }

    // --- 4. Dynamic Response Function ---
    // This provides the user with the required feedback on cost, availability, etc.
    function processEnquiryResponse(form, container) {
        const formData = new FormData(form);
        const selectedCourseValue = formData.get('course'); 
        const name = formData.get('name');
        
        let cost, availability, description;

        switch(selectedCourseValue) {
            case 'Intro':
                cost = '$3,500 USD';
                availability = 'Good availability. Intake starts January.';
                description = 'Covers game design fundamentals and basic coding structure.';
                break;
            case 'Advanced':
                cost = '$7,000 USD';
                availability = 'Very low availability. Waitlist estimated 3 months.';
                description = 'Focuses on advanced AI, physics, and engine optimization.';
                break;
            case 'Art':
                cost = '$5,000 USD';
                availability = 'Average availability. Next intake starts February.';
                description = 'Covers character modeling, rigging, and animation pipelines.';
                break;
            case 'VR':
                cost = '$6,000 USD';
                availability = 'High demand, limited slots available. Apply immediately.';
                description = 'Specializes in spatial computing and virtual reality environment design.';
                break;
            case 'Mobile':
                cost = '$4,500 USD';
                availability = 'Good availability.';
                description = 'Learn platform-specific development for iOS and Android.';
                break;
            default:
                // Should not happen if validation passed, but handles unknown values
                cost = 'N/A';
                availability = 'N/A';
                description = 'Please contact us directly for details.';
        }

        let responseMessage = `
            <h3>Hello, ${name}! Your Course Enquiry Response:</h3>
            <p>Thank you for your interest in the **${selectedCourseValue}** course. Here is the relevant information:</p>
            <ul>
                <li><strong>Course Description:</strong> ${description}</li>
                <li><strong>Estimated Cost:</strong> ${cost} (Payment plans available).</li>
                <li><strong>Current Availability:</strong> ${availability}</li>
            </ul>
        `;

        container.innerHTML = responseMessage;
        container.style.display = 'block';
    }
    
    // --- 5. Submission Confirmation Pop-up ---
    function displaySubmissionConfirmation() {
        const email = document.getElementById('email').value;

        // Uses the native browser 'alert' for a clear, immediate confirmation pop-up
        alert(`✅ Application Submitted Successfully!\n\nThank you for your enquiry. A detailed confirmation message and further instructions will be sent to your email address: ${email} shortly.`);
    }

    document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const responseBox = document.getElementById("enquiryResponse");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const experience = document.getElementById("experience").value.trim();

    let errors = [];

    if (name.length < 3) {
      errors.push("Please enter a valid name.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      errors.push("Please enter a valid email address.");
    }

    if (!course) {
      errors.push("Please select a course.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    responseBox.innerHTML = `
      <strong>Thank you for using the website!</strong><br>
      A message will be sent to you shortly regarding your course.
    `;
    responseBox.style.display = "block";
    form.reset();
  });
});

});