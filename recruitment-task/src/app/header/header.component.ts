import { Component } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  name: string | undefined;

  constructor(private dataService: DataService) {
    this.dataService.nameData$.subscribe(name => this.name = name);
  }

}
