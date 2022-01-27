import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPage } from './edit.page';

import { EditPageRoutingModule } from './edit-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditPageRoutingModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
