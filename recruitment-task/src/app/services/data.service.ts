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
  private readonly selectedOption: BehaviorSubject<number> = new BehaviorSubject<number>(NaN);
  readonly currentQuote: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private addedQuotes: string[] = [];
  private quotes: string[] = [];
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
    this.addedQuotes = [];

    switch (selectedOption) {
      case 0:
        this.setCurrentQuote(this.quotes[0]);
        this.addedQuotes = [this.quotes[0]];
        break;
      case 1:
        this.setCurrentQuote(this.quotes[1]);
        this.addedQuotes = [this.quotes[1]];
        break;
      case 2:
        let randomIndex: number = Math.floor(Math.random() * this.quotes.length);
        while (currentIndex === randomIndex) {
          randomIndex = Math.floor(Math.random() * this.quotes.length);
        }
        this.setCurrentQuote(this.quotes[randomIndex]);
        this.addedQuotes = [this.quotes[randomIndex]];
        break;
      default:
        break;
    }
  }

  addQuote(): void {
    const selectedOption: number = this.selectedOption.value;
    let nextQuote: string = '';

    const handleQuote = (quoteIndex: number): void => {
      nextQuote = this.quotes[quoteIndex];
      if (this.currentQuote.value === nextQuote || this.addedQuotes.includes(nextQuote)) {
        alert('Cytat nie jest unikalny!');
      } else {
        this.addedQuotes.push(nextQuote);
        const updatedQuotes: string =
          this.addedQuotes.sort().map(newQuote => `<span>${newQuote}</span>`).join(' ');
        this.currentQuote.next(updatedQuotes);
      }
    };

    switch (selectedOption) {
      case 0:
        handleQuote(0);
        break;
      case 1:
        handleQuote(1);
        break;
      case 2:
        if (this.addedQuotes.length >= this.quotes.length) {
          alert('Nie ma więcej cytatów do wykorzystania.');
          return;
        }
        let randomIndex: number;
        do {
          randomIndex = Math.floor(Math.random() * this.quotes.length);
        } while (this.addedQuotes.includes(this.quotes[randomIndex]));
        handleQuote(randomIndex);
        break;
      default:
        console.log("Niepoprawna opcja.");
        break;
    }
  }

  addName(name: string): void {
    this.nameData.next(name);
  }

  resetSettings(): void {
    this.addedQuotes = [];
    this.nameData.next('');
    this.currentQuote.next('');
  }
}


