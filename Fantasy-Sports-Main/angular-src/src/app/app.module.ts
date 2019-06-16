import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

import { CreateleagueComponent } from './components/createleague/createleague.component';
import { LeaguehomeComponent } from './components/leaguehome/leaguehome.component';
import { DraftpageComponent } from './components/draftpage/draftpage.component';
import { PostdraftleaguehomeComponent } from './components/postdraftleaguehome/postdraftleaguehome.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { StandingsComponent } from './components/standings/standings.component';
import { ScoresComponent } from './components/scores/scores.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'createleague', component: CreateleagueComponent, canActivate:[AuthGuard]},
  {path: 'leaguehome', component: LeaguehomeComponent, canActivate:[AuthGuard]},
  {path: 'draftpage', component: DraftpageComponent, canActivate:[AuthGuard]},
  {path: 'postdraftleaguehome', component: PostdraftleaguehomeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CreateleagueComponent,
    LeaguehomeComponent,
    DraftpageComponent,
    PostdraftleaguehomeComponent,
    ScheduleComponent,
    StandingsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [ValidateService, AuthService, AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
