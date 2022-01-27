import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FollowsPage } from './follows.page';

import { FollowsPageRoutingModule } from './follows-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FollowsPageRoutingModule
  ],
  declarations: [FollowsPage]
})
export class FollowsPageModule {}
