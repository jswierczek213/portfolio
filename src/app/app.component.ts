import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  @ViewChild('aboutMe', { static: true }) aboutMe: ElementRef;
  @ViewChild('skills', { static: true }) skills: ElementRef;
  @ViewChild('projects', { static: true }) projects: ElementRef;
  @ViewChild('contact', { static: true }) contact: ElementRef;

  scrollToSection(sectionNumber: number) {
    if (sectionNumber === 0) {
      const el = this.aboutMe.nativeElement;
      el.scrollIntoView({ behavior: 'smooth'});
    }

    if (sectionNumber === 1) {
      const el = this.skills.nativeElement;
      el.scrollIntoView({ behavior: 'smooth'});
    }

    if (sectionNumber === 2) {
      const el = this.projects.nativeElement;
      el.scrollIntoView({ behavior: 'smooth'});
    }

    if (sectionNumber === 3) {
      const el = this.contact.nativeElement;
      el.scrollIntoView({ behavior: 'smooth'});
    }
  }
}
