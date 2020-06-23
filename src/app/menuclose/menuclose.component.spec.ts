import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenucloseComponent } from './menuclose.component';

describe('MenucloseComponent', () => {
  let component: MenucloseComponent;
  let fixture: ComponentFixture<MenucloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucloseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenucloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
