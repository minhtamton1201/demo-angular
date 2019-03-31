import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processbar',
  templateUrl: './processbar.component.html',
  styleUrls: ['./processbar.component.css']
})
export class ProcessbarComponent implements OnInit {

  listProcess = [
    {
      name: "CSS & HTML",
      percent: 50,
    },
    {
      name: ".NET",
      percent: 50,
    },
    {
      name: "ANIMATION",
      percent: 50,
    },
    {
      name: "RESPONSIVE",
      percent: 50,
    }

  ]
  
  project={name:"WEB DEVELOPMENT",project1:"- Building a website to sell books online by using .Net core and Sql server. This website have and admin page to add edit and manage bill, infomation's customers."}
  constructor() {
  }

  ngOnInit() {
  }

}
