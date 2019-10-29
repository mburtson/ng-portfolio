import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  title:string ='Mark Burtson';

  constructor() { }

  openResume()
  {
    window.open("/assets/docs/resume.pdf");
  }

  ngOnInit() {
  }

}
