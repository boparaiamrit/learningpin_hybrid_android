import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LearningsPage } from './learnings';

@NgModule({
  declarations: [
    LearningsPage,
  ],
  imports: [
    IonicPageModule.forChild(LearningsPage),
  ],
})
export class LearningsPageModule {}
