import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSearchedMeal]'
})
export class SearchedMealDirective {

  constructor(public vcRef: ViewContainerRef) { }

}
