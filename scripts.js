onload = function() {

const faqOpen = document.getElementsByClassName("faq-list__header-wrap");
const faqMinus = document.getElementsByClassName("faq-minus");
const faqPlus = document.getElementsByClassName("faq-plus");
let t;

function plusMinus(a) {
  faqOpen[a].addEventListener("click", function() {
    if (faqMinus[a].classList.contains("faq-hide")) {
      faqMinus[a].classList.remove("faq-hide");
      faqPlus[a].classList.add("faq-hide");
    } else {
      faqMinus[a].classList.add("faq-hide");
      faqPlus[a].classList.remove("faq-hide");
    }
  })
}

for (t = 0; t < faqOpen.length; t++) {
  plusMinus(t);
  faqOpen[t].addEventListener("click", function() {
    let show = this.nextElementSibling;
    if (show.style.maxHeight) {
      show.style.maxHeight = null;
    } else {
      show.style.maxHeight = show.scrollHeight + "px";
    }
  })
}







}