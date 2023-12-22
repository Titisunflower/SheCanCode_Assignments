function printPascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      let number = 1;
  
      for (let j = 0; j < rows - i - 1; j++) {
        row += '  ';
      }
      for (let j = 0; j <= i; j++) {
        row += number.toString() + '   ';
        number = number * (i - j) / (j + 1);
      }
  
      console.log(row);
    }
}
printPascalsTriangle(10);
  