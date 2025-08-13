import { formatSize } from '../lib/utils';

// Verification examples
console.log('Verification of formatSize function:');
console.log('====================================');

console.log('Bytes tests:');
console.log(`formatSize(0) = "${formatSize(0)}" (expected: "0 B")`);
console.log(`formatSize(512) = "${formatSize(512)}" (expected: "512 B")`);
console.log(`formatSize(1023) = "${formatSize(1023)}" (expected: "1023 B")`);

console.log('\nKilobytes tests:');
console.log(`formatSize(1024) = "${formatSize(1024)}" (expected: "1.00 KB")`);
console.log(`formatSize(1536) = "${formatSize(1536)}" (expected: "1.50 KB")`);
console.log(`formatSize(2048) = "${formatSize(2048)}" (expected: "2.00 KB")`);
console.log(`formatSize(10240) = "${formatSize(10240)}" (expected: "10.00 KB")`);

console.log('\nMegabytes tests:');
console.log(`formatSize(1048576) = "${formatSize(1048576)}" (expected: "1.00 MB")`);
console.log(`formatSize(1572864) = "${formatSize(1572864)}" (expected: "1.50 MB")`);
console.log(`formatSize(2097152) = "${formatSize(2097152)}" (expected: "2.00 MB")`);
console.log(`formatSize(10485760) = "${formatSize(10485760)}" (expected: "10.00 MB")`);

console.log('\nGigabytes tests:');
console.log(`formatSize(1073741824) = "${formatSize(1073741824)}" (expected: "1.00 GB")`);
console.log(`formatSize(1610612736) = "${formatSize(1610612736)}" (expected: "1.50 GB")`);
console.log(`formatSize(2147483648) = "${formatSize(2147483648)}" (expected: "2.00 GB")`);
console.log(`formatSize(10737418240) = "${formatSize(10737418240)}" (expected: "10.00 GB")`);

console.log('\nError handling test:');
try {
  formatSize(-1);
  console.log('formatSize(-1) = "No error thrown" (unexpected)');
} catch (error) {
  console.log(`formatSize(-1) threw error: "${error}" (expected)`);
}