# Angular2 Animations

Angular2Animations package provide a set of directive for animating
html elements.

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
import { Angular2AnimationsModule } from 'angular2-animations';

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

Examples:

```html
<h1 animFlip [flipDelay]="200" [flipRepeat]="2">Hello World</h1>
```
[animMouseEnter] is a different animation it is meant to signify that the mouse enter a certain area.
A circle with the color specified will expand from the position at which the mouse entered the element.
It can be controlled the timing of the animation when it enters and the timing of the animation when leaves.
```html
<div animMouseEnter [inTiming]="400" [outTiming]="500"></div>
```
[animate-button] is the same animation as animMouseEnter but only available for buttons
```html
<button animate-button [clickColor]="'purple'" [inTiming]="800">Click Me</button>
<button animBounce [bounceDelay]="1000" [bounceRepeat]="2">Click me too</button>
```
![animate-button](animate-button.gif)
Work in progress!!! New animations and features coming soon!
