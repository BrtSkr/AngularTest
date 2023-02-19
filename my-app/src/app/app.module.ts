import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandleDataComponent } from './components/handle-data/handle-data.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { NewComponentComponent } from './components/new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HandleDataComponent,
    UserDataComponent,
    NewComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
