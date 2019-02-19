import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormContainer, Button, Label, SwitchContainer } from '../../style/AdminStyle/AddProductStyle';
import TexteriaField from './TexteriaField';
import ErrorField from './ErrorField';
import RadioInput from './RadioInput';

class AddProduct extends Component {
  render () {
    const { handleSubmit } = this.props;

    return (
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            component={ErrorField}
            type="text"
            placeholder="Product title"
          />
          <SwitchContainer>
            <Label htmlFor="mobile">Mobile</Label>
            <Field id="mobile" name="type" component={RadioInput} type="radio" value="mobile" checked={true} />
            <Label htmlFor="tablet">Tablet</Label>
            <Field id="tablet" name="type" component={RadioInput} type="radio" value="tablet" />
            <Label htmlFor="desktop">Desktop</Label>
            <Field id="desktop" name="type" component={RadioInput} type="radio" value="desktop" />
          </SwitchContainer>
          <Field
            name="image"
            component={ErrorField}
            type="text"
            placeholder="Image url"
          />
          <Field
            name="price"
            component={ErrorField}
            type="text"
            placeholder="Price"
          />
          <Field
            name="description"
            component={TexteriaField}
            placeholder="Product description"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    );
  }
}

export default reduxForm({
  form: 'add',
})(AddProduct);

// import React from 'react';
// import { FormContainer, DescriptionsField, Fieldset, FieldText, Input, Legend } from '../../style/AdminStyle/AddProductStyle';

// const AddProduct = () => {
//   return (
//     <FormContainer>
//       <form action="">
//         <Fieldset>
//           <Legend>Name product</Legend>
//           <FieldText type="text" name="title" placeholder="Add title" required />
//         </Fieldset>
//         <Fieldset>
//           <Legend>Description product</Legend>
//           <DescriptionsField name="description" placeholder="Add description" required></DescriptionsField>
//         </Fieldset>
//         <Fieldset>
//           <Legend>Price product</Legend>
//           <FieldText type="number" name="price" placeholder="Add price" required />
//         </Fieldset>
//         <Fieldset>
//           <Legend>Image url product</Legend>
//           <FieldText type="text" name="url" placeholder="Add url" required />
//         </Fieldset>
//         <Input type="submit" />
//       </form>
//     </FormContainer>
//   );
// };

// export default AddProduct;