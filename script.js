console.log("Website loaded successfully!");

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation clicked:", link.textContent);
    });
});
