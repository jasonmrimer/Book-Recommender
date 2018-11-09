import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public books:Book[];
  emotions: Emotion[];
  emotionScore: EmotionScore[];
  emotionRanking: EmotionRanking[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Book[]>(baseUrl + 'api/book/GetAllBooks').subscribe(result => {
      this.books = result;
    }, error => console.error(error));
    http.get<Emotion[]>(baseUrl + 'api/e/GetAllEmotions').subscribe(result => {
      this.emotions= result;
    }, error => console.error(error));
    http.get<EmotionScore[]>(baseUrl + 'api/emotionscore/GetAllEmotionScores').subscribe(result => {
      this.emotionScore = result;
    }, error => console.error(error));
    http.get<EmotionRanking[]>(baseUrl + 'api/emotionranking/findBestRanking').subscribe(result => {
      console.log(result);
      this.emotionRanking = result;
    }, error => console.error(error));
  }
}

interface Book {
  title: string;
  author: string;
  bookid: number;
  genreid: number;
  pictureFilePath: string;
}

interface Emotion {
  emotionid: number;
  emotion: string;
}

interface EmotionScore {
  emotionscoreid: number,
  emotionid: number,
  bookid: number,
  score: number
}

interface EmotionRanking {
  emotionscoreid: number;
  emotionid: number;
  bookid: number;
  score: number;
  emotion: string;
  title: string;
  author: string;
  genreid: number;
  pictureFilePath: string;
}