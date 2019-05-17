import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { ReclistComponent } from './components/recipes/reclist/reclist.component';
import { RecdescComponent } from './components/recipes/reclist/recdesc/recdesc.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
import { ShopEditComponent } from './components/shoplist/shop-edit/shop-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReclistComponent,
    RecdescComponent,
    RecipesComponent,
    ShoplistComponent,
    ShopEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
