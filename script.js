document.addEventListener("DOMContentLoaded", function() {
    const days = document.querySelectorAll(".day");
  
    days.forEach(day => {
      day.addEventListener("click", function() {
        // Toggle active class on clicked day
        days.forEach(d => d.classList.remove("active"));
        day.classList.add("active");
  
        // Toggle content visibility
        const content = day.querySelector(".content");
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
  
      // Handling toggle button click to show/hide details
      const toggleButton = day.querySelector(".toggle-button");
      toggleButton.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent click on button from triggering day click
  
        const content = day.querySelector(".content");
        content.style.display = content.style.display === "block" ? "none" : "block";
      });
    });
  });
  