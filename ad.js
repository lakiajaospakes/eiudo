// Example compilationResult object
const compilationResult = {
  'out/test.sv': '/path/to/test.sv', // Assuming this exists and is truthy
  'out/main.sv': null, // falsy value
  'out/report.txt': '/path/to/report.txt' // truthy value
};

// Check if 'out/test.sv' exists in compilationResult and is truthy
if (compilationResult['out/test.sv']) {
  console.log(`Path to test.sv: ${compilationResult['out/test.sv']}`);
  // Additional logic related to 'out/test.sv'
} else {
  console.log('Path to test.sv not found or falsy.');
}

// Further checks or actions based on other properties in compilationResult
// For example:
if (compilationResult['out/report.txt']) {
  console.log(`Path to report.txt: ${compilationResult['out/report.txt']}`);
}
