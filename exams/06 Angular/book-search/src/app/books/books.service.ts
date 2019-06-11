import { Injectable } from '@angular/core';
import { book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: book[];
  index: number;
  url: string;
  hasMore: boolean;
  constructor() {
    this.books = [];
    this.index = 0;
    this.hasMore = true;
  }
  async getBooksApi(search: string) {
    this.url = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyBQx_8AIKCiQdYGcIR2cvlo3ljjOq5bDNc&q=' + search + '&startIndex=' + this.index;
    const data = await fetch(this.url).then(async (res) => await res.json());
    data.items ? this.setBooks(data.items) : this.setHasMore();
    console.log(data.items);
  }
  setBooks(data) {
    this.books = this.books.concat(data);
    this.hasMore = true;
    this.index += 10;
  }
  setHasMore() {
    this.hasMore = false;
  }
  getBooks() {
    return this.books;
  }
  clearBooks() {
    this.books = [];
  }
  clearIndex() {
    this.index = 0;
  }
  getHasMore(){
    return this.hasMore;
  }
}
