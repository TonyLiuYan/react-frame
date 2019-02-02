const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const config = {
    mode: 'development',
    entry: path.resolve(appDirectory, 'src/index.js'),
    output: {
        path: path.resolve(appDirectory, 'dist'),
        filename: 'boundle.js'
    }
}

module.exports = config;