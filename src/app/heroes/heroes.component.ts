import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero = {
    id: 1,
    name: 'ฤดูกาลกำลังจะพัดผ่าน'
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
