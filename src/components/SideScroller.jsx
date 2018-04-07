import React from 'react';

export default class SideScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      arr:this.props.data,
      selected:this.props.selected,
    }
  }
  componentWillMount(){

  }

  handleSelection(itemKey,e){
    // Update parent state using parent's callback function
    this.props.onSelect(itemKey);
    this.setState({'selected':itemKey});
  }

  render(){
    const arr=this.state.arr;
    const decorated=arr.map(item=>
      <div className={"columns "+(this.state.selected===item?"selected":"")} key={item.toString()} href={item+""}>
        <a href={"#"+item}>
          <div className="thumbnail"
            onClick={(e)=>this.handleSelection(item,e)}>
            <div className="alignMid">
              {item}
            </div>
          </div>
        </a>
      </div>
    );

    return (
      <div className="innerContainer sideScroller">
        <div className="scrollable">
          {decorated}
        </div>
      </div>
    )
  }
}
