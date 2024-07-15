import { Component } from '@angular/core';
import {OptionSelectorComponent} from "./components/option-selector/option-selector.component";
import {ModifierComponent} from "./components/modifier/modifier.component";
import {TextDisplayComponent} from "./components/quote-display/text-display.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    OptionSelectorComponent,
    ModifierComponent,
    TextDisplayComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
