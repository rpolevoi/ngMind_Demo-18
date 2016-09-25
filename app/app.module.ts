import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child/child.component';
import { StoreService } from './store.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent ],
  providers: [ StoreService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
