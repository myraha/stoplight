//user sees light cycle change from green to yellow to red
//red and green lights will last the longest
//yellow light will last the shortest

$(document).ready(function () {


  function green() {
    // first = setInterval(green, 300);
    $('#redLight').css('opacity', 0.2)
    $('#yellowLight').css('opacity', 0.2)
    $('#greenLight').css('opacity', 1)
    // clearInterval(first);
  };

  function yellow() {
    // second = setInterval(yellow, 300);
    $('#yellowLight').css('opacity', 1)
    $('#greenLight').css('opacity', 0.2)
    clearInterval(greenOn);
  };

  function red() {
    $('#redLight').css('opacity', 1)
    $('#yellowLight').css('opacity', 0.2)
    clearInterval(yellowOn);
    greenOn = setInterval(green, 5000);
    yellowOn = setInterval(yellow, 10000);
  };

  var greenOn = setInterval(green, 5000);
  var yellowOn = setInterval(yellow, 10000);
  var redOn = setInterval(red, 18000);

})











// var redLight = setInterval ('#red', (4000))
// var yellowLight = setInterval ('#green', (5000))
// var greenLight = setInterval ('#yellow', (8000))
//
// function red(){
//   if $('#red' == redLight)
//     $('#yellow').toggle(hidden)
//     $('#green').toggle(hidden)
// }
//
// function green(){
//   if $('#green' == greenLight)
//     $('#yellow').toggle(hidden)
//     $('#red').toggle(hidden)
// }
//
// function yellow(){
//   if $('#red' == redLight)
//     $('#yellow').toggle(hidden)
//     $('#green').toggle(hidden)
// }


// var redLight = setInterval(function(){
//   $('#red').toggleClass('red')
// },1000) clearInterval(redLight);
//
//
// var yellowLight = setInterval(function(){
//   $('#yellow').toggleClass('yellow')
//
// },1000) clearInterval(yellowLight);
//
// var greenLight = setInterval(function(){
//   $('#green').toggleClass('green')
//
// },3000) clearInterval(greenLight);
//
// })
