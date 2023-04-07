
var body = document.querySelector("body");
console.log('siema');
document.onreadystatechange = function () {
  console.log('state changed tak?')
  if (document.readyState === "complete") {
    body.classList.add("preloader_ready");
    setTimeout(function () {
      body.classList.remove("preloader_active");
      body.classList.remove("preloader_ready");
    }, 1000);
  }
};