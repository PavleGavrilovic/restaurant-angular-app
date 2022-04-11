import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AllMealsComponent } from "./all-meals/all-meals.component";
import { MealCategoryComponent } from "./meal-category/meal-category.component";
import { MenuComponent } from "./menu/menu.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes:Routes=[
  {path:'',component:WelcomeComponent},
  {path:'menu',children:[
    {path:'',component:MenuComponent},
    {path:'meal-category/:id',component:MealCategoryComponent}
  ]},
  {path:'about',component:AboutComponent},
  {path:'all-meals',component:AllMealsComponent},
  {path:'**',redirectTo:''}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
