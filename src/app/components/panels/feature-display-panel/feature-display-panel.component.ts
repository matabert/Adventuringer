import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-feature-display-panel',
  template: `
    <h1 class="panel-header">Features</h1>
    <mat-divider></mat-divider>
    <mat-expansion-panel class="featureList" *ngFor="let feature of featureList; let i = index">
      <mat-expansion-panel-header>
          <mat-panel-title>{{feature.name}}</mat-panel-title>
      </mat-expansion-panel-header>
      <app-description-template [descriptionText]="feature.description"></app-description-template>
    </mat-expansion-panel>
  `,
  styles: [
    `
      .featureList {
        margin: 12px 0;
      }
    `
  ]
})
export class FeatureDisplayPanelComponent implements OnInit {

  @Input() featureList: Feature[];

  constructor() {
    this.featureList = [];
  }

  ngOnInit(): void { }

}
