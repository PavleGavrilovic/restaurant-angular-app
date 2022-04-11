import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchedMealDirective } from '../directives/searched-meal.directive';
import { MenuService } from '../menu.service';
import { SearchedMealComponent } from '../searched-meal/searched-meal.component';
import { MenuCategory } from '../shared/menuCategory-model';
import { MealById } from '../shared/meal-by-id-model';
import { NationalCategory } from '../shared/nationalCategory-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menu') menuElement: ElementRef;
  @ViewChild(SearchedMealDirective, { static: true })
  mealDirective: SearchedMealDirective;
  categories: MenuCategory[];
  nationalDishes: NationalCategory[];
  isHidden: boolean = false;
  mealWasSearched: boolean = false;
  searchedMeal: MealById[];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.menuService.renderDefaultMenu().subscribe((data) => {
      this.categories = data;
    });
  }

  getNationalDishes() {
    this.isHidden = true;
    this.menuService.getNationalDishes().subscribe((data) => {
      this.nationalDishes = data;
    });
  }

  goToAllMeals() {
    this.router.navigate(['all-meals']);
  }

  goToCategory(category: string) {
    this.router.navigate(['meal-category', category], {
      relativeTo: this.route,
    });
  }

  goToNational(area: string) {
    this.router.navigate(['meal-category', area], { relativeTo: this.route });
  }

  searchMeals(data: string) {
    const viewContainerRef = this.mealDirective.vcRef;
    viewContainerRef.clear();
    this.mealWasSearched = true;
    let searchWord = data.toLowerCase();
    this.menuService.id = searchWord;
    this.menuService.getMealByName().subscribe((data) => {
      this.searchedMeal = data;

      for (let i = 0; i < this.searchedMeal.length; i++) {
        const componentRef = viewContainerRef.createComponent(SearchedMealComponent);
        componentRef.instance.mealName = this.searchedMeal[i].strMeal;
        componentRef.instance.mealArea = this.searchedMeal[i].strArea;
        componentRef.instance.mealCategory = this.searchedMeal[i].strCategory;
        componentRef.instance.mealImg = this.searchedMeal[i].strMealThumb;
      }
    });

    // this.mealDirective.vcRef.createComponent(SearchedMealComponent)
  }
}
