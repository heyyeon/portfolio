const body = document.querySelector("body");
const modalOpenBtn = document.getElementById("openStyleModal");
const modalCloseBtn = document.getElementById("closeStyleModal");
const styleModal = document.getElementById("styleModal");

modalOpenBtn.addEventListener("click", function () {
  styleModal.style.display = "block";
  body.classList.add("stop-scroll");
});

modalCloseBtn.addEventListener("click", function () {
  styleModal.style.display = "none";
  body.classList.remove("stop-scroll");
});
