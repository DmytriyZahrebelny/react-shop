import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import ErrorField from './ErrorField';

class AddProduct extends Component {
  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            component={ErrorField}
            type="text"
            placeholder="Title"
          />
          <Field
            name="type"
            component={ErrorField}
            type="text"
            placeholder="Product type"
          />
          <Field
            name="description"
            component={ErrorField}
            type="text"
            placeholder="Description"
          />
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
          <button type="submit">Submit</button>
        </form>
      </div>
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