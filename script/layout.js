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

const body1 = document.querySelector("body");
const modalOpenBtn1 = document.getElementById("openStyleModal1");
const modalCloseBtn1 = document.getElementById("closeStyleModal1");
const styleModal1 = document.getElementById("styleModal1");

modalOpenBtn1.addEventListener("click", function () {
  styleModal1.style.display = "block";
  body1.classList.add("stop-scroll");
});

modalCloseBtn1.addEventListener("click", function () {
  styleModal1.style.display = "none";
  body1.classList.remove("stop-scroll");
});

const body2 = document.querySelector("body");
const modalOpenBtn2 = document.getElementById("openStyleModal2");
const modalCloseBtn2 = document.getElementById("closeStyleModal2");
const styleModal2 = document.getElementById("styleModal2");

modalOpenBtn2.addEventListener("click", function () {
  styleModal2.style.display = "block";
  body2.classList.add("stop-scroll");
});

modalCloseBtn2.addEventListener("click", function () {
  styleModal2.style.display = "none";
  body2.classList.remove("stop-scroll");
});

const body3 = document.querySelector("body");
const modalOpenBtn3 = document.getElementById("openStyleModal3");
const modalCloseBtn3 = document.getElementById("closeStyleModal3");
const styleModal3 = document.getElementById("styleModal3");

modalOpenBtn3.addEventListener("click", function () {
  styleModal3.style.display = "block";
  body3.classList.add("stop-scroll");
});

modalCloseBtn3.addEventListener("click", function () {
  styleModal3.style.display = "none";
  body3.classList.remove("stop-scroll");
});

const body4 = document.querySelector("body");
const modalOpenBtn4 = document.getElementById("openStyleModal4");
const modalCloseBtn4 = document.getElementById("closeStyleModal4");
const styleModal4 = document.getElementById("styleModal4");

modalOpenBtn4.addEventListener("click", function () {
  styleModal4.style.display = "block";
  body4.classList.add("stop-scroll");
});

modalCloseBtn4.addEventListener("click", function () {
  styleModal4.style.display = "none";
  body4.classList.remove("stop-scroll");
});

// function openModal() {
//   // 모달창 열기
//   document.getElementById("myModal").style.display = "flex";

//   // 열고자 하는 문서의 URL을 설정
//   const documentUrl =
//     "https://github.com/heyyeon/click/blob/main/%E1%84%8B%E1%85%B5%E1%8₩6%B7%E1%84%92%E1%85%A8%E1%84%8B%E1%85%A7%E1%86%AB(%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A5).pdf";
//   document.getElementById("documentFrame").src = documentUrl;
// }

// function closeModal() {
//   // 모달창 닫기
//   document.getElementById("myModal").style.display = "none";
// }
