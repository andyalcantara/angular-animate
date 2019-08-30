import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { Angular2AnimationsModule } from './angular2/angular2.module';
import { MouseEnterDirective } from './cool-anim/mouse-enter.directive';
import { MouseClickDirective } from './cool-anim/mouse-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseEnterDirective,
    MouseClickDirective
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
