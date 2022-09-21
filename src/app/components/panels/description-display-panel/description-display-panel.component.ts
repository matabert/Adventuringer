import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-display-panel',
  template: `
    <div class="description-container">
      <h1 class="panel-header">{{headerText | uppercase}}</h1>
      <mat-divider></mat-divider>
      <app-description-template [descriptionText]="this.descriptionText"></app-description-template>
    </div>
  `,
  styles: [
    `
      .description-container {
        width: 100%;
        height: 100%;
        overflow-wrap: break-word;
      }
      .description-container h1 {
        text-align: center;
        text-transform: capitalize;
      }
    `
  ]
})
export class DescriptionDisplayPanelComponent implements OnInit {

  @Input() headerText: string;
  @Input() descriptionText: string[];
  
  constructor() { 
    this.headerText = '';
    this.descriptionText = [''];
  }

  ngOnInit(): void { }

}
