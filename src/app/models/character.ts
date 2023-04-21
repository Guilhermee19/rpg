export type TRace =
  | 'Humanos'
  | 'Elfos'
  | 'Anões'
  | 'Halflings'
  | 'MeioElfos'
  | 'MeioOrcs'
  | 'Gnomos'
  | 'Tieflings'
  | 'Dragonborn'
  | 'Aasimar';

export type TClass =
  | 'Guerreiro'
  | 'Mago'
  | 'Clérigo'
  | 'Ladino'
  | 'Bárbaro'
  | 'Paladino'
  | 'Patrulheiro'
  | 'Feiticeiro'
  | 'Monge'
  | 'Bruxo';

export interface IStatus {
  number: number;
  modifier: number;
}

export interface ICharacterTraits {
  force: IStatus;
  dexterity: IStatus;
  constitution: IStatus;
  intelligence: IStatus;
  wisdom: IStatus;
  charisma: IStatus;
}

export interface ICharacter {
  characterName: string;
  class: TClass;
  level: number;
  antecedent: string;
  player: string;
  race: TRace;
  tendency: string;
  experiencePoints: number;
  characterTraits: ICharacterTraits;
}
