import { Component } from '@angular/core';
import {FirstBlockComponent} from "./components/first-block/first-block.component";
import {SecondBlockComponent} from "./components/second-block/second-block.component";
import {ThirdBlockComponent} from "./components/third-block/third-block.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
