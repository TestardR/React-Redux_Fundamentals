import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={
            //   {
            //   // title: `${this.props.stream.title}`,
            //   // description: `${this.props.stream.description}`

            // }
            _.pick(this.props.stream, 'title', 'description')
          }
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToprops = (state, ownProps) => {
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToprops,
  { fetchStream, editStream }
)(StreamEdit);
