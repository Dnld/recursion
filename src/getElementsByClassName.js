// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClass = [];
  var classNames = className.split(' ');
  var classNamesLength = classNames.length;
  if (classNamesLength > 1) {
    classNames = classNames.sort();
  }
  
  var searchForClass = function(elementNodeReference) {
    elementNodeReference = elementNodeReference || document;
    if (elementNodeReference.classList) {
      var nodeClasses = Array.prototype.slice.call(
        elementNodeReference.classList, 0);
      if (classNamesLength === 1 && nodeClasses.indexOf(classNames[0]) > 0) {
        elementsWithClass.push(elementNodeReference);
      } else if (String(classNames) == String(nodeClasses.sort())) {
        elementsWithClass.push(elementNodeReference);
      }
    }
    if (elementNodeReference.childNodes) {
      for (var i = 0; i < elementNodeReference.childNodes.length; i++) {
        searchForClass(elementNodeReference.childNodes[i]);
      }
    }
  };
  
  searchForClass();
  return elementsWithClass;

};
