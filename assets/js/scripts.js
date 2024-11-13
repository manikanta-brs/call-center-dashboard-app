window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});
let timelimit = document.getElementById("time-gap");

let countdown = 4;
let timer = setInterval(() => {
  countdown--;
  timelimit.textContent = countdown + "s";
  if (countdown <= 0) {
    clearInterval(timer);
    window.location.href = "../index.html";
  }
}, 1000);
