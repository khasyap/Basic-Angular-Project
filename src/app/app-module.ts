import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Services } from './services/services';
import { Gallery } from './gallery/gallery';
import { Navbar } from './navbar/navbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Services,
    Gallery,
    Navbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
