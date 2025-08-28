const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const contant1 = document.getElementById("contant1");
const contant2 = document.getElementById("contant2");
const contant3 = document.getElementById("contant3");
btn1.addEventListener("click", function () {
  contant1.classList.add("block");
  contant1.classList.remove("hidden");
  contant2.classList.add("hidden");
  contant2.classList.remove("block");
  contant3.classList.add("hidden");
  contant3.classList.remove("block");

  btn1.classList.add("bg-[#ffffff]");
  btn1.classList.remove("bg-[#b6c9f0]");

  btn2.classList.remove("bg-[#ffffff]");
  btn3.classList.remove("bg-[#ffffff]");
});
btn2.addEventListener("click", function () {
  contant1.classList.add("hidden");
  contant1.classList.remove("block");
  contant2.classList.add("block");
  contant2.classList.remove("hidden");
  contant3.classList.add("hidden");
  contant3.classList.remove("block");
  btn2.classList.add("bg-[#ffffff]");
  btn2.classList.remove("bg-[#b6c9f0]");
  btn1.classList.remove("bg-[#ffffff]");
  btn3.classList.remove("bg-[#ffffff]");
});
btn3.addEventListener("click", function () {
  contant1.classList.add("hidden");
  contant1.classList.remove("block");
  contant2.classList.add("hidden");
  contant2.classList.remove("block");
  contant3.classList.add("block");
  contant3.classList.remove("hidden");
  btn3.classList.add("bg-[#ffffff]");
  btn3.classList.remove("bg-[#b6c9f0]");
  btn2.classList.remove("bg-[#ffffff]");
  btn1.classList.remove("bg-[#ffffff]");
});
