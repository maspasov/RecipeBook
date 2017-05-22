import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'https://ae01.alicdn.com/kf/HTB1SFtEIXXXXXaIXXXXq6xXFXXX7/Fashion-Adjustable-Dress-Form-Dressmaker-Mannequinn-Fabric-Mannequin-Bust-Dummy-Flexible-for-Dress-Display.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
