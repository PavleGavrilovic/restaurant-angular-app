import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMealTable]'
})
export class MealTableDirective {

  constructor(public vcRef: ViewContainerRef) { }

}
