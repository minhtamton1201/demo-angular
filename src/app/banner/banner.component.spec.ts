import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should info has defined', () => {
    expect(component.person).toBeDefined();
  });
  it('should info not empty', () => {
    expect(component.person).not.toEqual(null);
  });
  it('should get image', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    
    var elementImage=compiled.querySelector('.profile-img img').getAttribute('src');
    // const fileExists = require('file-exists'); 
    // expect(fileExists.sync(elementImage)).toEqual('True');
    expect(elementImage).toEqual("../../assets/images/avatar.jpg");
  });
  it('should info to equal with defined', () => {
    expect(component.person).toEqual({ name :"Tam Ton",datebirth:"12-01-1997",work:"Frontend Developer",adress:"HCM Viet Nam",email:"tam.ton@kyanon.digital",phone:"0368710219",status:"Single"});
  })
  it('should render name in a h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.intro h2').textContent).toContain('Tam Ton');
  });
  it('should render name is not empty', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.intro h2').textContent).not.toEqual("");
  });

  
});
