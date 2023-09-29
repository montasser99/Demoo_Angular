import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { AppComponent } from './app.component';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';

const routes: Routes = [
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'ajouterEtudiant', component: AjouterEtudiantComponent },
  { path: 'Modifieretudiant/:idEtudiant/:nomEtudiant/:adresseEtudiant', component: ModifierEtudiantComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
