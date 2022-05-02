import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    // this.messageService.add('HeroService: fetched hero id='+hero.id)
    this.messageService.add(`HeroService: fetched hero id=${hero.id}`)
    return of(hero);
  }
  
}

