import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ReclistComponent } from './components/recipes/reclist/reclist.component';
import { RecdescComponent } from './components/recipes/recdesc/recdesc.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopEditComponent } from './components/shoplist/shop-edit/shop-edit.component';
import { RecitemComponent } from './components/recipes/reclist/recitem/recitem.component';
import { FormsModule } from "@angular/forms";
import { DropdownDirective } from './components/shared/dropdown.directive';
import { ShopListServService } from "./components/shoplist/shop-list-serv.service";
import {AppRouteModule} from "./app-route/app-route.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReclistComponent,
    RecdescComponent,
    RecipesComponent,
    ShoplistComponent,
    ShopEditComponent,
    RecitemComponent,
    DropdownDirective,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRouteModule
  ],
  providers: [ShopListServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
