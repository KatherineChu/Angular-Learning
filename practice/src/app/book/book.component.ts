import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [
    BookService
  ]
})
export class BookComponent implements OnInit {

  submitted = false;
  books: Book[];
  newBook: Book = {
    bookId: 0,
    bookName: '',
    bookAuthor: '',
    bookPrice: 0
  };
  
  constructor(private bookService: BookService) {
    this.books = [];
  }

  ngOnInit(): void {
    this.getBooks();
  }

  saveBook(): void {
    const data = {
      bookName: this.newBook.bookName,
      bookAuthor: this.newBook.bookAuthor,
      bookPrice: this.newBook.bookPrice
    };
    this.bookService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.getBooks();
        },
        error: (e) => console.error(e)
      });
  }

  addBook(): void {
    this.submitted = false;
    this.newBook = {
      bookId: 0,
      bookName: '',
      bookAuthor: '',
      bookPrice: 0
    };
  }

  getBooks(): void {
    this.bookService.getAll()
      .subscribe((data) => {
        this.books = data;
        console.log(data);
      });
  }

  deleteBook(id:number): void {
    this.bookService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getBooks();
        },
        error: (e) => console.error(e)
      });
  }

  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }
}