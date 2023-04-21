import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {
    console.log('');
  }

  character: ICharacter = {
    characterName: 'Levi Stone',
    level: 1,
    class: 'Mago',
    antecedent: 'Estudante',
    player: 'Guilherme',
    race: 'Humanos',
    tendency: '',
    experiencePoints: 1,
    characterTraits: {
      force: { number: 0, modifier: 0 },
      dexterity: { number: 0, modifier: 0 },
      constitution: { number: 0, modifier: 0 },
      intelligence: { number: 0, modifier: 0 },
      wisdom: { number: 0, modifier: 0 },
      charisma: { number: 0, modifier: 0 },
    },
  } as ICharacter;

  ngOnInit(): void {
    const auxJson: any = localStorage.getItem('character_rpg') || '';
    const aux = JSON.parse(auxJson);
    this.character = aux;
  }

  ngAfterViewChecked(): void {
    localStorage.setItem('character_rpg', JSON.stringify(this.character));
  }
}
