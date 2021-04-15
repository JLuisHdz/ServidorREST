import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HistorialvPage } from './historialv.page';

describe('HistorialvPage', () => {
  let component: HistorialvPage;
  let fixture: ComponentFixture<HistorialvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
