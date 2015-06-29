exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    return arr.indexOf(item);

    // for ( var a = 0; a < arr.length; a++ )
    //   if ( arr[a] == item)
    //     return a;
    //   else
    //     console.log(a);

  },

  sum : function(arr) {

    var sum = 0
    for ( var a = 0; a < arr.length; a++ )
      sum += arr[a];
    return sum;



  },

  remove : function(arr, item) {
    var dub = arr;
    while (dub.indexOf(item) !== -1) {
      var found = dub.indexOf(item);
      dub.splice(found, 1); 
     
  }
    return dub;  
  },

  removeWithoutCopy : function(dub, item) {
    while (dub.indexOf(item) !== -1) {
      var found = dub.indexOf(item);
      dub.splice(found, 1); 
     
  }
    return dub; 

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++ )
      if (arr[i] == item)
        count++;
    return count;
  },

  duplicates : function(arr) {
    var count = 0;
    var dup = [];
    for (var i = 0; i < arr.length; i++ ) {
      for (var ix = 0; ix < arr.length; ix++ ) {
        if (arr[i] == arr[ix] && dup.indexOf(arr[i]) < 0 && i !== ix)
            dup.push(arr[ix]);
}}
    return dup;


  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++ ) {
      arr[i] = Math.pow(arr[i],2);
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occur = []
    for (var i = 0; i < arr.length; i++ )
      if (arr[i] == target) {
        occur.push(i);

    }
    return occur;
  }
};
