// Toggle menu on small screens
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", () => {
    if (menu.style.display === "flex" || menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  });
});