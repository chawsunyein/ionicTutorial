import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImgComponent } from './img.component';

describe('ImgComponent', () => {
  let component: ImgComponent;
  let fixture: ComponentFixture<ImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
