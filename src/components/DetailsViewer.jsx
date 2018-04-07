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

  scroll(){

  }

  render(){
    const listOfItems=this.state.arr;
    const myJSON = JSON.stringify(listOfItems);
    const DecoratedList = ({items}) => (
      <div>
        {items.map(item => (
          <div 
            id={item.key}
            className="item card" 
            key={item.key}
            onClick={(e)=>this.handleSelection(item.key,e)}>
              <p>{JSON.stringify(item)}</p>
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
