import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { IconboxComponent } from './iconbox/iconbox.component';
import { LoaderComponent } from './loader/loader.component';
import { ProcessbarComponent } from './processbar/processbar.component';
import { FooterComponent } from './footer/footer.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        BannerComponent,
        LoaderComponent,
        IconboxComponent,
        ProcessbarComponent,
        FooterComponent


      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });



  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-project!');
  // });
});
