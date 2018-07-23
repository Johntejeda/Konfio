exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  rreduceString = function(str, amount) {
  var count = 0;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
      if (count < amount) {
        result += str[i];
      }
    } else {
      count = 0;
      result += str[i];
    }
  };
  return result;
}

  wordWrap: function(str, cols) {

  },

  function reverseString(str) {

    var strArray = str.split("");
    strArray.reverse();

    var strReverse = strArray.join("");

    return strReverse;
  }

  reverseString("hello");
};
