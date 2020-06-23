import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HidewhenComponent } from './hidewhen.component';

describe('HidewhenComponent', () => {
  let component: HidewhenComponent;
  let fixture: ComponentFixture<HidewhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidewhenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HidewhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
