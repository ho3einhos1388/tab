const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const contant1 = document.getElementById("contant1");
const contant2 = document.getElementById("contant2");
const contant3 = document.getElementById("contant3");
btn1.addEventListener("click", function () {
  contant1.classList.add("active");
  contant2.classList.remove("active");
  contant3.classList.remove("active");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});
btn2.addEventListener("click", function () {
  contant2.classList.add("active");
  contant1.classList.remove("active");
  contant3.classList.remove("active");

  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
});
btn3.addEventListener("click", function () {
  contant3.classList.add("active");
  contant2.classList.remove("active");
  contant1.classList.remove("active");

  btn3.classList.add("active");
  btn2.classList.remove("active");
  btn1.classList.remove("active");
});
