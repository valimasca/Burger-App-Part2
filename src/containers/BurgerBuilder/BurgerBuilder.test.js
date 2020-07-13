import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//by importing and adding the configure, enzyme is connected
configure({adapter: new Adapter()});

describe('<BurgerBuilder/>', () => {
let wrapper;
beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>);
});
    it('should render <BuildControls /> when recevieng ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });

});