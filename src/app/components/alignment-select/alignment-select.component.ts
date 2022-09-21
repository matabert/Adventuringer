import { Component, OnInit } from '@angular/core';

import alignments from 'src/assets/alignments.json';

@Component({
  selector: 'app-alignment-select',
  templateUrl: './alignment-select.component.html',
  styleUrls: ['./alignment-select.component.scss']
})
export class AlignmentSelectComponent implements OnInit {

  alignmentArray:{id: string, nameLong: string, nameShort: string, description: string[]}[] = alignments;

  gridLabels: string[][];
  gridTiles: {text: string, id?: string}[];

  chosenAlignmentIndex: number;
  chosenAlignmentId: string;
  chosenAlignmentTitle: string;
  chosenAlignmentDescription: string[];

  hoveredAlignmentId: string;
  hoveredAlignmentTitle:string;
  hoveredAlignmentDescription: string[];

  defaultAlignmentTitle = 'Select an Alignment';
  defaultAlignmentDescription = [
    "Alignment is a broad descriptor of a character's personal and moral attitudes based upon two axes: " +
    "a morality (good, neutral, evil) and an attitude towards tradition and societal structures (law, neutral, chaos).",
  ];
  

  constructor() {
    this.gridLabels = [
      ['Law', 'Neutrality', 'Chaos'],
      ['Good', 'Neutrality', 'Evil']
    ];

    this.chosenAlignmentId = '';

    this.gridTiles = [];
    for(const element of this.alignmentArray){
      this.gridTiles.push({text: element.nameShort, id: element.id});
    }
    
    this.chosenAlignmentIndex = -1;
    this.chosenAlignmentTitle = this.defaultAlignmentTitle;
    this.chosenAlignmentDescription = this.defaultAlignmentDescription;

    this.hoveredAlignmentId = '';
    this.hoveredAlignmentTitle = '';
    this.hoveredAlignmentDescription = [''];
  }

  ngOnInit(): void { }

  updateChosenAlignment(id: string): void {
    this.chosenAlignmentId = id;
    this.chosenAlignmentTitle = this.getAlignmentTitle(id, this.alignmentArray);
    this.chosenAlignmentDescription = this.getAlignmentDescription(id, this.alignmentArray);
  }

  updateHoveredAlignment(id: string): void {
    this.hoveredAlignmentId = id;
    try {
      this.hoveredAlignmentTitle = this.getAlignmentTitle(id, this.alignmentArray);
      this.hoveredAlignmentDescription = this.getAlignmentDescription(id, this.alignmentArray);
    }
    catch(e) {
      this.hoveredAlignmentTitle = '';
      this.hoveredAlignmentDescription = [''];
    }
  }

  getAlignmentTitle(id: string, arr: {id: string, nameLong: string, nameShort: string, description: string[]}[]) {
    return (arr.find(x => x.id === id)!.nameLong);
  }

  getAlignmentDescription(id: string, arr: {id: string, nameLong: string, nameShort: string, description: string[]}[]) {
    return (arr.find(x => x.id === id)!.description);
  }

}
