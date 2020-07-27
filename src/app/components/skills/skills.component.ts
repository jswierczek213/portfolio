import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  constructor() { }

  skills = [
    { name: 'HTML', image: 'assets/images/html.svg' },
    { name: 'CSS', image: 'assets/images/css.svg' },
    { name: 'JavaScript', image: 'assets/images/javascript.svg' },
    { name: 'SASS', image: 'assets/images/sass.svg' },
    { name: 'Angular', image: 'assets/images/angular.svg' },
    { name: 'Angular Material', image: 'assets/images/angular-material.svg' },
    { name: 'TypeScript', image: 'assets/images/typescript.svg' },
    { name: 'NodeJS', image: 'assets/images/nodejs.svg' },
    { name: 'Express', image: 'assets/images/express.svg' },
    { name: 'MongoDB', image: 'assets/images/mongodb.svg' }
  ];

}
