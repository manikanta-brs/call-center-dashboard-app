window.addEventListener("DOMContentLoaded", (event) => {
  const dataTS = document.getElementById("datatablesSimple");
  if (dataTS) {
    new simpleDatatables.DataTable(dataTS);
  }
});
