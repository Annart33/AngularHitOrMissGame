import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-valid-number',
  templateUrl: './valid-number.component.html',
  styleUrls: ['./valid-number.component.css']
})
export class ValidNumberComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<ValidNumberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
