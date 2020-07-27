import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('aboutMe', { static: true }) aboutMe: ElementRef;
  @ViewChild('skills', { static: true }) skills: ElementRef;
  @ViewChild('projects', { static: true }) projects: ElementRef;
  @ViewChild('contact', { static: true }) contact: ElementRef;

  aboutY: number;
  skillsY: number;
  projectsY: number;
  contactY: number;

  sectionNumber: number;

  ngAfterViewInit(): void {
    this.setYPositions();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.setYPositions();

    const halfDeviceHeight = Math.floor(window.innerHeight / 2);
    const screenMiddlePosition = (window.pageYOffset + halfDeviceHeight) || (document.documentElement.scrollTop + halfDeviceHeight);

    // If user reads about me section
    if ((screenMiddlePosition >= this.aboutY) && (screenMiddlePosition < this.skillsY)) {
      this.sectionNumber = 0;
    }

    // If user reads skills section
    if ((screenMiddlePosition >= this.skillsY) && (screenMiddlePosition < this.projectsY)) {
      this.sectionNumber = 1;
    }

    // If user reads projects section
    if ((screenMiddlePosition >= this.projectsY) && (screenMiddlePosition < this.contactY)) {
      this.sectionNumber = 2;
    }

    // If user reads contact section
    if ((screenMiddlePosition >= this.contactY)) {
      this.sectionNumber = 3;
    }
  }

  // Set top offset for every section
  setYPositions() {
    this.aboutY = this.aboutMe.nativeElement.offsetTop;
    this.skillsY = this.skills.nativeElement.offsetTop;
    this.projectsY = this.projects.nativeElement.offsetTop;
    this.contactY = this.contact.nativeElement.offsetTop;
  }

  scrollToSection(sectionNumber: number) {
    // About me section
    if (sectionNumber === 0) {
      const el = this.aboutMe.nativeElement;
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Skills section
    if (sectionNumber === 1) {
      const el = this.skills.nativeElement;
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Projects section
    if (sectionNumber === 2) {
      const el = this.projects.nativeElement;
      el.scrollIntoView({ behavior: 'smooth' });
    }

    // Contact section
    if (sectionNumber === 3) {
      const el = this.contact.nativeElement;
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
