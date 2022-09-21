import { Component, Input, OnInit } from '@angular/core';
import { AbilityScoreComplete } from 'src/app/models/ability-score.model';

interface AbilityScoreIncrease {
  value: number;        //magnitude of ability score increase
  targetScore: string;  //score id
}

@Component({
  selector: 'app-ability-score-increase-panel',
  template: `
    <div class="score-grid">
      <div *ngFor="let abilityScore of abilityScores">
        {{abilityScore.nameShort}}
      </div> 
      <div class="grid-col-span-3">
        <span>Remaining points available: 69 / {{asiSum}}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .score-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        vertical-align: center;
      }
    `
  ]
})
export class AbilityScoreIncreasePanelComponent implements OnInit {

  @Input() abilityScores: AbilityScoreComplete[];
  @Input() asi: AbilityScoreIncrease[];

  //total number of points in the given ability score increase(s)
  asiSum: number;

  constructor() {
    this.abilityScores = [];
    this.asi = [];
    this.asiSum = this.calcAsiSum(this.asi);
  }

  calcAsiSum(asi: AbilityScoreIncrease[]): number {
    let a = 0;
    for(let b of asi)
      a += b.value;
    return a;
  }

  ngOnInit(): void { }



}
