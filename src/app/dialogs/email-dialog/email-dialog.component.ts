import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.css']
})
export class EmailDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmailDialogComponent>) { }


  closeDialog(){
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
