import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-portfolio';

  constructor() { }
  isNotMobile: boolean = true;
  isMobile: boolean = false;
  bioText:string = `I'm a Software Engineer and Entrepreneur based out of Kansas City, Missouri. I have been augmenting my skills with the full-stack as well as becoming familiar with Angular Javascript
  and browser technologies. I have experience utilizing WPF, .NET CORE, .NET CORE MVC, and many other technologies. I’m deemed proficient (176) by Pluralsight IQ in the C# language. 
  I picked up the OOP fundamentals during my undergraduate studies at DeVry University as well as various methodologies related to the System Development Life-Cycle. 
  I’m always eager to learn new technologies and design principles to produce adaptable, testable, loosely coupled code. A few of my desired philosophies with software development 
  include the following: Good abstractions, encapsulation, leveraging dependency injection for loose coupling, creating strong unit tests during development to promote accurate dependable
   code that is versatile and resistant to future changes.  I can offer an adroit approach to any task I am assigned, 
  and have been successful in testing situations including project completion. I'm most grateful for a few minutes of your time to examine my portfolio.`;

  ngOnInit() {

    if (window.screen.width < 380) {
      this.isNotMobile = false;
    }

    if (window.screen.width < 380)
      this.isMobile = true;
  }
}

