import { Component, OnInit } from '@angular/core';

export interface Person {
  firstname: string;
  lastname: string;
  nationality?: string;
}


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  userAvatar!: string;

  persons: Person[] = [
    {
      firstname: 'nico',
      lastname: 'nico',
    },
    {
      firstname: 'rene',
      lastname: 'la taupe',
      nationality: 'ukrainien'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.userAvatar = "http://www.asfinformatique.com/images/livreDor/avatar.png";
  }

}
