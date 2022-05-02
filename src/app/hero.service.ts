import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'http://localhost:8080/heroes';

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
    ) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>(this.heroesUrl);

    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes')
    // return heroes;
    // return throwError(() => new Error ('404 not found'));
  }

  getHero(id: number): Observable<Hero> {

    this.messageService.add('HeroService: Fetched hero id;' + id)
    return this.httpClient.get<Hero>(this.heroesUrl + '/' + id);

    // const hero = HEROES.find(hero => hero.id === id)!;
    // // this.messageService.add('HeroService: fetched hero id='+hero.id)
    // this.messageService.add(`HeroService: fetched hero id=${hero.id}`)
    // return of(hero);
  }

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient
    .post<Hero>(this.heroesUrl, hero, this.httpOption);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      this.heroesUrl + '?q=' + term,
    );
  }
}