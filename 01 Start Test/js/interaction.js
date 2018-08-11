// Page Load Function
function pageLoaded() {
  //Btn 1 event
  $('.section1Btn').on('click', function() {
    $('.section1').toggleClass('animated infinite bounce');
  });

  $('.section2Btn').on('click', function() {
    $('.section2').toggleClass('animated shake');
  });

  $('.section3Btn').on('click', function() {
    $('.section3').toggleClass('animated tada');
  });
}


animate4 = () => {
    $('.section4').toggleClass('animated jello');
}