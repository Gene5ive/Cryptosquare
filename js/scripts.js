var squared = function(sentence) {
  var squaredArray = [];

  sentence = sentence.toLowerCase().replace(/[\W\s]/g, "");
  var squareRoot = Math.sqrt(sentence.length);
  var rows = Math.floor(squareRoot);
  var columns = Math.ceil(squareRoot);

  var idx = 0;

  // Each row
  for (var a = 0; a < rows; a++) {
    var stringSection = "";

    // Each column
    for (var b = 0; b < columns; b++) {
      if (sentence[idx]) {
        stringSection += sentence[idx];
        idx += 1;
      }
    }
    squaredArray.push(stringSection);
  }

  return squaredArray;

};

// var scrambled = function(squaredArray) {
//   var charCount = ;
//   var countSquareRoot = ;
//
//   var rows    = Math.ceil(countSquareRoot);
//   var columns = rows;
//
//
//   line = [];
//
//   // Columns
//   for (var c = 0; c < columns; c++) {
//     line.push((squaredArray[c]).charAt(c))
//
//     // Rows
//     for (var d = 0; d < rows; d++) {
//       line.push((squaredArray[d]).charAt(d))
//     }
//   }
// };
