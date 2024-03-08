import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SunglassesRoutingModule } from './sunglasses-routing.module';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    SunglassesRoutingModule
  ]
})
export class SunglassesModule { }
