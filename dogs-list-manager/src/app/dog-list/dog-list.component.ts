import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit{
  constructor(readonly dogsService: DogsService){}

  ngOnInit(): void {

  }
}
