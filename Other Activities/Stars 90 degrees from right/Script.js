function printRightTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = height; j > i; j--) {
        row += '  ';
      }
      for (let k = 1; k <= i; k++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  printRightTriangle(5);