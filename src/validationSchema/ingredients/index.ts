import * as yup from 'yup';

export const ingredientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  quantity: yup.number().integer().required(),
  unit: yup.string().required(),
  calories: yup.number().integer().required(),
  recipe_id: yup.string().nullable().required(),
});
