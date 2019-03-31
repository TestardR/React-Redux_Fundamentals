import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import Header from './layout/Header';
import history from '../history';

const App = () => {
  return (
    <Router history={history}>
      <div className="ui container">
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete/:id" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
    </Router>
  );
};

export default App;
