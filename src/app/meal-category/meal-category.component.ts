import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { MealTableDirective } from '../directives/meal-table.directive';
import { MealTableComponent } from '../meal-table/meal-table.component';
import { MenuService } from '../menu.service';
import { MealById } from '../shared/meal-by-id-model';
import { MealCategory } from '../shared/meal-category.model';

@Component({
  selector: 'app-meal-category',
  templateUrl: './meal-category.component.html',
  styleUrls: ['./meal-category.component.css'],
})
export class MealCategoryComponent implements OnInit {
  @ViewChild(MealTableDirective, { static: true })
  mealTableDir: MealTableDirective;
  meals: MealCategory[];
  mealById: MealById[];
  categories: string[] = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];
  areas: string[] = [
    'American',
    'British',
    'Canadian',
    'Chinese',
    'Croatian',
    'Dutch',
    'Egyptian',
    'French',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Portuguese',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Unknown',
    'Vietnamese',
  ];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const viewContainerRef = this.mealTableDir.vcRef;
    const component = viewContainerRef.createComponent(MealTableComponent);

    this.route.params.subscribe((params: Params) => {
      this.menuService.category = params.id;
      if (this.categories.includes(this.menuService.category)) {
        this.menuService.getDishByCategory().subscribe((data) => {
          this.meals = data;
          for (let i = 0; i < this.meals.length; i++) {
            component.instance.mealData.push({
              number: (i + 1).toString(),
              name: this.meals[i].strMeal,
              id: this.meals[i].idMeal,
            });
          }
        });
      } else {
        this.menuService.getDishByArea().subscribe((data) => {
          this.meals = data;
          for (let i = 0; i < this.meals.length; i++) {
            component.instance.mealData.push({
              number: (i + 1).toString(),
              name: this.meals[i].strMeal,
              id: this.meals[i].idMeal,
            });
          }
        });
      }
    });
    this.menuService.activatedEmitter.subscribe((data) => {
      this.menuService.id = data;
      this.menuService.getMealById().subscribe((data) => {
        this.mealById = data;
      });
    });
  }
}
