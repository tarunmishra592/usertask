import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from 'src/Components/add-item/add-item.component';
import { ItemListComponent } from 'src/Components/item-list/item-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/item-list', pathMatch: 'full' },
  { path: 'item-list', component: ItemListComponent },
  { path: 'add-item', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
