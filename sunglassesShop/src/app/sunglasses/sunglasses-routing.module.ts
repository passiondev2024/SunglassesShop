import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
{path: 'create', component: CreateComponent},
{path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunglassesRoutingModule { }

