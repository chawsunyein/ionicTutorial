import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowwhenComponent } from './showwhen.component';

describe('ShowwhenComponent', () => {
  let component: ShowwhenComponent;
  let fixture: ComponentFixture<ShowwhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowwhenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowwhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
