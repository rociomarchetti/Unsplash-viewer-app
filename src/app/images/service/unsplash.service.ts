import { Images } from './../interfaces/images.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  key: string = 'pUX2Mz2kavk-njn8RhfPRZmmAQbcp0cZSvzjmy-dlRM'

  callApi(counter: number): Observable<Images[]> {
    return this.http.get<Images[]>(`https://api.unsplash.com/photos?page=${counter}`,
    {
      headers: {
        Authorization: `Client-ID ${this.key}`,
      },
    })
  }

  constructor(private http: HttpClient) { }
}