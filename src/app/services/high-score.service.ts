import { Injectable } from '@angular/core';
import { HighScore } from '../models/highScore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HighScoreService {

  constructor(private http: HttpClient) { }

  public addHighScore(highScore: HighScore): Observable<HighScore>{
    return this.http.post<HighScore>("http://localhost:8080/hitOrMissProject/rest/game/highScore", highScore,{withCredentials:true});  
  }

  public getAllHighScores(): Observable<HighScore[]>{
    return this.http.get<HighScore[]>("http://localhost:8080/hitOrMissProject/rest/game/allScores",{withCredentials:true});  
  }

  public getHighScoresByName(playerName: string): Observable<HighScore[]>{
    return this.http.get<HighScore[]>("http://localhost:8080/hitOrMissProject/rest/game/byName/"+playerName,{withCredentials:true});  
  }
}
