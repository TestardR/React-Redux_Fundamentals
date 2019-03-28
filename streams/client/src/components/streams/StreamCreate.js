import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  // props as formProps => console.log(formProps)
  // we destructured this.formProps.input
  renderInput({ input }) {
    return <input {...input} />;
  }
  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
