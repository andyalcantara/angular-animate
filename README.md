# Angular2 Animations

Installing instructions:
```
npm install --save angular2-animations
```

After installing the npm package just need to add the Angular2AnimationsModule module
to your app.module.ts

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// Import Angular2Animations Module
import { Angular2AnimationsModule } from './angular2/angular2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2AnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
After this you are all set!!!

Example:

```html
<h1 animFlip>Hello World</h1>
```

Work in progress!!! New animations and features coming soon!
