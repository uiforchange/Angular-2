import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Joke } from './shared/joke';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  getjoke(): Observable<Joke> {
    return this.http.get<Joke>('http://localhost:3000/api/bears')
  }
}