var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd'
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

// Page Load Function
function pageLoaded() {
  //Btn 1 event
  $('.section1Btn').on('click', function() {
    $('.section1').toggleClass('animated slideInDash');
    //to check the animation end
    $('.section1').on(animationEnd, removeAni1);
  });

  $('.section2Btn').on('click', function() {
    $('.section2').toggleClass('animated shake');
    $('.section2').on(animationEnd, removeAni2);
  });

  $('.section3Btn').on('click', function() {
    $('.section3').toggleClass('animated tada');
    $('.section3').on(animationEnd, removeAni3);
  });
}

function removeAni1() {
  $('.section1').removeClass('animated slideInDash');
  $('.section2').toggleClass('animated shake');
  $('.section2').on(animationEnd, removeAni2);
}

function removeAni2() {
  $('.section2').removeClass('animated shake');
  $('.section3').toggleClass('animated tada');
  $('.section3').on(animationEnd, removeAni3);
}
function removeAni3() {
  $('.section3').removeClass('animated tada');
}
function removeAni4() {
  $('.section4').removeClass('animated bounce');
}

animate4 = () => {
  $('.section4').toggleClass('animated jello');
};
