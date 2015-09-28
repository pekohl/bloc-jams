var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
        point.style.opacity=1;
        point.style.transform="scaleX(1) translateY(0)";
        point.style.msTransform = "scaleX(1) translateY(0)";
        point.style.WebkitTransform = "scaleX(1) translateY(0)";
    };

var animatePoints = function(points) {
    forEach(points, revealPoint);
};

//    for(var i=0; i < pointsArray.length; i++) {
//        revealPoint(i);            
//        }


//        var revealFirstPoint = function() {
//         points[0].style.opacity = 1;
//         points[0].style.transform = "scaleX(1) translateY(0)";
//         points[0].style.msTransform = "scaleX(1) translateY(0)";
//         points[0].style.WebkitTransform = "scaleX(1) translateY(0)";   
//        };
//
//        var revealSecondPoint = function() {
//         points[1].style.opacity = 1;
//         points[1].style.transform = "scaleX(1) translateY(0)";
//         points[1].style.msTransform = "scaleX(1) translateY(0)";
//         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";   
//        };
//
//        var revealThirdPoint = function() {
//         points[2].style.opacity = 1;
//         points[2].style.transform = "scaleX(1) translateY(0)";
//         points[2].style.msTransform = "scaleX(1) translateY(0)";
//         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";   
//        };
//
//
//        revealFirstPoint();
//        revealSecondPoint();
//        revealThirdPoint();  



window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
// Automatically animate the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
    
    window.addEventListener('scroll', function(event) {
        console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
        if (document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
 
 }