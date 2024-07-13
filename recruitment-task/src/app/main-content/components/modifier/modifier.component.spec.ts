import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierComponent } from './modifier.component';

describe('SecondBlockComponent', () => {
  let component: ModifierComponent;
  let fixture: ComponentFixture<ModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
