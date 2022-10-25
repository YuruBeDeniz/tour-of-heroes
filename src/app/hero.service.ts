import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

/* The HeroService.getHeroes method used to return a Hero[].
Now it returns an Observable<Hero[]>. */

/* HeroService.getHeroes() returns an Observable
so that it can use the Angular HttpClient.get method
to fetch the heroes and have HttpClient.get()
return an Observable. */

/* RxJS is a library for reactive programming
using Observables, to make it easier
to compose asynchronous or callback-based code */

/* Observable: represents the idea of
an invokable collection of future values or events */

/* Subscription: represents the execution of an Observable,
is primarily useful for cancelling the execution. */
