import ability_scores from 'src/assets/ability-scores.json';
import { AbilityScore, AbilityScoreComplete } from './models/ability-score.model';

export class Constants {
}

export class AbilityScoreConstants {
    static readonly pointBuyTotal: number = 27;
    static readonly pointCostMatrix: number[][] = [
    //  [Score value, Cost]
        [8, 0],
        [9, 1],
        [10, 2],
        [11, 3],
        [12, 4],
        [13, 5],
        [14, 7],
        [15, 9]
    ];
    static readonly buyableScoreMaximum: number = AbilityScoreConstants.pointCostMatrix[AbilityScoreConstants.pointCostMatrix.length - 1][0];   //15
    static readonly buyableScoreMinimum: number = AbilityScoreConstants.pointCostMatrix[0][0];  //8

    static calculateModifier(score: number): number {
        return Math.floor((score - 10) / 2);
    }

    static getDefaultAbilityScores(scores: AbilityScore[]): AbilityScoreComplete[] {
        let fullScores: AbilityScoreComplete[] = [];
        let defaultNumbers = {
            value: this.pointCostMatrix[0][0],
            modifier: this.calculateModifier(this.pointCostMatrix[0][0])
        };
        for(let score of scores) 
            fullScores.push(Object.assign(score, defaultNumbers));
        return fullScores;
    }

    static getScoreCost(value: number): number {
        let x = AbilityScoreConstants.pointCostMatrix.findIndex(function(element) {
            return element[0] == value;
        });
        return AbilityScoreConstants.pointCostMatrix[x][1];
    }
}

export class Defaults {
    static readonly charName: string = '';
    static readonly charAlignment: string = 'aln_tn';
    static readonly charClass = []
}