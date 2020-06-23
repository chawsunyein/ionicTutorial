import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemslidingComponent } from './itemsliding.component';

describe('ItemslidingComponent', () => {
  let component: ItemslidingComponent;
  let fixture: ComponentFixture<ItemslidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemslidingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemslidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
