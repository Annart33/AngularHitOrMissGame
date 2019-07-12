import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MyDialogSuccessComponent } from '../my-dialog-success/my-dialog-success.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(MyDialogSuccessComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
