let os = require('os');
let hostName = os.hostname();
let interfaces = os.networkInterfaces();
let IPv4 = '127.0.0.1';
for (var key in interfaces) {
    var alias = 0;
    interfaces[key].forEach((details) => {
        if (details.family == 'IPv4' && key == 'en0') {
            IPv4 = details.address;
        }
    });
}

function webpackAutoRefreshPlugin({ port, ip }) {
    this.port = port;
    this.ip = ip ? ip : IPv4;
}

webpackAutoRefreshPlugin.prototype.apply = function(compiler) {
    compiler.hooks.compilation.tap('webpackAutoRefreshPlugin', (compilation) => {
        compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
            'webpackAutoRefreshPlugin',
            (data, cb) => {
                if (!this.port) {
                    cb(null, data)
                } else {
                    let html = data.html;
                    html = html.replace(/\n/g, '');
                    let fristScriptTapIndex = html.indexOf('</body');
                    let reg = new RegExp('(.{' + fristScriptTapIndex + '})')
                    html = html.replace(reg, `$1<script src="http://${this.ip?this.ip:'localhost'}:${this.port}/webpack-dev-server.js"></script>`);
                    data.html = html;
                    cb(null, data)
                }
            }
        )
    })
}

module.exports = webpackAutoRefreshPlugin;