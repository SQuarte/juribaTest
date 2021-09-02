import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YoutubeSearchResponseI } from '../models/youtube.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeListService {
  private params = new HttpParams().appendAll({
    key: 'AIzaSyCk7rffO2TUohckJ3Q9plMmRWub-QeocUE',
    maxResults: 50,
    type: 'video',
    part: 'snippet',
    q: 'john'
  })

  constructor(private http: HttpClient) { }

  getYoutubeData(): Observable<YoutubeSearchResponseI> {
    return this.http.get<YoutubeSearchResponseI>(
      'https://www.googleapis.com/youtube/v3/search',
      { params: this.params }
    );
  }
}
