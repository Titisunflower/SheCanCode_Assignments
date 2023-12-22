function calculateCircleArea(radius) {
    // Use the formula for the area of a circle: A = π * r^2
    const area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  function calculateRectangleArea(length, width) {
    const area = length * width;
    return area;
  }
  
  const shapeType = prompt("Enter the shape (circle or rectangle):").toLowerCase();
  
  if (shapeType === "circle") {
    const radiusInput = prompt("Enter the radius of the circle:");
    const radius = parseFloat(radiusInput);
  
    if (!isNaN(radius) && radius >= 0) {
      const circleArea = calculateCircleArea(radius);
      console.log(`The area of the circle is: ${circleArea.toFixed(2)}`);
    } else {
      console.log("Invalid input. Please enter a valid non-negative number for the radius.");
    }
  } else if (shapeType === "rectangle") {
    const lengthInput = prompt("Enter the length of the rectangle:");
    const widthInput = prompt("Enter the width of the rectangle:");
  
    const length = parseFloat(lengthInput);
    const width = parseFloat(widthInput);
  
    if (!isNaN(length) && !isNaN(width) && length >= 0 && width >= 0) {
      const rectangleArea = calculateRectangleArea(length, width);
      console.log(`The area of the rectangle is: ${rectangleArea.toFixed(2)}`);
    } else {
      console.log("Invalid input. Please enter valid non-negative numbers for the length and width.");
    }
  } else {
    console.log("Invalid shape. Please enter either 'circle' or 'rectangle'.");
  }
  