import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonmodalComponent } from './ionmodal.component';

describe('IonmodalComponent', () => {
  let component: IonmodalComponent;
  let fixture: ComponentFixture<IonmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonmodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
