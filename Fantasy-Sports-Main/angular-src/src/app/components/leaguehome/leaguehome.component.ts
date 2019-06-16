import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-leaguehome',
  templateUrl: './leaguehome.component.html',
  styleUrls: ['./leaguehome.component.css']
})
export class LeaguehomeComponent implements OnInit {

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

}
