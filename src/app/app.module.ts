import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    EtudiantComponent,
    AjouterEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
