import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main.js';


it('expect to render component',() => {
	const mainComponent = shallow(<Main/>)
	expect(mainComponent.debug()).toMatchSnapshot();
})