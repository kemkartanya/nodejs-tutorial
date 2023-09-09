const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');
const b = path.dirname('C:\\temp\\myfile.html');

console.log(a);
console.log(b);

const c = path.extname('C:\\temp\\myfile.html');
console.log(c);