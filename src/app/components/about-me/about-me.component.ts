import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor() { }

  @Output() clicked = new EventEmitter();

  viewNextSection() {
    this.clicked.emit(1);
  }

}
