import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidezone',
  templateUrl: './asidezone.component.html',
  styleUrls: ['./asidezone.component.scss']
})
export class AsidezoneComponent implements OnInit {

  componentTitle = "mon Titre en variable";

  zoneTitle = 'aside zone';
  @Input('data') messages: any;
  @Input() singleMessage: any;



  constructor() {
  }

  ngOnInit(): void {
  }

  defineZoneTitle() {
    this.zoneTitle = 'Listes des messages'
  }

}
