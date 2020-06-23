import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenusplitpaneComponent } from './menusplitpane.component';

describe('MenusplitpaneComponent', () => {
  let component: MenusplitpaneComponent;
  let fixture: ComponentFixture<MenusplitpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusplitpaneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenusplitpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
