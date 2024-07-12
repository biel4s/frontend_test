import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly nameData: BehaviorSubject<string> = new BehaviorSubject<string>('');

  nameData$: Observable<string> = this.nameData.asObservable();

  constructor() { }

  addName(name: string): void {
    this.nameData.next(name);
  }
}
