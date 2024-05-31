import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryViewModel } from './story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'https://localhost:7102/api/story';

  constructor(private http: HttpClient) { }

  getStories(): Observable<StoryViewModel[]> {
    return this.http.get<StoryViewModel[]>(this.apiUrl);
  }
}

