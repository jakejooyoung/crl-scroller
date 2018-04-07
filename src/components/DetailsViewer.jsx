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
    // Update parent state using parent's callback function
    this.props.onSelect(itemKey);
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

              <div className="alignMid">
                {item.key + " " + item.status}
              </div>

          </div>
        ))}
      </div>
    ); 

    return (
      <div className="innerContainer detailsViewer">
        <div className="scrollableDown">
          <DecoratedList items={listOfItems}/>
        </div>
      </div>
    )
  }
}
