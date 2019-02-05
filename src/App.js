import React from 'react';
import './App.css';
import ToDoApp from './ToDoApp/ToDoApp.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

const store = configureStore();

const App = () => (
        <Provider store={store}>
          <ToDoApp />
        </Provider>
    );

export default App;