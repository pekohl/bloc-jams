var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var revealPoint = function(index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)";
        points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    for (var i = 0; i < points.length; i++) {
        revealPoint(i);
    }
};

window.onload = function() {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
// Automatically animate the points on a tall screen where scrolling can't trigger the animation

    
    window.addEventListener('scroll', function(event) {
        console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
        if (document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
 
 };
