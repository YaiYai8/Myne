const fs = require('fs');
const path = require('path');

const code = `
const dirPath = path.join('C:', 'Temp', 'YAIR');
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}
`;
eval(code);
