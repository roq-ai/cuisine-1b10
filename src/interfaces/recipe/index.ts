import { FavoriteInterface } from 'interfaces/favorite';
import { IngredientInterface } from 'interfaces/ingredient';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface RecipeInterface {
  id?: string;
  title: string;
  ingredients: string;
  instructions: string;
  prep_time: number;
  cook_time: number;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  favorite?: FavoriteInterface[];
  ingredient?: IngredientInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    favorite?: number;
    ingredient?: number;
  };
}

export interface RecipeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  ingredients?: string;
  instructions?: string;
  restaurant_id?: string;
}
