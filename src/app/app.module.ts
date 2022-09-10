import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './@core/core.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { PaginationComponent } from './components/pages/pagination/pagination.component';
import { ModalComponent } from './components/pages/modal/modal.component';
import { LocationModalComponent } from './components/pages/location-modal/location-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { FavoriteCharacterComponent } from './components/pages/favorite-character/favorite-character.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './components/pages/pipes/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    PaginationComponent,
    ModalComponent,
    LocationModalComponent,
    FavoriteCharacterComponent,
    SearchComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    // BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
