import { Component, OnInit } from '@angular/core';

import { Background } from 'src/app/models/background.model';
import { ListItem } from 'src/app/models/list-item.model';
import { Feature } from 'src/app/models/feature.model';

import backgrounds from 'src/assets/backgrounds.json';

@Component({
  selector: 'app-background-select',
  templateUrl: './background-select.component.html',
  styleUrls: ['./background-select.component.scss']
})
export class BackgroundSelectComponent implements OnInit {

  chosenBgId: string;
  chosenBgName: string;
  chosenBgDescription: string[];
  
  hoveredBgId: string;
  hoveredBgName: string;
  hoveredBgDescription:string[];

  backgroundsArray: Background[] = backgrounds;
  bgListItems: ListItem[];

  constructor() {
    this.bgListItems = this.buildBackgroundList(this.backgroundsArray);

    this.chosenBgId = this.backgroundsArray[0].id;
    this.chosenBgName = this.getBgName(this.chosenBgId, this.backgroundsArray);
    this.chosenBgDescription = this.getBgExposition(this.chosenBgId, this.backgroundsArray);
    
    this.hoveredBgId = '';
    this.hoveredBgName = '';
    this.hoveredBgDescription = [''];

  }

  ngOnInit(): void { }

  buildBackgroundList(arr: Background[]): ListItem[] {
    let list: ListItem[] = [];
    for(const item of arr) {
      list.push({
        id: item.id,
        name: item.name} as ListItem);
    }
    return list;
  }

  getBgName(id: string, arr: Background[]): string {
    return (arr.find(x => x.id === id)!.name);
  }

  getBgExposition(id: string, arr: Background[]): string[] {
    return (arr.find(x => x.id === id)!.exposition);
  }

  getBgFeatures(id: string, arr: Background[]): Feature[] {
    return (arr.find(x => x.id === id)!.feature);
  }

}
