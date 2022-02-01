import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { EditionComponent } from './components/tableau/edition/edition.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { MusiqueDetailResolver } from './resolvers/musique-detail-resolver/musique-detail.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'edit/:id', component: EditionComponent, resolve: { musique: MusiqueDetailResolver } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
