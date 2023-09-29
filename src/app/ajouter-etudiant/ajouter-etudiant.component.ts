import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../Models/Etudiant';
import { EtudiantService } from '../etudiant/etudiant.service';
import { MessageService } from 'primeng/api'; // Import MessageService from primeng/api
import { Message } from 'primeng/api'; // Import Message from primeng/api

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css'],
  providers: [MessageService],
})
export class AjouterEtudiantComponent implements OnInit {
  ListEtudiant: Etudiant = {
    idEtudiant: 0,
    nomEtudiant: '',
    adresseEtudiant: '',
  };

  messages: Message[] = []; // Change to Message[]

  constructor(
    private etudiantService: EtudiantService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  public AjouterEtudiant() {
    this.etudiantService.AddEtudiant(this.ListEtudiant).subscribe(() => {
      console.log(this.ListEtudiant);

      // Show the success message
      this.messageService.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'The student was added successfully.',
      });
    });
  }
}