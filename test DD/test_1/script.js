/* кнопка возврата вверх НАЧАЛО*/
document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.back-to-top');

    window.onscroll = function () {
        if (window.pageYOffset > 580) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});

/* кнопка возврата вверх КОНЕЦ*/  


/* // Анимация якоря НАЧАЛО */
const anchors = [].slice.call(document.querySelectorAll('a[href*="#anchor"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    
    }, animationTime / framesCount);
  });
});

/* // Анимация якоря КОНЕЦ */