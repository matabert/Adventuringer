import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Race } from 'src/app/models/race.model';
import { ListItem } from 'src/app/models/list-item.model';
import { Feature } from 'src/app/models/feature.model';
import races from 'src/assets/races.json';
import subraces from 'src/assets/heritages.json';

@Component({
  selector: 'app-race-select',
  templateUrl: './race-select.component.html',
  styleUrls: ['./race-select.component.scss']
})
export class RaceSelectComponent implements OnInit {

  @Output() racialInfoUpdate = new EventEmitter<string[]>();
  
  chosenRaceId: string;
  chosenRaceName: string;
  chosenRaceDescription: string[];

  hoveredRaceId: string;
  hoveredRaceName: string;
  hoveredRaceDescription: string[];

  racesArray: Race[] = races;
  subRacesArray: Race[] = subraces;

  raceListItems: ListItem[];
  subraceListItems: ListItem[];


  constructor() {
    this.raceListItems = [];
    this.subraceListItems = [];
    
    this.raceListItems = this.buildRaceList(this.racesArray);
    
    this.chosenRaceId = this.racesArray[0].id;
    this.chosenRaceName = this.getRaceName(this.chosenRaceId, this.racesArray);
    this.chosenRaceDescription = this.getRaceExposition(this.chosenRaceId, this.racesArray);

    this.hoveredRaceId = '';
    this.hoveredRaceName = '';
    this.hoveredRaceDescription = [''];
  }

  ngOnInit(): void { }

  updateChosenRace(id: string): void {
    this.chosenRaceId = id;
    this.chosenRaceName = this.getRaceName(id, this.racesArray);
    this.chosenRaceDescription = this.getRaceExposition(id, this.racesArray);
    this.subraceListItems = this.buildSubraceList(this.getRaceSubraceIDs(id, this.racesArray), this.subRacesArray);
  }

  updateHoveredRace(id: string): void {
    if(id === '') {
      this.hoveredRaceId = '';
      this.hoveredRaceName = '';
      this.hoveredRaceDescription = [''];
    } else {
      this.hoveredRaceId = id;
      this.hoveredRaceName = this.getRaceName(id, this.racesArray);
      this.hoveredRaceDescription = this.getRaceExposition(id, this.racesArray);
    }
  }

  getRaceName(id: string, arr: Race[]): string {
    return (arr.find(x => x.id === id)!.name);
  }

  getRaceExposition(id: string, arr: Race[]): string[] {
    return (arr.find(x => x.id === id)!.exposition);
  }

  getRaceSubraceIDs(id: string, arr: Race[]): string[] {
    if(arr.find(x => x.id === id)!.subraces)
      return arr.find(x => x.id === id)!.subraces!;
    else
      return [];
  }

  getRaceFeatures(id: string, arr: Race[]): Feature[] {
    return (arr.find(x => x.id === id)!.features);
  }

  buildRaceList(arr: Race[]): ListItem[] {
    let list: ListItem[] = [];
    for(const item of arr) {
        list.push({
          id: item.id,
          name: item.name} as ListItem);
    }
    return list;
  }

  buildSubraceList(subraceIDs: string[], subraceArr: Race[]): ListItem[] {
    let list: ListItem[] = [];
    for(const item of subraceIDs) {
      const race = subraceArr.find(x => x.id === item);
      list.push({
        id: race!.id,
        name: race!.name} as ListItem);
    }
    return list;
  }

}
