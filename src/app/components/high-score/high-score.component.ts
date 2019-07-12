import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HighScoreService } from 'src/app/services/high-score.service';
import { HighScore } from 'src/app/models/highScore';
import { PlayGameComponent } from '../play-game/play-game.component';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css'],
  
})
export class HighScoreComponent implements OnInit {

  public rankings: HighScore[] = [];
  private highScoreModel: HighScore = new HighScore();
  public isHighScoreSubmitted: Boolean;


  constructor(private hishScoreService: HighScoreService, private router: Router, private cd: ChangeDetectorRef) {
    this.isHighScoreSubmitted = false;
  }

  ngOnInit() {
    this.logIt();
  
  }

  logIt() {
    // if (localStorage.getItem('isSubmitted') == 'true'){
  //   this.isHighScoreSubmitted = true;
  // } else {
  //   this.isHighScoreSubmitted = false;
  // }
  let ob = this.hishScoreService.getAllHighScores();
  ob.subscribe(ranks => this.rankings = ranks);
  this.highScoreModel.highScore = Number(sessionStorage.getItem("highScore"));
  this.highScoreModel.date = formatDate(new Date(), 'dd.MM.yyyy', 'en');

  }


  sumbit(): void {
    localStorage.setItem("isSubmitted", "true");
    this.isHighScoreSubmitted = true;
    let ob = this.hishScoreService.addHighScore(this.highScoreModel);
    ob.subscribe(score => {
      this.highScoreModel.highScore = Number(sessionStorage.getItem("highScore"));
      this.highScoreModel.scoreId = 1;
      this.rankings.push(this.highScoreModel);
    // }, error => {
      // alert("Please Try Again");
    });
  }

  replay(): void {
    this.isHighScoreSubmitted = false;
    // localStorage.setItem('isSubmitted', 'false');
    this.router.navigate(['/play']);
  }

  close(): void {
    this.router.navigate(['/main']);
  }


}


