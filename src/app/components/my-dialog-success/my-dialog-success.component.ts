import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dialog-success',
  templateUrl: './my-dialog-success.component.html',
  styleUrls: ['./my-dialog-success.component.css']
})
export class MyDialogSuccessComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<MyDialogSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  goToHighScoreTable(): void {

    this.router.navigate(["/highScore"]);

  }

  playAgain(): void {

    this.router.navigate(['/play']);
  }

}
