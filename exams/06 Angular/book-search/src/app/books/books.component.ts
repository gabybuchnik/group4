import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BooksService } from './books.service';
import { book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  search: string;
  books: book[];
  hasMore: boolean;
  constructor(private booksService: BooksService) {
    this.search = "";
    this.books = [];
    this.hasMore = null;
  }
  ngOnInit() {
  }
  async serachBook(e: Event) {
    e.preventDefault();
    this.books = [];
    this.search = this.searchInput.nativeElement.value;
    this.booksService.clearBooks();
    this.booksService.clearIndex();
    this.getBooks();
  }
  loadMore(e: Event) {
    e.preventDefault();
    this.search = this.searchInput.nativeElement.value;
    this.getBooks();
  }
  async getBooks() {
    await this.booksService.getBooksApi(this.search);
    this.books = this.booksService.getBooks();
    this.hasMore = this.booksService.getHasMore();
  }
}
