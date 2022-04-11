import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-searched-meal',
  templateUrl: './searched-meal.component.html',
  styleUrls: ['./searched-meal.component.css']
})
export class SearchedMealComponent implements OnInit {
  mealName:string;
  mealCategory:string;
  mealArea:string;
  mealImg:string;

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
  }

}
