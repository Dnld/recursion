// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClass;
  var classNames = className.split(' ');
  
  var elementNodeReference = arguments[1] || document;
  var nodeList = elementNodeReference.childNodes;
  var nodeListLength = nodeList.length;
  if (nodeListLength) {
    for (var i = 0; i < nodeList.length; i++) {
      
      // determines if node has a class list
      if (nodeList[i].classList) {
        var nodeClasses = nodeList[i].classList;
        
        // determines if node has class
        for (var j = 0; j < nodeClasses.length; j++) {
          for (var k = 0; k < classNames.length; k++) {
            if (nodeClasses[j] === classNames[k]) {
              if (elementsWithClass === undefined) {
                elementsWithClass = [];
              }
              elementsWithClass.push(nodeList[i]);
            }
          }
        }
      }
      
      // recursive call function if node has children elements
      if (nodeList[i].childNodes.length >= 1) {
        var childElementsWithClass = getElementsByClassName(className, nodeList[i]);
        if (childElementsWithClass) {
          if (elementsWithClass === undefined) {
            elementsWithClass = [];
          }
          for (var l = 0; l < childElementsWithClass.length; l++) {
            elementsWithClass.push(childElementsWithClass[l]);
          }
        }
      }
    }
  }
  
  return elementsWithClass;

};
