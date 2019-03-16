import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';

const App = () => {
  return (
    <div>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Vanessa"
        timeAgo="Today at 11:45AM"
        content="Hey you cute!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Yesterday at 1:23PM"
        content="No way ?!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Romain"
        timeAgo="Friday at 3:16PM"
        content="hihihihi!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
