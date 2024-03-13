import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { SunglassesRoutingModule } from './sunglasses-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    SunglassesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SunglassesModule { }
