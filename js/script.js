// Прокрутка при клике
const tryNowBtn = document.querySelectorAll('.fullscreen__link[data-goto]');
if (tryNowBtn.length > 0) {
  tryNowBtn.forEach(tryBtn => {
    tryBtn.addEventListener("click", onTryBtnClick);
  });

  function onTryBtnClick(e){
    const tryBtn = e.target;
    if (tryBtn.dataset.goto && document.querySelector(tryBtn.dataset.goto)) {
      const gotoBlock = document.querySelector(tryBtn.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
      
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}