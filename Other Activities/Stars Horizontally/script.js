function printHorizontalStars(width) {
    let row = '';
    for (let i = 1; i <= width; i++) {
      row += '* ';
    }
    console.log(row);
}
  
printHorizontalStars(7);