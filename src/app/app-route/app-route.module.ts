import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {RecipesComponent} from "../components/recipes/recipes.component";
import {ShoplistComponent} from "../components/shoplist/shoplist.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecdescComponent} from "../components/recipes/recdesc/recdesc.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: ':id', component: RecdescComponent}
    ]},
  { path: 'shopping-list', component: ShoplistComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
})
export class AppRouteModule { }
