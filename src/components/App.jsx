import React from 'react';
import ReactDOM from 'react-dom';
import Items from 'Seeds/items.json';
import Descriptions from 'Seeds/descriptions.json';
import SideScroller from './SideScroller.jsx';
import DetailsViewer from './DetailsViewer.jsx';

export default class App extends React.Component {
	constructor(props) {
		super();
		this.state={
			'items':[],
			'descriptions':[],
			'selected':'',
		}
	}

	componentWillMount() {
		const items=Items.payload;
		const descriptions=Descriptions.payload;
		// console.log
		this.setState({
			'items':items,
			'descriptions':descriptions,
			'selected':items[0],
		})
  }

  updateSelection(itemKey, e){
  	console.log(itemKey);
  	// this.setState({'selected':itemKey});
  }
	render() {
		const thumbnailsView=(
			<SideScroller 
				data={this.state.items} 
				onSelect={(itemKey, e)=>this.updateSelection(itemKey, e)}>
			</SideScroller>
		)
		const detailsView=(
			<DetailsViewer 
				data={this.state.descriptions} 
				onSelect={(itemKey, e)=>this.updateSelection(itemKey, e)}>
			</DetailsViewer>
		)
		// var obj = objArray.find(function (obj) { return obj.id === 3; });
		return (
			<div> 
				{thumbnailsView} 
				{detailsView}
			</div>
		)
	}
}


