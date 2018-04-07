import React from 'react';
import ReactDOM from 'react-dom';
import Items from 'Seeds/items.json';
import Descriptions from 'Seeds/descriptions.json';

export default class App extends React.Component {
	constructor(props) {
		super();
		this.state={
			'items':[],
			'descriptions':[],
			'selected':'',
		}
	}

	componentDidMount() {
		const items=Items.payload;
		const descriptions=Descriptions.payload;
		// console.log
		this.setState({
			'items':items,
			'descriptions':descriptions,
			'selected':items[0],
		})
		console.log(items);
  }

	render() {


		return (<div> hello world  </div>)
	}
}


