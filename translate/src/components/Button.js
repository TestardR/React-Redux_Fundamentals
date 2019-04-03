import React, { Component } from 'react';
import LanguageContext from './contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;
  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Valider';
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === 'english' ? 'Submit' : 'Valider')}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
