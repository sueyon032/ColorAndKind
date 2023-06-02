window.addEventListener('scroll', function() {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    if (scrollPercentage > 0.5) {
      document.querySelector('.scroll-bg').style.backgroundImage = 'url("images/gray_bg.png")'; /* 스크롤을 50% 이상 내렸을 때 다른 배경 이미지로 변경 */
    } else {
      document.querySelector('.scroll-bg').style.backgroundImage = 'url("images/gray_bg.png")'; /* 스크롤이 50% 이하로 올라갔을 때 초기 배경 이미지로 변경 */
    }
  });