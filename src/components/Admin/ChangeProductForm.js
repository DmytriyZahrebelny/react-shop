import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import ErrorField from './ErrorField';

class ChangeProductForm extends Component {
  componentDidMount() {
    const { match, getProductId } = this.props;

    getProductId(match.params.id);
  }

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

export default withRouter(reduxForm({
  form: 'change',
})(ChangeProductForm));
