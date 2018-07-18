exports = typeof window === 'undefined'
  ? global
  : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
  },

  remove: function(arr, item) {
    arr = arr.filter(function(val) {
      return val != item;
    });

    return arr;
  },

  removeWithoutCopy: function(arr, item) {

    var arr2 = arr;

    for (var i = arr2.length - 1; i >= 0; i--) {
      if (arr2[i] === item) {
        arr2.splice(i, 1);
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)

  },

  insert: function(arr, item, index) {
    arr,
    splice(index, 0, item);
    return arr;

  },

  count: function(arr, item) {

    var count = 0;
    arr.reduce(function(previous, current) {
      if (current == item) {
        count++;
      }
    })

    return count;
  },

  duplicates: function(arr) {

    arr = arr.slice().sort();

    var dup = [];

    arir.filter(function(val, i) {
      if (arr[i - 1] === val && dup.indexOf(val) === -1) {
        dup.push(val);
      }
    });

    return dup;
  },

  square: function(arr) {
    var sqr = arr.map(function(val) {
      return Math.pow(val, 2);
    });

    return sqr;
  },

  findAllOccurrences: function(arr, target) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }

    return ret;
  }
}
