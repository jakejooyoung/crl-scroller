import React from 'react';

export default class DetailsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      arr:this.props.data,
      name:this.props.itemName,
    }
  }
  componentWillMount(){
  }

  handleSelection(itemKey,e){
    this.props.onSelect(itemKey);
  }

  render(){
    const listOfItems=this.state.arr;
    const DecoratedList = ({items}) => (
      <div>
        {items.map(item => (
          <div 
            id={item.key}
            className="item" 
            key={item.key}
            onClick={(e)=>this.handleSelection(item.key,e)}>
              {item.status}
            </div>
        ))}
      </div>
    ); 

    return (
      <div className={"innerContainer "+this.props.className}>
        <div className="scrollableDown">
          <DecoratedList items={listOfItems}/>
        </div>
      </div>
    )
  }
}
