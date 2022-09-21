import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ListItem } from 'src/app/models/list-item.model';

@Component({
  selector: 'app-selection-list-panel',
  templateUrl: './selection-list-panel.component.html',
  styleUrls: ['./selection-list-panel.component.scss']
})
export class SelectionListPanelComponent implements OnInit {

  @Input() listHeader: string;
  @Input() listItems: ListItem[];
  @Output() selectItemEvent = new EventEmitter<string>();
  @Output() hoverItemEvent = new EventEmitter<string>();

  hoveredItemIndex: number;
  selectedItemIndex: number;
  selectedItemId: string;

  constructor() {
    this.listHeader = '';
    this.listItems = [];

    this.hoveredItemIndex = -1;

    this.selectedItemIndex = 0;
    this.selectedItemId = '';
  }

  selectListItem(index: number): void {
    this.selectedItemIndex = index;
    this.selectItemEvent.emit(this.getItemId(index));
  }

  hoverListItem(index: number): void {
    this.hoveredItemIndex = index;
    this.hoverItemEvent.emit(this.getItemId(index));
  }

  ngOnInit(): void { }

  getItemId(index: number): string {
    return ((index != -1) ? this.listItems[index].id : '');
  }

}
