import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RadiogroupComponent } from './radiogroup.component';

describe('RadiogroupComponent', () => {
  let component: RadiogroupComponent;
  let fixture: ComponentFixture<RadiogroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiogroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RadiogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
