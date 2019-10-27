import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  isMobile: boolean;


  ngOnInit() {
    if(window.screen.width < 300) {
      this.isMobile=true;
    }
  }

}
