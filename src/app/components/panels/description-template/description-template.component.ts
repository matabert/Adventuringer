import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-template',
  template: `
    <ul>
      <li class="justify-text" *ngFor="let text of descriptionText; let i = index">
        <ng-template *ngIf="i == 0 then flat else indent"></ng-template>

        <ng-template #flat>
          <p>{{text}}</p>
        </ng-template>

        <ng-template #indent>
          <p class="indent">{{text}}</p>
        </ng-template>
      </li>
    </ul>
  `,
  styles: [
    `
      .justify-text {
        text-align: justify;
      }
      .indent {
        text-indent: 1em;
      }
      ul {
        padding: 0;
        list-style-type: none;
      }
    `
  ]
})
export class DescriptionTemplateComponent implements OnInit {

  @Input() descriptionText: string[];

  constructor() {
    this.descriptionText = [];
  }

  ngOnInit(): void { }

}
