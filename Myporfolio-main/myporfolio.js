// Show current date
const today = new Date();
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-date").textContent = 
    "Today's date: " + today.toLocaleDateString();
});

// Toggle resume visibility
function toggleResume() {
  const section = document.getElementById("resume-section");
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// Contact alert
function contactMe() {
  alert("Thank you for your interest! Please email me at: laillahzainath579@gmail.com");
  window.location.href = "mailto:laillahzainath579@gmail.com";
}

// Make functions globally accessible
window.toggleResume = toggleResume;
window.contactMe = contactMe;
