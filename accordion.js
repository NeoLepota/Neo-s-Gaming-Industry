// accordion.js

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Find the content section immediately following the header
            const content = header.nextElementSibling;
            
            // Find the toggle icon
            const icon = header.querySelector('.toggle-icon');

            // Toggle the 'active' class on the header
            header.classList.toggle('active');

            // Toggle the display of the content
            if (content.style.maxHeight) {
                // If content is currently open, close it
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                // Close any other open accordions (optional, but good UX)
                document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
                document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
                document.querySelectorAll('.toggle-icon').forEach(i => i.textContent = '+');
                
                // Open the clicked content
                content.style.maxHeight = content.scrollHeight + "px"; // Set height to actual content height
                header.classList.add('active');
                icon.textContent = '-';
            }
        });
    });
});