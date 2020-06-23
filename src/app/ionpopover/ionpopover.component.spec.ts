import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonpopoverComponent } from './ionpopover.component';

describe('IonpopoverComponent', () => {
  let component: IonpopoverComponent;
  let fixture: ComponentFixture<IonpopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonpopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonpopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
