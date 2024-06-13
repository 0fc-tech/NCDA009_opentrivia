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
import {NgForOf, NgIf} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {Question} from "../model/question";
import {OpenTriviaService} from "../service/open-trivia.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, NgIf, NgForOf],
})
export class HomePage {
  pseudo = '';
  difficulty = 'easy';
  error? : string;
  memorize: boolean = false;
  isGameStarted = false;
  responseSubmitted = false;
  userResponse? :string;
  questionShowed? :Question;
  questionsList? :Question[];
  questionIndex = 0;
  score = 0;
  gameIsEnded = false;

  //question?: []Qestion;
  async startGame(){
    this.isGameStarted = true;
    this.questionsList =await this.openTriviaService.getQuestions(this.difficulty);
    this.questionShowed = this.questionsList[this.questionIndex];
  }
  setUserResponse(response : string){
    this.responseSubmitted=true;
    this.userResponse = response;
    if(this.isUserRight())
      this.score++;
  }
  isCorrectAnswer(answer : string):boolean{
    return answer == this.questionsList![this.questionIndex].correct_answer;
  }
  isUserRight(){
    return this.isCorrectAnswer(this.userResponse!)
  }

  getColorButton(answer : string) {
    if(!this.responseSubmitted)
      return "primary";
    else if (this.isCorrectAnswer(answer)){
      return "success";
    }
    else{
      return "danger"
    }
  }
  nextQuestion(){
    if(this.questionsList){
      if(this.questionsList.length-1 == this.questionIndex){
        this.gameIsEnded = true;
        return;
      }
      this.questionShowed = this.questionsList[++this.questionIndex];
      this.responseSubmitted=false;
    }
  }
  constructor(private openTriviaService: OpenTriviaService) {}
}
