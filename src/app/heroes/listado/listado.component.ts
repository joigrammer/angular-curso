import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  public heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  public lastDeleteHero: string = '';
  hasDeleteHeroes(): boolean {
    return this.lastDeleteHero?.length ? true : false;
  }
  deleteHeroePop(): void {
    this.lastDeleteHero = this.heroes.pop() || '';
  }
}
