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
  readonly currentText: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private addedTexts: string[] = [];
  private textArray: string[] = [];
  nameData$: Observable<string> = this.nameData.asObservable();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<string[]>(this.apiUrl).subscribe({
      next: (data: string[]): void => {
        this.textArray = data;
      },
      error: (err): void => {
        console.error(err);
      }
    });
  }

  setSelectedOption(option: number): void {
    this.selectedOption.next(option);
  }

  setCurrentText(text: string): void {
    this.currentText.next(text);
  }

  replaceText(): void {
    const selectedOption: number = this.selectedOption.value;
    const currentIndex: number = this.textArray.indexOf(this.currentText.value);
    this.addedTexts = [];

    switch (selectedOption) {
      case 0:
        this.setCurrentText(this.textArray[0]);
        this.addedTexts = [this.textArray[0]];
        break;
      case 1:
        this.setCurrentText(this.textArray[1]);
        this.addedTexts = [this.textArray[1]];
        break;
      case 2:
        let randomIndex: number = Math.floor(Math.random() * this.textArray.length);
        while (currentIndex === randomIndex) {
          randomIndex = Math.floor(Math.random() * this.textArray.length);
        }
        this.setCurrentText(this.textArray[randomIndex]);
        this.addedTexts = [this.textArray[randomIndex]];
        break;
      default:
        break;
    }
  }

  addText(): void {
    const selectedOption: number = this.selectedOption.value;
    let nextText: string = '';

    const handleText = (textIndex: number): void => {
      nextText = this.textArray[textIndex];
      if (this.currentText.value === nextText || this.addedTexts.includes(nextText)) {
        alert('Tekst nie jest unikalny!');
      } else {
        this.addedTexts.push(nextText);
        const updatedTexts: string =
          this.addedTexts.sort().map(newText => `<span>${newText}</span>`).join(' ');
        this.currentText.next(updatedTexts);
      }
    };

    switch (selectedOption) {
      case 0:
        handleText(0);
        break;
      case 1:
        handleText(1);
        break;
      case 2:
        if (this.addedTexts.length >= this.textArray.length) {
          alert('Nie ma więcej tekstów do wykorzystania.');
          return;
        }
        let randomIndex: number;
        do {
          randomIndex = Math.floor(Math.random() * this.textArray.length);
        } while (this.addedTexts.includes(this.textArray[randomIndex]));
        handleText(randomIndex);
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
    this.addedTexts = [];
    this.nameData.next('');
    this.currentText.next('');
  }
}
