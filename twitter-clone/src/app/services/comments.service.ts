import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${postId}`);
  }
}
