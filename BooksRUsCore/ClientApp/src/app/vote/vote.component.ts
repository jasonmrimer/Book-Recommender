import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../book/book";
import {Emotion} from "../emotion/emotion";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() book: Book;
  @Input() emotions: Emotion[];
  @Output('book') bookEmitter = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  nextBook(book: Book) {
    this.bookEmitter.emit(book);
  }
}
