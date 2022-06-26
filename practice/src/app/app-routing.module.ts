import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../app/book/book.component';
import { BookstoreComponent } from '../app/bookstore/bookstore.component';

// routes是有順序的
const routes: Routes = [
    { path: 'book', component: BookComponent },
    { path: 'bookstore', component: BookstoreComponent }
  ];

// forRoot：把routes陣列的內容接在root後面
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }