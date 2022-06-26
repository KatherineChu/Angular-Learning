import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book'

const baseURL = 'http://localhost:8080/item7/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${baseURL}/all`);
  }

  public create(data): Observable<Book> {
    return this.httpClient.post<Book>(baseURL, data);
  }

  public update(id, data): Observable<Book> {
    return this.httpClient.put<Book>(`${baseURL}/${id}`, data);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
}
