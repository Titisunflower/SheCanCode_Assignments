function printLeftTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  printLeftTriangle(5);