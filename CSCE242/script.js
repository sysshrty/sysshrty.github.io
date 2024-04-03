document.addEventListener("DOMContentLoaded", function() {
    const assignmentImages = document.querySelectorAll(".assignment-image");

    assignmentImages.forEach(function(img) {
        img.addEventListener("click", function() {
            img.classList.toggle("large");
        });
    });
});
