import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-draftpage',
  templateUrl: './draftpage.component.html',
  styleUrls: ['./draftpage.component.css']
})
export class DraftpageComponent implements OnInit {

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

}
