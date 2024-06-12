import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf],
})
export class HomePage {
  pseudo = '';
  difficulty = 'easy';
  error? : string;
  memorize: boolean = false;
  isGameStarted = false;
  responseSubmitted = false;
  userResponse? :string;

  startGame(){
    this.isGameStarted = true;
  }
  setUserResponse(response : string){
    this.responseSubmitted=true;
    this.userResponse = response;
  }
  constructor() {}
}
