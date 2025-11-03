// form-utils.js

/**
 * Validates a standard email format.
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Displays an error message for a given input field.
 */
function displayError(inputElement, message) {
    // Finds the sibling error span based on a convention (e.g., input's ID + '-error')
    const errorId = inputElement.id + '-error';
    const errorSpan = document.getElementById(errorId);
    
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.color = 'red';
        inputElement.classList.add('input-error'); // Optional: Add a CSS class for styling
    }
}

/**
 * Clears the error message for a given input field.
 */
function clearError(inputElement) {
    const errorId = inputElement.id + '-error';
    const errorSpan = document.getElementById(errorId);
    
    if (errorSpan) {
        errorSpan.textContent = '';
        inputElement.classList.remove('input-error');
    }
}