import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-createleague',
  templateUrl: './createleague.component.html',
  styleUrls: ['./createleague.component.css']
})
export class CreateleagueComponent implements OnInit {
  leaguename: String;
  numOfTeams: Number;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onCreateSubmit(){
    const league = {
      leaguename: this.leaguename,
      numOfTeams: this.numOfTeams
    }

    // Required Fields
    if(!this.validateService.validateLeague(league)){
      this.flashMessage.show('Please fill in all fields'), {cssClass: 'alert-danger', timeout: 3000};
      return false;
    }
/*
    // Create League
    this.authService.createLeague(league).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in'), {cssClass: 'alert-success', timeout: 3000};
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong'), {cssClass: 'alert-danger', timeout: 3000};
        this.router.navigate(['/register']);
      }
    });
    */
/*
    this.authService.authenticateLeague(league).subscribe(data => {
      if(data.success){
        this.authService.storeLeagueData(data.token, data.league);
        this.flashMessage.show('You have successfuly created a league', {
          cssClass: 'alert-success', 
          timeout: 5000});
        this.router.navigate(['/leaguehome']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger', 
          timeout: 5000});
        this.router.navigate(['/createleague']);
      }
      });
      */
  }

}
