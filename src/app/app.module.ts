import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { AllMealsComponent } from './all-meals/all-meals.component';
import { MealCategoryComponent } from './meal-category/meal-category.component';
import { SearchedMealDirective } from './directives/searched-meal.directive';
import { SearchedMealComponent } from './searched-meal/searched-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    WelcomeComponent,
    AllMealsComponent,
    MealCategoryComponent,
    SearchedMealDirective,
    SearchedMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
