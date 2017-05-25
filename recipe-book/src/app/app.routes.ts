import { Routes } from '@angular/router';
import { recipeRoutes } from './recipes/recipes.routes';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: recipeRoutes },
  { path: 'shopping-list', component: ShoppingListComponent }
];