import React, { Component } from 'react';
/* import Form from './components/Form/Form.jsx'; */
import FormHooks from './components/FormHooks/FormHooks.jsx';

class App extends Component {
  state = {
    todos: 'initialTodos',
  };
  formSubmitHeandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        {/* <Form onSubmit={this.formSubmitHeandler} /> */}
        <FormHooks />
      </div>
    );
  }
}

export default App;
