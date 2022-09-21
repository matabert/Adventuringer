import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface GridItem{
  text: string;
  id?: string;
}

@Component({
  selector: 'app-selection-grid-panel',
  template: `
      <div [ngStyle]="getGridStyle()">
        <ng-container *ngFor="let tile of gridArray; let i = index">
          <ng-template *ngIf="tile.id != null; then option else label"></ng-template>

          <ng-template #option>
            <div 
              class="grid-selectable"
              matRipple
              (click)="selectGridItem(tile.id!)"
              (mouseover)="hoverGridItem(tile.id!)"
              (mouseout)="hoverGridItem('')"> {{tile.text}}
            </div>
          </ng-template>

          <ng-template #label>
            <div class="label"><h3>{{tile.text}}</h3></div>
          </ng-template>
        </ng-container>
      </div>
  `,
  styles: [
    `
      .grid-selectable {
        cursor: pointer;
        display: block;
        text-align: center;
        border: 1px solid gainsboro;
        padding: 12px 0;
        font: 400 1.2rem 'Trebuchet MS', sans-serif;
      }
      .grid-selectable:hover {
        background-color: #383838;
      }
      .grid-selectable:focus {
        background-color: #494949;
      }
      .label {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class SelectionGridPanelComponent implements OnInit {

  @Input() gridLabels: string[][] = [[]];
  @Input() gridItems: GridItem[] = [];
  @Output() selectItemEvent = new EventEmitter<string>();
  @Output() hoverItemEvent = new EventEmitter<string>();

  numColumns: number;
  gridArray: GridItem[] = [];
  selectedOptionId: string;
  hoveredOptionId: string;

  constructor() { 
    this.numColumns = 2;
    this.hoveredOptionId = '';
    this.selectedOptionId = '';
  }

  getGridStyle() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.numColumns}, 1fr)`,
      'gap': '1rem'
    };
  }

  selectGridItem(id: string): void {
    this.selectedOptionId = id;
    this.selectItemEvent.emit(this.selectedOptionId);
  }

  hoverGridItem(id: string): void {
    this.hoveredOptionId = id;
    this.hoverItemEvent.emit(this.hoveredOptionId);
  }

  ngOnInit(): void {
    this.numColumns = this.gridLabels[0].length + 1;
    this.getGridStyle();
    this.gridArray = this.createGridArray(this.gridLabels, this.gridItems);
    console.log('help');
  }

  //Place all grid items (headers, siders, and items) into a single array for grid placement
  createGridArray(labels: string[][], items: GridItem[]): GridItem[] {
    let gridArray: GridItem[] = [];
    //push blank space for top-left corner
    gridArray.push({text:''});
    //push headers
    for(let header of labels[0]) {
      gridArray.push({text: header});
    }
    //push sider followed by items for each row
    let itemIndex = 0;
    for(let sider of labels[1]) {
      gridArray.push({text: sider});
      for(let i = 0; i < labels[0].length; i++) {
        gridArray.push(items[itemIndex]);
        itemIndex++;
      }
    }
    console.log(gridArray);
    return gridArray;
  }

}
