import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { EtudiantService } from '../etudiant/etudiant.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css'],

})
export class AjouterEtudiantComponent implements OnInit {
  ListEtudiant: Etudiant = {
    idEtudiant: 0,
    nomEtudiant: '',
    adresseEtudiant: '',
  };


  constructor(
    private etudiantService: EtudiantService,
  ) {}

  ngOnInit(): void {}

  public AjouterEtudiant() {
    if(this.ListEtudiant.nomEtudiant=="" || this.ListEtudiant.adresseEtudiant==""){
      alert("Veuillez remplir tous les champs"); 
    return;
    }
    this.etudiantService.AddEtudiant(this.ListEtudiant).subscribe(() => {
      console.log(this.ListEtudiant);

    });
  }
}