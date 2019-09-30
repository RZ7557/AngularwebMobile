import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCreateComponent } from './pages/liste/liste-create/liste-create.component';
import { ListeDetailsComponent } from './pages/liste/liste-details/liste-details.component';
import { ListeIndexComponent } from './pages/liste/liste-index/liste-index.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCreateComponent,
    ListeDetailsComponent,
    ListeIndexComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
