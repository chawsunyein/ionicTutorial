import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReorderComponent } from './reorder.component';

describe('ReorderComponent', () => {
  let component: ReorderComponent;
  let fixture: ComponentFixture<ReorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
