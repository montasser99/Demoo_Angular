import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EtudiantService } from '../etudiant/etudiant.service';
import { Etudiant } from '../Models/Etudiant';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit  {

  updatedEtudiant: Etudiant = {
    idEtudiant: 0, // Set default values or appropriate initial values
    nomEtudiant: '',
    adresseEtudiant: ''
  };

  //old data request :
  ListeOldEtudiant : Etudiant ={
    idEtudiant:0,
    nomEtudiant:'',
    adresseEtudiant:''
  }

  

  constructor(private route: ActivatedRoute,
     private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.updatedEtudiant.idEtudiant = params['idEtudiant'];
      this.updatedEtudiant.nomEtudiant = params['nomEtudiant'];
      this.updatedEtudiant.adresseEtudiant = params['adresseEtudiant'];

      //Old data for test
      this.ListeOldEtudiant.idEtudiant=params['idEtudiant'];
      this.ListeOldEtudiant.nomEtudiant=params['nomEtudiant'];
      this.ListeOldEtudiant.adresseEtudiant=params['adresseEtudiant'];

    });
}

public ModifierEtudiant(){
  if(this.updatedEtudiant.nomEtudiant == this.ListeOldEtudiant.nomEtudiant 
    && this.updatedEtudiant.adresseEtudiant==this.ListeOldEtudiant.adresseEtudiant){
      alert("No changes detected");
      return;
    }
this.etudiantService.updateEtudiant(this.updatedEtudiant).subscribe((
  data)=>{alert("Updated successfully");}, (error)=>{} );
}

}
