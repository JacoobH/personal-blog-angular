import { Component, OnInit } from '@angular/core';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText: string;
  constructor(private event: EventService) { }

  ngOnInit() {
  }

  search(searchText: string) {
    this.event.changeMessage(searchText);
  }
}
