import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  listloader = [
    {
      name:"C++",
      percent: 50,
    },
    {
      name:".NET",
      percent: 70,
    },
    {
      name:"PHP",
      percent: 50,
    },
    {
      name:"MANUAL TEST",
      percent: 70,
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
