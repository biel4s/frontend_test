import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private readonly apiUrl: string = environment.apiBaseUrl;
  private readonly nameData: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly selectedOption: BehaviorSubject<number> = new BehaviorSubject<number>(NaN);
  readonly currentQuote: BehaviorSubject<string> = new BehaviorSubject<string>('');
  quotes: string[] = [];
  nameData$: Observable<string> = this.nameData.asObservable();

  constructor(private http: HttpClient) {
    this.fetchQuotes();
  }

  fetchQuotes() {
    this.http.get<string[]>(this.apiUrl).subscribe({
      next: (data: string[]): void => {
        this.quotes = data;
      },
      error: (err): void => {
        console.error(err);
      }
    });
  }

  setSelectedOption(option: number): void {
    this.selectedOption.next(option);
  }

  setCurrentQuote(quote: string): void {
    this.currentQuote.next(quote);
  }

  replaceQuote(): void {
    const selectedOption: number = this.selectedOption.value;
    const currentIndex: number = this.quotes.indexOf(this.currentQuote.value);

    switch (selectedOption) {
      case 0:
        this.setCurrentQuote(this.quotes[0]);
        break;
      case 1:
        this.setCurrentQuote(this.quotes[1]);
        break;
      case 2:
        let randomIndex: number = Math.floor(Math.random() * this.quotes.length);
        while (currentIndex === randomIndex) {
          randomIndex = Math.floor(Math.random() * this.quotes.length);
        }
        this.setCurrentQuote(this.quotes[randomIndex])
        break;
      default:
        return;
    }
  }

  addName(name: string): void {
    this.nameData.next(name);
  }
}


