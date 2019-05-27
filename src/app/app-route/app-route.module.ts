import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../components/recipes/recipes.component";
import {ShoplistComponent} from "../components/shoplist/shoplist.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent},
  { path: 'shopping-list', component: ShoplistComponent},
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRouteModule { }
