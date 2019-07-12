import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { PlayGameComponent } from '../play-game/play-game.component';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css'],
  providers: [PlayGameComponent]
})
export class MyDialogComponent implements OnInit {

  public computerNumber: number;

  constructor(private router: Router, public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private playGame: PlayGameComponent) {

    this.computerNumber = Number(localStorage.getItem("computerNumber"));
  }

  ngOnInit() { }


  yes(): void {
    this.router.navigate(['/play']);
  }

  no(): void {

    this.router.navigate(['/main']);

  }

}
