import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({providedIn:'root'})
export class MenuService {
  category:string;
  id:string;
  dataObjectArray;
  data;

  constructor(private http:HttpClient) {}

  renderDefaultMenu() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }

  getNationalDishes() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }

  getDishByCategory() {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.category}`)
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }

  getDishByArea() {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.category}`)
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }

  getAllCategoryData() {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.categories;
        return this.data;
      })
    )
  }

  getMealById() {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }

  getMealByName() {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.id}`)
    .pipe(
      map((data)=>{
        this.dataObjectArray=data;
        this.data=this.dataObjectArray.meals;
        return this.data;
      })
    )
  }
}
