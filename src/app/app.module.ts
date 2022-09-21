import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlignmentSelectComponent } from './components/alignment-select/alignment-select.component';
import { CreationStepperComponent } from './components/creation-stepper/creation-stepper.component';
import { SelectionListPanelComponent } from './components/panels/selection-list-panel/selection-list-panel.component';
import { DescriptionDisplayPanelComponent } from './components/panels/description-display-panel/description-display-panel.component';
import { SelectionGridPanelComponent } from './components/panels/selection-grid-panel/selection-grid-panel.component';
import { RaceSelectComponent } from './components/race-select/race-select.component';
import { FeatureDisplayPanelComponent } from './components/panels/feature-display-panel/feature-display-panel.component';
import { HeritageSelectComponent } from './components/heritage-select/heritage-select.component';
import { BackgroundSelectComponent } from './components/background-select/background-select.component';
import { DescriptionTemplateComponent } from './components/panels/description-template/description-template.component';
import { AbilityScoreAllocationComponent } from './components/ability-score-allocation/ability-score-allocation.component';
import { ScoreArrayPanelComponent } from './components/panels/score-array-panel/score-array-panel.component';
import { AbilityScoreIncreasePanelComponent } from './components/panels/ability-score-increase-panel/ability-score-increase-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AlignmentSelectComponent,
    CreationStepperComponent,
    SelectionListPanelComponent,
    DescriptionDisplayPanelComponent,
    SelectionGridPanelComponent,
    RaceSelectComponent,
    FeatureDisplayPanelComponent,
    HeritageSelectComponent,
    BackgroundSelectComponent,
    DescriptionTemplateComponent,
    AbilityScoreAllocationComponent,
    ScoreArrayPanelComponent,
    AbilityScoreIncreasePanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
