import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenutoggleComponent } from './menutoggle.component';

describe('MenutoggleComponent', () => {
  let component: MenutoggleComponent;
  let fixture: ComponentFixture<MenutoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutoggleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenutoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
