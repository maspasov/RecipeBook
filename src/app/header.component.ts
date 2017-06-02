import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private RecipeService: RecipeService) { }

  onStore() {
    this.RecipeService.storeData().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onFetch() {
    this.RecipeService.fetcgData();
  }
}
