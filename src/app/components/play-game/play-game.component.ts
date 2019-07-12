import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ValidNumberComponent } from '../valid-number/valid-number.component';
import { ChooseFromOptionsComponent } from '../choose-from-options/choose-from-options.component';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],

})
export class PlayGameComponent implements OnInit {

  private myText: string;
  private myText2: string;
  private attemptAmount: any;
  private userGuess: any;
  private computerNumber: any;
  private userGuessValidtion: boolean;
  private difficultyLevel: Number;
  private amountOfTries: number;
  private isUserWon: boolean;
  private amountOfHits: number;
  private amountOfNearHit: number;
  private allGuesses: any;
  private totalHighScore: number;
  private winnerNumber: number;


  constructor(private router: Router, public dialog: MatDialog) {
    this.myText2 = "";
    this.myText = "";
    this.attemptAmount = 0;
    this.userGuess = 0;
    this.computerNumber = 0;
    this.userGuessValidtion = false;
    this.isUserWon = false;
    this.amountOfHits = 0;
    this.amountOfNearHit = 0;
    this.allGuesses = [];
    this.totalHighScore = 0;
    this.amountOfTries = 0;
    this.winnerNumber = 0;
  }


  ngOnInit() {

  }

  start(): void {
    this.amountOfTries = this.getAmountOfTries();
    this.computerNumber = this.generateComputerNumber();
    alert(this.computerNumber);
    localStorage.setItem("computerNumber", JSON.stringify(this.computerNumber));
    this.userGuessValidtion = true;
  }

  getValidUserGuess(): number {
    var i;
    this.attemptAmount++;

    this.userGuess = Number(this.myText);

    while (this.userGuess < 1000 || this.userGuess > 9999 || this.isDigitExistTwice(this.userGuess)) {
      this.attemptAmount--;

      const dialogRef = this.dialog.open(ValidNumberComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

      return;
    }


    this.amountOfHits = this.calcAmountOfHits(this.computerNumber, this.userGuess);
    if (this.amountOfHits == 4) {
      this.isUserWon = true;
      this.winnerNumber++;
      this.totalHighScore = this.calcHighScore();
      sessionStorage.setItem('highScore', JSON.stringify(this.totalHighScore));
      this.router.navigate(["/success"]);
    }

    if (this.amountOfTries <= 1) {
      this.totalHighScore = 0;
      this.router.navigate(['/fail']);
    }

    else {
      this.amountOfNearHit = this.calcAmountOfNearHit(this.computerNumber, this.userGuess);
      this.amountOfTries = this.amountOfTries - 1;
    }


    this.allGuesses.push({ "attemptAmount": this.attemptAmount, "amountOfHits": this.amountOfHits, "amountOfNearHit": this.amountOfNearHit, "myText2": this.userGuess });


  }

  isDigitExistTwice(computerNumber: number): boolean {
    let digits: Array<boolean> = new Array();
    var digit;
    while (computerNumber != 0) {
      digit = computerNumber % 10;
      if (digits[digit] == true) {
        return true;
      }

      digits[digit] = true;
      computerNumber = Math.floor(computerNumber / 10);
    }
    return false;
  }

  calcAmountOfNearHit(computerNumber: any, userGuess: any) {

    var numOfHits = this.calcAmountOfHits(computerNumber, userGuess);

    var i;
    var digit1 = 0;
    var digit2 = 0;
    var nearHits = 0;
    var userGueesArray: Array<Number> = [];
    var reservedComputerNumber = computerNumber;


    for (i = 0; i < 4; i++) {

      digit1 = userGuess % 10;

      userGueesArray[i] = digit1;

      userGuess = Math.floor(userGuess / 10);

    }

    for (i = 0; i < userGueesArray.length; i++) {

      computerNumber = reservedComputerNumber;

      while (computerNumber != 0) {

        digit2 = computerNumber % 10;


        if (userGueesArray[i] == digit2) {
          nearHits++;
        }

        computerNumber = Math.floor(computerNumber / 10);
      }

    }

    nearHits = nearHits - numOfHits;

    return nearHits;
  }

  calcAmountOfHits(computerNumber: any, userGuess: any) {


    let userGueesArray: Array<Number> = [];
    let computerNumberArray: Array<Number> = [];
    var digit1 = 0;
    var digit2 = 0;
    var i;

    for (i = 0; i < 4; i++) {

      digit1 = userGuess % 10;

      userGueesArray[i] = digit1;

      userGuess = Math.floor(userGuess / 10);

      digit2 = computerNumber % 10;

      computerNumberArray[i] = digit2;

      computerNumber = Math.floor(computerNumber / 10);
    }

    var bullNumber = 0;

    for (i = 0; i < 4; i++) {
      if (userGueesArray[i] == computerNumberArray[i]) {
        bullNumber++;
      }

    }
    return bullNumber;
  }


  generateComputerNumber(): number {
    var min = Math.ceil(1000);
    var max = Math.floor(9000);
    var computerNumber = Math.floor(Math.random() * (max - min)) + min;

    while (this.isDigitExistTwice(computerNumber) == true) {
      computerNumber = Math.floor(Math.random() * (max - min)) + min;
    }
    return computerNumber;
  }


  getAmountOfTries(): number {
    this.difficultyLevel = Number(this.myText2);
    while (this.difficultyLevel < 1 || this.difficultyLevel > 3) {
      const dialogRef = this.dialog.open(ChooseFromOptionsComponent, {
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
      // throw new Error("User Entered Wrong Number");
    }
    if (this.difficultyLevel == 1) {
      return 15;
    }
    if (this.difficultyLevel == 2) {
      return 12;
    }
    if (this.difficultyLevel == 3) {
      return 9;
    }
  }

  calcHighScore(): number {

    var highScore: any;

    if (this.difficultyLevel == 1) {
      highScore = this.amountOfTries * 2000;
    }

    if (this.difficultyLevel == 2) {
      highScore = this.amountOfTries * 5000;
    }

    if (this.difficultyLevel == 3) {
      highScore = this.amountOfTries * 10000;
    }


    return highScore;
  }



}


