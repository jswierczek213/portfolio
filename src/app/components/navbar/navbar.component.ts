import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openCloseNavbar', [
      state('open', style({
        right: '0px'
      })),
      state('closed', style({
        right: '-150px'
      })),
      transition('open <=> closed', [
        animate('400ms linear')
      ])
    ]),
    trigger('click', [
      state('open', style({
        right: '150px'
      })),
      state('closed', style({
        right: '0px'
      })),
      transition('open <=> closed', [
        animate('400ms linear')
      ])
    ])
  ],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input() currentSection: number;
  @Output() scrolled = new EventEmitter();

  links = [
    { name: 'O mnie', icon: 'account_box', active: false },
    { name: 'Umiejętności', icon: 'assignment', active: false },
    { name: 'Projekty', icon: 'folder', active: false },
    { name: 'Kontakt', icon: 'mail', active: false }
  ];
  innerWidth: any;

  displayDesktopNavbar: boolean;
  displayMobileNavbar: boolean;

  ngOnInit() {
    this.links[0].active = true;
    this.displayDesktopNavbar = false;
    this.displayMobileNavbar = false;

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Set active link
    this.links.forEach((link, index) => {
      link.active = (index === this.currentSection) ? true : false;
    });
  }

  toggleDesktopNavbar() {
    this.displayDesktopNavbar = !this.displayDesktopNavbar;
  }

  toggleMobileNavbar() {
    this.displayMobileNavbar = !this.displayMobileNavbar;
  }

  viewSection(sectionNumber: number) {
    // Scroll to section with the given number
    this.scrolled.emit(sectionNumber);
    this.displayDesktopNavbar = false;
    this.displayMobileNavbar = false;
  }

}
