import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { MenuService } from '../menu.service';
import { MealById } from '../shared/meal-by-id-model';
import { MealCategory } from '../shared/meal-category.model';

@Component({
  selector: 'app-meal-category',
  templateUrl: './meal-category.component.html',
  styleUrls: ['./meal-category.component.css'],
})
export class MealCategoryComponent implements OnInit {
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
    this.route.params.subscribe((params: Params) => {
      this.menuService.category = params.id;
      if (this.categories.includes(this.menuService.category)) {
        this.menuService.getDishByCategory().subscribe(data=>{
          this.meals=data;
        })

      } else {
        this.menuService.getDishByArea().subscribe(data=>{
            this.meals=data;
          })

      }
    });


  }

  getMealByIndex(data: string) {
    this.menuService.id = data;
    this.menuService
      .getMealById().subscribe(data=>{
        this.mealById=data;
      })
  }
}
