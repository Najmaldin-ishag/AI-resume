// Simple test script for the formatSize function
// This mimics the implementation to verify it works correctly

function formatSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}

// Test cases
const testCases = [
  0,                  // 0 Bytes
  500,                // 500 Bytes
  1023,               // 1023 Bytes
  1024,               // 1 KB
  1500,               // 1.46 KB
  1024 * 1024,        // 1 MB
  1024 * 1024 * 2.5,  // 2.5 MB
  1024 * 1024 * 1024, // 1 GB
  20 * 1024 * 1024    // 20 MB (from FileUploader)
];

// Run tests
console.log("Testing formatSize function:");
console.log("---------------------------");
testCases.forEach(bytes => {
  console.log(`${bytes} bytes = ${formatSize(bytes)}`);
});