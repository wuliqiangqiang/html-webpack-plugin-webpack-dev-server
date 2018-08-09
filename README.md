### what it do?
This plugin is based on html-webpack-plugin and webpack-dev-server. It mainly implements multi-entry files. When the import file changes, webpack-dev-server automatically refreshes the browser.
Multi-entry files are mainly key-value 
eq:
```js
{
    "entrn1":"xx/xx/xx1.js",
    "entrn2":"xx/xx/xx2.js"
}
```

### how use？
```js
const webpackAutoRefreshPlugin = require('html-webpack-plugin-webpack-dev-server');
{
    plugins:[
        ...
        new webpackAutoRefreshPlugin({ 
            port: '8080',   //Local development port
            ip:'127.0.0.1'  //Local development ip
         }) //只在本地开发手动添加webpack的自动更新script
    ]
}
```

