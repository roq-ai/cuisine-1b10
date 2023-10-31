import * as yup from 'yup';

export const recipeValidationSchema = yup.object().shape({
  title: yup.string().required(),
  ingredients: yup.string().required(),
  instructions: yup.string().required(),
  prep_time: yup.number().integer().required(),
  cook_time: yup.number().integer().required(),
  restaurant_id: yup.string().nullable().required(),
});
