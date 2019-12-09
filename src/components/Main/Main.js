import React from 'react';
import './Main.css';
import 'tachyons';

const Main = (props) => {
	console.log('props',props)
	return(
	<div className="container">
		<div 
			onClick={() => {props.onRouteChange('store'); props.onCategoryChange('accessories');props.history.push('/store/accessories')}}
			className="left shader zone tc"><p className='glow texter shadow-1'>Accessories</p></div>
		<div 
			onClick={() => {props.onRouteChange('store'); props.onCategoryChange('topwear');props.history.push('/store/topwear')}}
			className="righttop zone shadow-1"><p className='texter shadow-1'>Topwear</p></div>
		<div 
			onClick={() => {props.onRouteChange('store'); props.onCategoryChange('bottomwear');props.history.push('/store/bottomwear')}}
			className="rightlow zone shadow-1"><p className='texter shadow-1'>Bottomwear</p></div>
	</div>
	)
}

export default Main;