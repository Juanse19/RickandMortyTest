import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/pages/character/character.component';
import { FavoriteCharacterComponent } from './components/pages/favorite-character/favorite-character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'character/:page', component: CharacterComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'favorite', component: FavoriteCharacterComponent },
  { path: '**', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
