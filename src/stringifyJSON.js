// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var JSONString = '[';
    for (var i = 0; i < obj.length; i++) {
      JSONString += i === undefined ? null : stringifyJSON(obj[i]);
      JSONString += i != obj.length - 1 ? ',' : '';
    }
    return JSONString += ']';
  }
  
  if (String(obj) === '[object Object]') {
    var JSONString = '{';
    var index = 0;
    for (var i in obj) {
      var key = stringifyJSON(i);
      var val = stringifyJSON(obj[i]);
      if (key === 'undefined' || val === 'undefined') {
        continue;
      } else if (index === 0) {
        JSONString += key + ':' + val;
        index++;
      } else {
        JSONString += ',' + key + ':' + val;
      }
    }
    return JSONString += '}';
  }
  
  if (typeof obj === 'function') {
    return stringifyJSON(obj());
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  return String(obj);
};
