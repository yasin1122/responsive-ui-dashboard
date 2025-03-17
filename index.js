// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById("menu-btn");
  const nav = document.getElementById("nav");
  const exit = document.getElementById("exit-btn");

  // When the menu button is clicked, add the open-nav class to nav
  open.addEventListener("click", () => {
    nav.classList.add("open-nav");
  });

  // When the exit button is clicked, remove the open-nav class from nav
  exit.addEventListener("click", () => {
    nav.classList.remove("open-nav");
  });

  // Optional: Show viewport width for debugging
  let width = document.getElementById("width");
  const onresize = function() {
    width.innerText = document.body.clientWidth;
    width.classList.add("display-width");
    setTimeout(() => {
      width.classList.remove("display-width");
    }, 2000);
  };
  window.addEventListener("resize", onresize);
});

