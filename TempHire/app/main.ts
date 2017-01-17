import { platformBrowser } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
//import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModule(AppComponent);
