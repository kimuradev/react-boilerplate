import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Nada de ficar importando 'enzyme' em todo lugar
import { shallow, render, mount } from 'enzyme';

it('should render a label', () => {
    const wrapper = shallow(
      <App />
    ).length;
    expect(wrapper).toEqual(1);
});
