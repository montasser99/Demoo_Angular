import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'ajouterEtudiant', component: AjouterEtudiantComponent },
  { path: '', component: EtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
