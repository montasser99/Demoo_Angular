import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { EtudiantService } from './etudiant.service';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  ListEtudiant: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService){}

  ngOnInit(): void {
    this.GetAllEtudiant();
  }

  public GetAllEtudiant(){
    this.etudiantService.getAllEtudiant().subscribe((res:Etudiant[])=>
    {
      this.ListEtudiant= res;
      console.log(res);
    }
    );
  }

  public SupprimerEtudiant(idE:number){
    this.etudiantService.deleteEtudiant(idE).subscribe(
      ()=>{
        alert("Supprimer avec succées!")
        this.ngOnInit();
      }
    );
  }
}
