$(document).ready(function() {
    animateDiv();

});

// function makeNewPosition() {

//     var h = $(window).height();
//     var w = $(window).width();

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);

//     return [nh, nw];

// }

// function animateDiv() {
//     var newq = makeNewPosition();
//     $('.img-2').animate({
//         top: newq[0],
//         left: newq[1]
//     }, 3000, function() {
//         animateDiv();
//     });

//     var newq = makeNewPosition();
//     $('.img-3').animate({
//         top: newq[0],
//         left: newq[1]
//     }, 2000, function() {
//         animateDiv();
//     });

// };