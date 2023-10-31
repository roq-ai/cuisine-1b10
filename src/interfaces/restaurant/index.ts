import { RecipeInterface } from 'interfaces/recipe';
import { ReviewInterface } from 'interfaces/review';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  recipe?: RecipeInterface[];
  review?: ReviewInterface[];

  _count?: {
    recipe?: number;
    review?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  tenant_id?: string;
}
