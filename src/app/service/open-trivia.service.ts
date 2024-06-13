import { Injectable } from '@angular/core';
import {Question} from "../model/question";

@Injectable({
  providedIn: 'root'
})
export class OpenTriviaService {

  constructor() { }

  async getQuestions(difficulty: string):Promise<Array<Question>> {
    return [
      {
        category: "Entertainment: Japanese Anime & Manga",
        type: "multiple",
        difficulty: "easy",
        question: "In &quot;Fairy Tail&quot;, what is the nickname of Natsu Dragneel?",
        correct_answer: "The Salamander",
        incorrect_answers: ["The Dragon Slayer", "The Dragon", "The Demon"],
        answers:["The Salamander","The Dragon Slayer", "The Dragon", "The Demon"]
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "medium",
        question: "Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series" +
          "where you don\'t play as William &quot;B.J.&quot; Blazkowicz",
        correct_answer: "False",
        incorrect_answers: ["True"],
        answers: ["False","True"]

  }
  ]

  }
}
