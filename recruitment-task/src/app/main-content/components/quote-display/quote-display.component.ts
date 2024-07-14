import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-display.component.html',
  styleUrl: './quote-display.component.scss'
})
export class QuoteDisplayComponent implements OnInit {
  displayQuote: string = '';
  subscription: Subscription | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.currentQuote.subscribe(
      quote => this.displayQuote = quote
    );
  }
}
