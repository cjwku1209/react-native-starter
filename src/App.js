import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { NavigationStack } from './navigator';

export class Component extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Provider store={store}>
            <NavigationStack/>
        </Provider>
    )
  }
}

export const App = Component;
