/**
 * Created by chang on 2017/4/10.
 */
// import 'reflect-metadata';
import 'core-js'; // include reflect & polyfill
import 'zone.js';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));