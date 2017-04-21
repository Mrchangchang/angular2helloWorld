/**
 * Created by chang on 2017/4/10.
 */
// import 'reflect-metadata';
require('core-js'); // include reflect & polyfill
require('zone.js');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map