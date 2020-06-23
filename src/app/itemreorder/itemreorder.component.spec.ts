import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemreorderComponent } from './itemreorder.component';

describe('ItemreorderComponent', () => {
  let component: ItemreorderComponent;
  let fixture: ComponentFixture<ItemreorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemreorderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemreorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
