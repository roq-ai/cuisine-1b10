import { RecipeInterface } from 'interfaces/recipe';
import { GetQueryInterface } from 'interfaces';

export interface IngredientInterface {
  id?: string;
  name: string;
  quantity: number;
  unit: string;
  calories: number;
  recipe_id: string;
  created_at?: any;
  updated_at?: any;

  recipe?: RecipeInterface;
  _count?: {};
}

export interface IngredientGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  unit?: string;
  recipe_id?: string;
}
