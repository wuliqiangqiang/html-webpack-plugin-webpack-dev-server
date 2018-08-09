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
            port: '8080',   //Local development port	(necessarily)
            ip:'127.0.0.1'  //Local development ip 		(Optional) 	if you set val null,The plugins will auto get your local development ip address
         })
    ]
}
```

