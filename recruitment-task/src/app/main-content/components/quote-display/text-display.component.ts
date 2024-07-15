import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-text-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.scss'
})
export class TextDisplayComponent implements OnInit {
  displayText: string = '';
  subscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.currentText.subscribe(
      text => this.displayText = text
    );
  }
}
