import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonNoteComponent } from './ion-note.component';

describe('IonNoteComponent', () => {
  let component: IonNoteComponent;
  let fixture: ComponentFixture<IonNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonNoteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
