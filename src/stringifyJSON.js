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
    for (var i in obj) {
      if (i === 'undefined' || 
        obj[i] === undefined || 
        stringifyJSON(obj[i]) === undefined) {
        continue;
      }
      JSONString += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',';
    }
    if (JSONString.length > 1) {
      JSONString = JSONString.substring(0, JSONString.length - 1);
    }
    return JSONString += '}';
  }
  
  if (typeof obj === 'function') {
    if (obj() === undefined) {
      return;
    }
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  return String(obj);
};
