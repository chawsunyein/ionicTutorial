import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FablistComponent } from './fablist.component';

describe('FablistComponent', () => {
  let component: FablistComponent;
  let fixture: ComponentFixture<FablistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FablistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FablistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
