import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemoptionComponent } from './itemoption.component';

describe('ItemoptionComponent', () => {
  let component: ItemoptionComponent;
  let fixture: ComponentFixture<ItemoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemoptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
