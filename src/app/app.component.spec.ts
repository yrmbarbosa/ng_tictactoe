import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TictactoeModule } from './tictactoe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,        
      ],
      imports: [
        TictactoeModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
