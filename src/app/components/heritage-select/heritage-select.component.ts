import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heritage-select',
  templateUrl: './heritage-select.component.html',
  styleUrls: ['./heritage-select.component.scss']
})
export class HeritageSelectComponent implements OnInit {

  @Input() parentSubraceList: string[];

  constructor() {
    this.parentSubraceList = [];
  }

  ngOnInit(): void { }

}
