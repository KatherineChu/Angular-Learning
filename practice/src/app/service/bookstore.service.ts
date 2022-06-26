import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookstore } from '../model/bookstore'

const baseURL = 'http://localhost:8080/item7/bookstore';

@Injectable({
  providedIn: 'root'
})

export class BookstoreService {
  

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Bookstore[]> {
    return this.httpClient.get<Bookstore[]>(`${baseURL}/all`);
  }

  public create(data): Observable<Bookstore> {
    return this.httpClient.post<Bookstore>(baseURL, data);
  }

  public update(id, data): Observable<Bookstore> {
    return this.httpClient.put<Bookstore>(`${baseURL}/${id}`, data);
  }

  public delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
  
}
