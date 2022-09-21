import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/app/services/character-sheet.service';
import { AbilityScore, AbilityScoreComplete } from 'src/app/models/ability-score.model';

import { AbilityScoreConstants } from 'src/app/constants';

@Component({
  selector: 'app-ability-score-allocation',
  templateUrl: './ability-score-allocation.component.html',
  styleUrls: ['./ability-score-allocation.component.scss']
})
export class AbilityScoreAllocationComponent implements OnInit {

  abilityScores: AbilityScoreComplete[] = [];
  minimumScore: number;
  maximumScore: number;
  currentPointSpending: number;
  pointSpendingMaximum: number;
  hoveredAbilityScoreId: string;

  constructor(private _characterSheet: CharacterSheetService) {
    this.abilityScores = _characterSheet.abilityScores;
    this.minimumScore = AbilityScoreConstants.pointCostMatrix[0][0];
    this.maximumScore = AbilityScoreConstants.pointCostMatrix[AbilityScoreConstants.pointCostMatrix.length - 1][0];
    this.currentPointSpending = this.calcPointSpending();
    this.pointSpendingMaximum = AbilityScoreConstants.pointBuyTotal;
    this.hoveredAbilityScoreId = '';
  }

  ngOnInit(): void { }

  incrementScore(scoreId: string): boolean {
    let score = this.abilityScores.find(x => x.id === scoreId);
    /**if score's value is equal to the highest value in the cost matrix, *
     * return false without incrementing                                  */
    if(score!.value >= AbilityScoreConstants.buyableScoreMaximum) {
      return false;
    }
    /**if currentPointSpending is equal to the total points that can be      *
     * used for allocating ability scores, return false without incrementing */
    if(this.currentPointSpending == AbilityScoreConstants.pointBuyTotal) {
      return false;
    }
    /**if currentPointSpending will be greater than the total points that can   *
     * be used for allocating ability scores after incrementing, instead return *
     * false without incrementing                                               */
    if((this.currentPointSpending - AbilityScoreConstants.getScoreCost(score!.value) 
      + AbilityScoreConstants.getScoreCost(score!.value + 1)) > AbilityScoreConstants.pointBuyTotal) {
        return false;
    }
    else {
      score!.value++;
      score!.modifier = AbilityScoreConstants.calculateModifier(score!.value);
      this.currentPointSpending = this.calcPointSpending();
      return true;
    }
  }

  decrementScore(scoreId: string): boolean {
    let score = this.abilityScores.find(x => x.id === scoreId);
    /**if score's value is equal to the lowest value in the cost matrix,*
     * return false without decrementing.                               */
    if(score!.value <= AbilityScoreConstants.buyableScoreMinimum) {
      return false;
    }
    else {
      score!.value--;
      score!.modifier = AbilityScoreConstants.calculateModifier(score!.value);
      this.currentPointSpending = this.calcPointSpending();
      return true;
    }
  }

  updateHoveredAbilityScore(id: string): void {
    this.hoveredAbilityScoreId = id;
  }

  calcPointSpending(): number {
    let total: number = 0;
    for(let score of this.abilityScores) {
      total += AbilityScoreConstants.getScoreCost(score.value);
    }
    console.log('total points spent:' + total);
    return total;
  }
}
