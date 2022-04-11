import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-all-meals',
  templateUrl: './all-meals.component.html',
  styleUrls: ['./all-meals.component.css']
})
export class AllMealsComponent implements OnInit {


  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getAllCategoryData().subscribe(data=>{
      console.log(data)
    })
  }

}
