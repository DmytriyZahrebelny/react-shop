import React from 'react';
import { FormContainer, DescriptionsField, Fieldset, FieldText, Input, Legend } from '../../style/AdminStyle/AddProductStyle';

const AddProduct = () => {
  return (
    <FormContainer>
      <form action="">
        <Fieldset>
          <Legend>Name product</Legend>
          <FieldText type="text" name="title" placeholder="Add title" required />
        </Fieldset>
        <Fieldset>
          <Legend>Description product</Legend>
          <DescriptionsField name="description" placeholder="Add description" required></DescriptionsField>
        </Fieldset>
        <Fieldset>
          <Legend>Price product</Legend>
          <FieldText type="number" name="price" placeholder="Add price" required />
        </Fieldset>
        <Fieldset>
          <Legend>Image url product</Legend>
          <FieldText type="text" name="url" placeholder="Add url" required />
        </Fieldset>
        <Input type="submit" />
      </form>
    </FormContainer>
  );
};

export default AddProduct;