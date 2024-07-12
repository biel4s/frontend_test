import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected isMenuActive: boolean = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

}
