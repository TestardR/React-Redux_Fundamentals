import React, { Component } from 'react';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Valider';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  //   static contextType = LanguageContext;
  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Submit' : 'Valider';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
