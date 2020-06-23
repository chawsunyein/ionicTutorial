import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavpushComponent } from './navpush.component';

describe('NavpushComponent', () => {
  let component: NavpushComponent;
  let fixture: ComponentFixture<NavpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpushComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
