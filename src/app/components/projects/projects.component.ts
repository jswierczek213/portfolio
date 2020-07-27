import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  projects = [
    {
      name: 'Movie Lib',
      description: 'Witryna, na której wyświetlane są szczegóły filmów, seriali lub aktorów. Poza domyślnie widocznymi materiałami istnieje możliwość skorzystania z wyszukiwarki. Całość korzysta z zewnętrznego API, tj. TMDB.',
      images: [
        'assets/images/movie-lib.png',
        'assets/images/movie-lib-2.png',
        'assets/images/movie-lib-3.png',
        'assets/images/movie-lib-4.png'
      ],
      currentImage: 0,
      githubLink: 'https://github.com/jswierczek213/movie-lib',
      previewLink: 'https://jswierczek213.github.io/movie-lib/'
    },
    {
      name: 'Users Community',
      description: 'Witryna, na której istnieje możliwość utworzenia konta. Po rejestracji możemy dodawać posty, komentarze, przeglądać profile pozostałych użytkowników lub edytować swój własny.',
      images: [
        'assets/images/users-community.png',
        'assets/images/users-community-2.png',
        'assets/images/users-community-3.png',
        'assets/images/users-community-4.png'
      ],
      currentImage: 0,
      githubLink: 'https://github.com/jswierczek213/users-community',
      previewLink: 'https://jswierczek213.github.io/users-community/'
    },
    {
      name: 'Sports shop',
      description: 'Witryna sklepu internetowego o tematyce sportowej. Istnieje możliwość dodawania produktów do koszyka, gdzie są one widoczne w postaci listy, wraz z ich kategoriami oraz podsumowaniem ceny.',
      images: [
        'assets/images/shop.png',
        'assets/images/shop-2.png',
        'assets/images/shop-3.png'
      ],
      currentImage: 0,
      githubLink: 'https://github.com/jswierczek213/shop',
      previewLink: 'https://jswierczek213.github.io/shop/'
    }
  ];

  openImageInNewTab(href: string) {
    window.open(href);
  }

  prev(imageIndex: number, projectIndex: number) {
    const imagesCount = this.projects[projectIndex].images.length;

    if (imageIndex === 0) {
      this.projects[projectIndex].currentImage = imagesCount - 1;
    } else {
      this.projects[projectIndex].currentImage--;
    }
  }

  next(imageIndex: number, projectIndex: number) {
    const imagesCount = this.projects[projectIndex].images.length;

    if (imageIndex === (imagesCount - 1)) {
      this.projects[projectIndex].currentImage = 0;
    } else {
      this.projects[projectIndex].currentImage++;
    }
  }

}
