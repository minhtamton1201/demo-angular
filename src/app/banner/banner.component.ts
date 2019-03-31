import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  person = { name :"Tam Ton",datebirth:"12-01-1997",work:"Frontend Developer",adress:"HCM Viet Nam",email:"tam.ton@kyanon.digital",phone:"0368710219",status:"Single"}
  constructor() { }

  ngOnInit() {
  }

}
