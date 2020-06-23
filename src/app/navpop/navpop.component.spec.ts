import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavpopComponent } from './navpop.component';

describe('NavpopComponent', () => {
  let component: NavpopComponent;
  let fixture: ComponentFixture<NavpopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavpopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
