import React from 'react';
import faker from 'faker';

function CommentDetail() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="data">Today at 6:00 PM</span>
          </div>
          <div className="text">Nice blog text!</div>
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
