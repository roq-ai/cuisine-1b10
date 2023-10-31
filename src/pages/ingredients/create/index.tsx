import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { ingredientValidationSchema } from 'validationSchema/ingredients';
import { RecipeInterface } from 'interfaces/recipe';
import { IngredientInterface } from 'interfaces/ingredient';

function IngredientCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: IngredientInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.ingredient.create({ data: values as RoqTypes.ingredient });
      resetForm();
      router.push('/ingredients');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<IngredientInterface>({
    initialValues: {
      name: '',
      quantity: 0,
      unit: '',
      calories: 0,
      recipe_id: (router.query.recipe_id as string) ?? null,
    },
    validationSchema: ingredientValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Ingredients',
              link: '/ingredients',
            },
            {
              label: 'Create Ingredient',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Ingredient
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Quantity"
            formControlProps={{
              id: 'quantity',
              isInvalid: !!formik.errors?.quantity,
            }}
            name="quantity"
            error={formik.errors?.quantity}
            value={formik.values?.quantity}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('quantity', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.unit}
            label={'Unit'}
            props={{
              name: 'unit',
              placeholder: 'Unit',
              value: formik.values?.unit,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Calories"
            formControlProps={{
              id: 'calories',
              isInvalid: !!formik.errors?.calories,
            }}
            name="calories"
            error={formik.errors?.calories}
            value={formik.values?.calories}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('calories', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<RecipeInterface>
            formik={formik}
            name={'recipe_id'}
            label={'Select Recipe'}
            placeholder={'Select Recipe'}
            fetcher={() => roqClient.recipe.findManyWithCount({})}
            labelField={'title'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/ingredients')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'ingredient',
    operation: AccessOperationEnum.CREATE,
  }),
)(IngredientCreatePage);
