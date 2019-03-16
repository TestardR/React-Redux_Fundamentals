import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <div>
      <CommentDetail author="Vanessa" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Romain" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
