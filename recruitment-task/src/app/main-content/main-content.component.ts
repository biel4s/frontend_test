import { Component } from '@angular/core';
import {FirstBlockComponent} from "./components/first-block/first-block.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    FirstBlockComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
