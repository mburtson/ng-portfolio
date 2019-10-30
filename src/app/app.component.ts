import { Component, OnInit, HostListener, OnChanges, SimpleChanges } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EmailDialogComponent } from './dialogs/email-dialog/email-dialog.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = "ang-portfolio";

  constructor(private http: HttpClient, public dialog:MatDialog) {}
  isNotMobile: boolean = true;
  isMobile: boolean = false;
  size: number = 50;
  color: string = "black";
  expanded: boolean = true;
  email: string;
  message: string;
  subject: string = "Portfolio Message";
  newPost: Observable<any>;
  myEmail: FormControl; 
  buttonIsDisabled: boolean = true;

 

  bioText: string = `I'm a Software Engineer and Entrepreneur based out of Kansas City, Missouri, and I have been augmenting my skills with the full-stack. Recently, I have invested time in learning Angular and browser technologies. I have experience utilizing WPF, .NET CORE, .NET CORE MVC, and many other technologies. I’m deemed proficient (176) by Pluralsight IQ in the C# language. 
  I picked up the OOP fundamentals during my undergraduate studies at DeVry University as well as various methodologies related to the System Development Life-Cycle. 
  I’m always eager to learn new technologies and design principles to produce adaptable, testable, loosely coupled code. A few of my desired philosophies with software development 
  include the following: Good abstractions, encapsulation, leveraging dependency injection for loose coupling, creating strong unit tests during development to promote accurate dependable
   code that is versatile and resistant to future changes.  I can offer an adroit approach to any task I am assigned, 
  and have been successful in testing situations including project completion. I'm most grateful for a few minutes of your time to examine my portfolio.`;

  truemarksText: string = `Oversee development operations, Information Systems, and server hardware infrastructure. Coordinate with business stakeholders to translate target market requirements into code.
   Design, develop, unit test, and maintain software solutions. Maintain code repositories & work order items via Azure Devops. Manage domain controller and infrastructure licensing with Azure Active Directory
    and Office 365 Admin Console.`;

  kcpdText: string = `Respond to crime scenes. Collect, preserve, and examine digital multimedia evidence. Report analysis and render expert witness testimony. Conduct comparison analysis of questioned subjects 
  and/or objects to known subjects and/or objects. Fulfill imagery enhancement requests. Create video compositions for courtroom presentation. Provide technical assistance to Officers and Detectives and troubleshoot
   hardware/software issues. Perform peer-review of casework analysis and reports. Maintained a javascript application for the documentation of CCTV video recovery that performs time offset calculations. Quality Assurance 
   Software System Administrator.`;

  mcText: string = `Furnished contracted floor covering labor for commercial, residential, and multifamily. My self-discipline, work ethic, and goal-driven motivation has enabled me to provide a sought after brand in my trade. 
   By being a team player, and holding integrity to a high standard I have been able to build business relationships that are invaluable. Supervised up to three individuals during peak season, and was a preferred contractor for 
   MC Flooring’s government contracts. Gained access to complete projects at Fort Leavenworth, and Lake City Ammunition plant. Engaged in brief Spanish conversations with other contractors.`;

  llText: string = `Lablok is a WPF Case Management System built specifically for Forensic Video Analysts. Lablok handles tracking & reporting of chain of custody, lab requests, case files, lab reports, lab case records, and reviews. 
   Lablok aids in the workflow of a Forensic Video Analyst. Lablok compiles a complete discovery package for all data associated to a case. Lablok is a Windows-Based desktop application to be released in late 2019.`;

  dvrText: string = `DVR RECords is an Angular (Ionic) mobile application designed to facilate the recovery of video data from CCTV systems. DVR RECords aids investigators and forensic specialists in CCTV system documentation, time calibration, and reporting. 
   The application offers automated time calibration for conducting the time difference between DVR system time and the actual time as well as automated reports sent to the user's inbox.`;

  @HostListener("window:resize", [])
  onResize() {
    var width = window.innerWidth;
    if (width < 750) {
      this.isMobile = true;
      this.isNotMobile = false;
    } else {
      this.isMobile = false;
      this.isNotMobile = true;
    }
  }

  onEmailChanges(emailValue: string):void {
    console.log(emailValue);
    if (this.myEmail.hasError('required')){
      this.buttonIsDisabled = true;
    }
    if (!this.myEmail.hasError('required')){
      this.buttonIsDisabled = false ;
    }
  
  }
  submitForm() {
    let headers = new HttpHeaders({
      'Content-Type': 'application-json',
      'Authorization': 'Accept'
    })
    let options ={headers: headers};
    var response = this.http
      .post(
        // "https://mailthis.to/mburtson@gmail.com",
        "https://formspree.io/xgewpoer",

        {
          _replyto: this.email,
          message: this.message,
          _subject: this.subject,
          
        },options   
       
      )
      .toPromise();
      

    this.message = "";
    this.email = "";
    console.log(response);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmailDialogComponent, {
          });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit() {

  
    if (window.screen.width < 750) {
      this.isNotMobile = false;
      this.isMobile = true;
    }

    if (window.screen.width > 750) {
      this.isMobile = false;
      this.isNotMobile = true;
    }

    this.myEmail = new FormControl(null, {
      validators: Validators.required      
    });

    if (this.myEmail.hasError('required')){
      this.buttonIsDisabled = true;
    }
  
  }

}
