'use strict';

let fs = require('fs');
let path = require('path');
let log = require('n-s-logs');

let root = global.fp.root;

let copyFile = function (src, tar) {
    fs.createReadStream(src).pipe(fs.createWriteStream(tar));
};

let init = {
    run: function () {
        this.initConfig();
    },
    initConfig: function () {
        var confSrc = path.join(__dirname, './../sample/fastpage.config.js');
        var confTar = path.join(root, 'fastpage.config.js');

        fs.existsSync(confTar) ? this.existsWarn() : this.createFile(confSrc, confTar);
    },
    existsWarn: function() {
        log.warn('already exists: fastpage.config.js');
    },
    createFile: function(confSrc, confTar) {
        copyFile(confSrc, confTar);
        log.ok('fastpage.config.js created.');
    }
};

module.exports = init;