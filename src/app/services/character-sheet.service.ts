import { Injectable } from '@angular/core';
import { AbilityScoreComplete } from '../models/ability-score.model';
import { Alignment } from '../models/alignment.model';
import { Background } from '../models/background.model';
import { CharacterClass } from '../models/character-class';
import { Feature } from '../models/feature.model';
import { PlayerCharacter } from '../models/player-character.model';
import { Race } from '../models/race.model';

import { Defaults, AbilityScoreConstants } from '../constants';
import ability_scores from 'src/assets/ability-scores.json';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService implements PlayerCharacter {
  //Implement PlayerCharacter interface fields
  private _name: string;
  private _alignment?: Alignment;
  private _abilityScores: AbilityScoreComplete[];
  private _characterClass?: CharacterClass[];
  private _race?: Race;
  private _background?: Background;
  private _features?: Feature[];

  constructor() {
    //Initialize non-null PlayerCharacter fields
    this._name = Defaults.charName;
    this._abilityScores = AbilityScoreConstants.getDefaultAbilityScores(ability_scores);
  }

  get abilityScores(): AbilityScoreComplete[] {
    return this._abilityScores;
  }
  get name(): string {
    return this._name;
  }
  get alignment(): Alignment {
    return this._alignment!;
  }
  get characterClass(): CharacterClass[] {
    return this._characterClass!;
  }
  get race(): Race {
    return this._race!;
  }
  get background(): Background {
    return this._background!;
  }
  get features(): Feature[] {
    return this._features!;
  }
}
