import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplitepaneComponent } from './splitepane.component';

describe('SplitepaneComponent', () => {
  let component: SplitepaneComponent;
  let fixture: ComponentFixture<SplitepaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitepaneComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SplitepaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
