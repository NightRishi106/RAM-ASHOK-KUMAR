function testColor(r, g, b) {
  // invert
  let ir = 255 - r;
  let ig = 255 - g;
  let ib = 255 - b;
  console.log(`Inverted: ${ir}, ${ig}, ${ib}`);
}
testColor(218, 165, 32); // Goldenrod
