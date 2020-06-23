import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonplatformComponent } from './ionplatform.component';

describe('IonplatformComponent', () => {
  let component: IonplatformComponent;
  let fixture: ComponentFixture<IonplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonplatformComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
