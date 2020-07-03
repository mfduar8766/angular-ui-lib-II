import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'button';
import { CardModule } from 'card';
import { ModalModule } from 'modal';
import { SideBarModule } from 'sidebar';
import { AutoCompleteModule } from 'dist/autocomplete';
import { SplitbuttonModule } from 'dist/splitbutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    ModalModule,
    SideBarModule,
    SplitbuttonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
