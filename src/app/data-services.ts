import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Joke } from './shared/joke';


@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  getjoke(): Observable<any> {
    console.log("dsdsd")
    return this.http.get('http://localhost:3000/api/bears', {responseType: 'json'});
  }
}