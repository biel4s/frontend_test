import { Component } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected isMenuActive: boolean = false;

  constructor(private dataService: DataService) { }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  resetSettings(): void {
    this.dataService.resetSettings();
    this.toggleMenu();
  }

  showName(): void {
    this.dataService.addName('Kamil Bielawski');
    this.toggleMenu();
  }
}
