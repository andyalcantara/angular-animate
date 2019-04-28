import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { InFromTopModule } from './in-from-top/in-from-top.module';
import { AttrFromTopDirective } from './attr-from-top.directive';
import {TestDirectivesService} from './test-directives.service';
import {InFromBottomModule} from './in-from-bottom/in-from-bottom.module';

@NgModule({
  declarations: [
    AppComponent,
    AttrFromTopDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InFromTopModule,
    InFromBottomModule
  ],
  providers: [TestDirectivesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
