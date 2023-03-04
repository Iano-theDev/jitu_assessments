import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  ownerName: string;
  description: string;
  longDescription: string;
  photoUrl: string;
  location: string;
}


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  dogs: Dog[] = [
    {
      name: "jax",
      ownerName: "Ian",
      description: "German Sheperd",
      longDescription: "From kenya",
      photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDu7OOYQYPdFZU8s30u1zq5V-MaWuasyjsfzQQh6zPHXnK3-UGq-yJp9cQ0pTq8JJyW44&usqp=CAU",
      location: "Nyeri"
    },
    {
      name: "Pupps",
      ownerName: "Ian",
      description: "Rotwiller",
      longDescription: "From K town",
      photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDu7OOYQYPdFZU8s30u1zq5V-MaWuasyjsfzQQh6zPHXnK3-UGq-yJp9cQ0pTq8JJyW44&usqp=CAU",
      location: "Nyeri"
    },
  ]

  constructor() { }
}
