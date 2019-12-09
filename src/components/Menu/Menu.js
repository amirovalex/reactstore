import React from 'react';
import 'tachyons';
import './Menu.css';
import MediaQuery from 'react-responsive';

const Menu = (props) => {
	return(
		<div className="side">
		<div className="sidebar">
					<ul className="flex flex-column justify-center tc pa3">
						<li 
							onClick= {() => {props.history.push('/store/all')}}
							className="grow">All
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/accessories`)}}
							className="grow">Accessories
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/topwear`)}}
							className="grow">Topwear
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/bottomwear`)}}
							className="grow">Bottomwear
						</li>
					</ul> 
				</div>
			<MediaQuery maxWidth={800}>
					<div className="dropmenu tc">
					{props.isDropdown === false ?
						(<div className="menubutt tc" onClick={() => props.onDropdownMenu()}>
						<p className="">Menu</p>
						</div>)
					:
					(<div>
						<div className="menubutt tc pv2" onClick={() => props.onDropdownMenu()}>
						<p>Menu</p>
						</div>
						<ul className="nopadd">
						<li 
							onClick= {() => {props.history.push('/store/all')}}
							className="grow">All
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/accessories`)}}
							className="grow tc">Accessories
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/topwear`)}}
							className="grow tc">Topwear
						</li>
						<li 
							onClick= {() => {props.history.push(`/store/bottomwear`)}}
							className="grow tc">Bottomwear
						</li>
						</ul>
					</div>
					)
				}
					</div>
				</MediaQuery>
		</div>
		)
}

export default Menu;