// lightbox.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const galleryThumbs = document.querySelectorAll('.gallery-thumb');

    // 1. Attach click listeners to all gallery thumbnails
    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Open the modal
            modal.style.display = "block";
            
            // Set the full-size image source using the data attribute
            modalImg.src = this.getAttribute('data-full-src');
            
            // Set the caption text using the image's alt attribute
            captionText.innerHTML = this.alt;
        });
    });

    // 2. Close the modal when the close button (x) is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 3. Close the modal when the user clicks anywhere outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});