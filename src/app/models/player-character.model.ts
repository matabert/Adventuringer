import { AbilityScore, AbilityScoreComplete } from "./ability-score.model";
import { Alignment } from "./alignment.model";
import { Background } from "./background.model";
import { CharacterClass } from "./character-class";
import { Feature } from "./feature.model";
import { Race } from "./race.model";

export interface PlayerCharacter {
    name: string;
    alignment?: Alignment;
    abilityScores: AbilityScoreComplete[];
    characterClass?: CharacterClass[];
    race?: Race;
    background?: Background;
    features?: Feature[];
}
