import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonListComponent } from './ion-list.component';

describe('IonListComponent', () => {
  let component: IonListComponent;
  let fixture: ComponentFixture<IonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
