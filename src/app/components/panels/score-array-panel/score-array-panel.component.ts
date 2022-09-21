import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbilityScoreComplete } from 'src/app/models/ability-score.model';
import { AbilityScoreConstants } from 'src/app/constants';

@Component({
  selector: 'app-score-array-panel',
  template: `
    <ul class="score-list">
      <li class="list-row">
        <div><h3>Ability Name</h3></div>
        <div><h3>Racial Bonus</h3></div>
        <div><h3>Ability Score</h3></div>
        <div><h3>Modifier</h3></div>
      </li>
      <li class="list-row" *ngFor="let abilityScore of abilityScores" (mouseover)="onRowHover(abilityScore.id)">
        <!-- name column -->
        <div class="list-column name-align">{{abilityScore.nameLong | titlecase}}</div>
        <!-- racial bonus column -->
        <div class="list-column">—</div>
        <!-- score value/editing column -->
        <div class="list-column">
          <button mat-icon-button
            (click)="decrementClick(abilityScore.id)"
            [disabled]="scoreAtMinValue(abilityScore)">
              <mat-icon>keyboard_arrow_left</mat-icon>
          </button>
          {{abilityScore.value}}
          <button mat-icon-button 
            (click)="incrementClick(abilityScore.id)"
            [disabled]="scoreAtMaxValue(abilityScore)">
              <mat-icon>keyboard_arrow_right</mat-icon>
          </button>
        </div>
        <!-- modifier column -->
        <div class="list-column">{{modifierSymbol(abilityScore.modifier)}}{{abilityScore.modifier}}</div>
      </li>
    </ul>
  `,
  styles: [
    `
      .score-list {
        list-style-type: none;
      }
      .list-row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        vertical-align: center;
        margin: 0.25rem 0;
      }
      .list-column {
        margin: 0 1rem;
        justify-content: center;
      }
      .list-column:first-child {
        text-align: right;
      }
      .list-column:not(:first-child) {
        text-align: center;
      }
      h3 {
        text-align: center;
      }
    `
  ]
})
export class ScoreArrayPanelComponent implements OnInit {

  @Input() abilityScores: AbilityScoreComplete[];
  @Input() maxScoreValue: number;
  @Input() minScoreValue: number;
  @Output() incrementScoreEvent = new EventEmitter<string>();
  @Output() decrementScoreEvent = new EventEmitter<string>();
  @Output() hoverScoreEvent = new EventEmitter<string>();

  constructor() { 
    this.abilityScores = [];
    this.maxScoreValue = AbilityScoreConstants.buyableScoreMaximum; //set default to global constant
    this.minScoreValue = AbilityScoreConstants.buyableScoreMinimum; //set default to global constant
  }

  ngOnInit(): void { }

  incrementClick(scoreId: string): void {
    this.incrementScoreEvent.emit(scoreId);
  }

  decrementClick(scoreId: string): void {
    this.decrementScoreEvent.emit(scoreId);
  }

  modifierSymbol(mod: number): string {
    if(mod > 0) { return '+'; }
    if(mod < 0) { return '-'; }
    return '±';
  }

  scoreAtMaxValue(score: AbilityScoreComplete): boolean {
    return score.value == this.maxScoreValue;
  }

  scoreAtMinValue(score: AbilityScoreComplete): boolean {
    return score.value == this.minScoreValue;
  }

  onRowHover(scoreId: string): void {
    this.hoverScoreEvent.emit(scoreId);
  }
}
