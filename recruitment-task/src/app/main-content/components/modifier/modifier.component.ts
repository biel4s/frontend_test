import { Component } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [],
  templateUrl: './modifier.component.html',
  styleUrl: './modifier.component.scss'
})
export class ModifierComponent {

  constructor(private dataService: DataService) {  }

  replaceQuote(): void {
    this.dataService.replaceQuote();
  }

}
