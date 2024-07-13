import { Component } from '@angular/core';
import {OptionSelectorComponent} from "./components/option-selector/option-selector.component";
import {ModifierComponent} from "./components/modifier/modifier.component";
import {QuoteDisplayComponent} from "./components/quote-display/quote-display.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    OptionSelectorComponent,
    ModifierComponent,
    QuoteDisplayComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
