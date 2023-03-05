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

  show=false
  userName = this.auth.getName()

  role = this.auth.getRole()

  constructor(public auth:AuthService){}

  confirmUpdate(){
    this.show=!this.show
    this.auth.setName(this.userName)
    this.auth.setRole(this.role)
    
  }

  cancelUpdate(){
    this.show=!this.show
    this.userName
    this.role
  }



}
