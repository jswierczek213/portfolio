import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor() { }

  // Create new event
  @Output() clicked = new EventEmitter();

  // Emit number of section to which app component should scroll page
  viewNextSection() {
    this.clicked.emit(1);
  }

}
