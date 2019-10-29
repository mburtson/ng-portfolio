import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}
  isMobile: boolean;
  badgeHeight:number;

  gitClick() {
    window.open("https://www.github.com/mburtson");
  }

  psClick(){
    window.open("https://www.pluralsight.com/profile/mburtson");
  }

  lInClick(){
    window.open("https://www.linkedin.com/in/mark-burtson-18b55b130/")
  }

  ngOnInit() {
    if (window.screen.width < 300) {
      this.isMobile = true;
    }
  }
}
