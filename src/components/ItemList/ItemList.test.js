import React from 'react';
import { shallow } from 'enzyme';
import ItemList from './ItemList.js';


it('expect to render component',() => {
	const mockItems = [{
		category: "topwear",
		itemid: 1,
		itemimage: "https://cdn.rickowens.eu/products/69433/large/DU19F6285FEP8_09_M_2.jpg?1568643377",
		itemname: "Black Hoodie",
		price: 120
	}]
	const mainComponent = shallow(<ItemList items={mockItems}/>)
	expect(mainComponent.debug()).toMatchSnapshot();
})