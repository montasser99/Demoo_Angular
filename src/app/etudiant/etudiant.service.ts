import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAllEtudiant() {
    return this.http.get<Etudiant[]>(`${this.baseUrl}/etudiant`, this.httpOptions);
  }

  AddEtudiant(etudiant: Etudiant) {
    return this.http.post<Etudiant>(`${this.baseUrl}/etudiant/add`, etudiant, this.httpOptions);
  }

  updateEtudiant(etudiant: Etudiant) {
    return this.http.put<Etudiant>(`${this.baseUrl}/etudiant/updateEtudiant`, etudiant, this.httpOptions);
  }

  deleteEtudiant(idEtudiant: number) {
    // Assuming you need to pass the department's ID to delete it
    return this.http.delete(`${this.baseUrl}/etudiant/delete/${idEtudiant}`, this.httpOptions);
  }


}
