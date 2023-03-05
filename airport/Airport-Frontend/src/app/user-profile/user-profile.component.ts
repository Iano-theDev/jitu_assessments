import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent  {

  show=false

  constructor(public auth:AuthService){

  }

  confirmUpdate(){
    this.show=!this.show
  }

}
