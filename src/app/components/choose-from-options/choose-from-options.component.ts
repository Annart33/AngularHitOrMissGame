import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-choose-from-options',
  templateUrl: './choose-from-options.component.html',
  styleUrls: ['./choose-from-options.component.css']
})
export class ChooseFromOptionsComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<ChooseFromOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
