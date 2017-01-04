Write a function that returns the total surface area and volume of a box as an array: [area, volume].


function getSize(width, height, depth){
  let surfaceArea = (depth * width * 2) + (width * height * 2) + (depth * height * 2);
  let volume = height * width * depth;
  return [surfaceArea, volume];
}

--------------------->

const getSize = (w, h, d) => [
  (w * h + w * d + h * d) * 2,
  w * h * d
];
