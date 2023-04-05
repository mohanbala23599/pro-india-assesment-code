import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent implements OnInit {
  @Input()title! : string
  constructor() { }

  ngOnInit(): void {
  }

}
