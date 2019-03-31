import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconbox',
  templateUrl: './iconbox.component.html',
  styleUrls: ['./iconbox.component.css']
})
export class IconboxComponent implements OnInit {

  listiconbox = [
    {
      name: "PHOTOSHOP",
      content: "Use tools of Adobe Photoshop to design landing pages, admin pages and convert to css html."
    },
    {
      name: "CSS3 & HTML5",
      content: "Ability to design the basic site using CSS3, HTML5, JQUERY to complete this site."
    },
    {
      name: "ANIMATION",
      content: "Ability to design the basic site using Javascript, CSS , HTM and using ANIMATION, RESPONSIVE to complete this site."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
