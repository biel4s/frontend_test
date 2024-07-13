import { Component } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.scss'
})
export class OptionSelectorComponent {

  constructor(private dataService: DataService) {  }

}
