document.addEventListener("DOMContentLoaded", function () {
  const closeIcon = document.querySelector(".menu-close-icon");
  const openIcon = document.querySelector(".menu-open-icon");
  const navLinks = document.getElementById("navLinks");

  // Initially hide the open icon
  openIcon.style.display = "none";
  navLinks.style.display = "none"; // Optional: Hide menu initially

  closeIcon.addEventListener("click", function () {
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    navLinks.style.display = "block"; // Show menu
  });

  openIcon.addEventListener("click", function () {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
    navLinks.style.display = "none"; // Hide menu
  });
});
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true, // animate out when scrolling past
    easing: "ease-in-out", // offset (in px) from the trigger point
  });
});
