import { Component, OnInit } from '@angular/core';
import { Bookstore } from '../model/bookstore';
import { BookstoreService } from '../service/bookstore.service';

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css'],
  providers: [
    BookstoreService
  ]
})
export class BookstoreComponent implements OnInit {

  submitted = false;
  bookstores: Bookstore[];
  newBookstore: Bookstore = {
    bookstoreId: 0,
    bookstoreName: '',
    bookstoreAddress: '',
    bookstorePhone: ''
  };
  
  constructor(private bookstoreService: BookstoreService) {
    this.bookstores = [];
  }

  ngOnInit(): void {
    this.getBookstores();
  }

  saveBook(): void {
    const data = {
      bookName: this.newBookstore.bookstoreName,
      bookAuthor: this.newBookstore.bookstoreAddress,
      bookPrice: this.newBookstore.bookstorePhone
    };
    this.bookstoreService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.getBookstores();
        },
        error: (e) => console.error(e)
      });
  }

  addBookstore(): void {
    this.submitted = false;
    this.newBookstore = {
      bookstoreId: 0,
      bookstoreName: '',
      bookstoreAddress: '',
      bookstorePhone: ''
    };
  }

  getBookstores(): void {
    this.bookstoreService.getAll()
      .subscribe((data) => {
        this.bookstores = data;
        console.log(data);
      });
  }

  deleteBook(id:number): void {
    this.bookstoreService.delete(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getBookstores();
        },
        error: (e) => console.error(e)
      });
  }

  onRowEditInit(book: Bookstore) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Bookstore) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Bookstore, index: number) {
    console.log('Row edit cancelled');
  }
}
