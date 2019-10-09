import React from 'react';
import './Main.css';
import 'tachyons';

const Main = ({onRouteChange,categoryChange}) => {
	return(
	<div className="container">
		<div 
			onClick={() => {onRouteChange('store'); categoryChange('accessories')}}
			className="left shader zone tc"><p className='glow texter shadow-1'>Accessories</p></div>
		<div 
			onClick={() => {onRouteChange('store'); categoryChange('topwear')}}
			className="righttop zone shadow-1"><p className='texter shadow-1'>Topwear</p></div>
		<div 
			onClick={() => {onRouteChange('store'); categoryChange('bottomwear')}}
			className="rightlow zone shadow-1"><p className='texter shadow-1'>Bottomwear</p></div>
	</div>
	)
}

export default Main;