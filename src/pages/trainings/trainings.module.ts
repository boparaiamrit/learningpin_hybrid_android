import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsPage } from './trainings';

@NgModule({
  declarations: [
    TrainingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsPage),
  ],
})
export class TrainingsPageModule {}
