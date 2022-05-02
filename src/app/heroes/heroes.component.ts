import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => { this.heroes = heroes },
      (err) => {console.log(err)},
      () => {console.log('finally')}
    );
  }

  addHero(name: string) {
    this.heroService
    .addHero({ name: name } as Hero)
    .subscribe(hero => this.heroes.push(hero));
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Selected hero id=' + hero.id);
  }

}
