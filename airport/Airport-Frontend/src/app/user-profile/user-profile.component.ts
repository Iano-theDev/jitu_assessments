import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent{

  // userName = this.auth.getName;



  show=false

  constructor(public auth:AuthService){}

  userName = this.auth.getName()

  confirmUpdate(){
    this.show=!this.show
  }



}
