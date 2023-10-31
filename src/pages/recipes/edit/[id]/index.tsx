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
  Center,
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
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useRecipeFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { recipeValidationSchema } from 'validationSchema/recipes';
import { RecipeInterface } from 'interfaces/recipe';
import { RestaurantInterface } from 'interfaces/restaurant';

function RecipeEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'recipe',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useRecipeFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: RecipeInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.recipe.update({
        data: values as RoqTypes.recipe,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/recipes');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<RecipeInterface>({
    initialValues: data,
    validationSchema: recipeValidationSchema,
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
              label: 'Recipes',
              link: '/recipes',
            },
            {
              label: 'Update Recipe',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Recipe
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.title}
            label={'Title'}
            props={{
              name: 'title',
              placeholder: 'Title',
              value: formik.values?.title,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.ingredients}
            label={'Ingredients'}
            props={{
              name: 'ingredients',
              placeholder: 'Ingredients',
              value: formik.values?.ingredients,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.instructions}
            label={'Instructions'}
            props={{
              name: 'instructions',
              placeholder: 'Instructions',
              value: formik.values?.instructions,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Prep Time"
            formControlProps={{
              id: 'prep_time',
              isInvalid: !!formik.errors?.prep_time,
            }}
            name="prep_time"
            error={formik.errors?.prep_time}
            value={formik.values?.prep_time}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('prep_time', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Cook Time"
            formControlProps={{
              id: 'cook_time',
              isInvalid: !!formik.errors?.cook_time,
            }}
            name="cook_time"
            error={formik.errors?.cook_time}
            value={formik.values?.cook_time}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('cook_time', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<RestaurantInterface>
            formik={formik}
            name={'restaurant_id'}
            label={'Select Restaurant'}
            placeholder={'Select Restaurant'}
            fetcher={() => roqClient.restaurant.findManyWithCount({})}
            labelField={'name'}
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
              onClick={() => router.push('/recipes')}
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
    entity: 'recipe',
    operation: AccessOperationEnum.UPDATE,
  }),
)(RecipeEditPage);
