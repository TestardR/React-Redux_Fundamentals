import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div className="ui container comments">
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
              <a href="" className="author">
                Roger
              </a>
              <div className="metadata">
                <span className="data">Now</span>
              </div>
              <div className="text">Wow!</div>
            </div>
          </div>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Vanessa"
          timeAgo="Today at 11:45AM"
          content="Hey you cute!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Yesterday at 1:23PM"
          content="No way ?!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Romain"
          timeAgo="Friday at 3:16PM"
          content="hihihihi!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
