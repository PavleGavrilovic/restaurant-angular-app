import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

interface MealData {
  number: string;
  name: string;
  id: string;
}

@Component({
  selector: 'app-meal-table',
  templateUrl: './meal-table.component.html',
  styleUrls: ['./meal-table.component.css'],
})
export class MealTableComponent implements OnInit {
  mealData: MealData[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  getMealId(id: string) {
    this.menuService.activatedEmitter.next(id);
  }
}
