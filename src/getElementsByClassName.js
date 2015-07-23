// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elementNodeReference = arguments[1] || document;
  var nodeList;
  if (elementNodeReference === document) {
    nodeList = elementNodeReference.body.childNodes;
  } else {
    nodeList = arguments[1].childNodes; 
  }
  for (var i = 0; i < nodeList.length; i++) {
      var classes = nodeList[i].classList;
      if (classes !== undefined && classes.length > 0) {
        console.log(classes);
        for (var j = 0; j < classes.length; j++) {
          console.log(classes[j]);
          if (classes[j] == className) {
            console.log(nodeList[i]);
          }
        }
      }
    if (nodeList[i].childNodes) {
      getElementsByClassName(className, nodeList[i]);
    }
  }
};
