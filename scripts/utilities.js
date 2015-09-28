//var loopArray = document.getElementsByName('point');
    
function forEach(array, callback) {
    for(var i=0; i < array.length; i++) { 
        callback(array[i]);
    }
}

//function sellingPoint () {
//    
//             loopArray[i].style.opacity = 1;
//             loopArray[i].style.transform = "scaleX(1) translateY(0)";
//             loopArray[i].style.msTransform = "scaleX(1) translateY(0)";
//             loopArray[i].style.WebkitTransform = "scaleX(1) translateY(0)";                   
//        }
//}
//
//utility(sellingPoint);