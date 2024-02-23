import { NgModule } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const material = [
  MatExpansionModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialComponentModule { }
