import React from 'react';

export default class SideScroller extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      arr:this.props.data,
    }
  }
  componentWillMount(){

  }

  handleSelection(itemKey,e){
    this.props.onSelect(itemKey);
  }
  mousewheel(e,delta){
    console.log(delta);
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
  }
  render(){
    const arr=this.state.arr;
    const decorated=arr.map(item=>
      <div className="columns" key={item.toString()} href={item+""}>
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
      <div className={"innerContainer "+this.props.className}>
        <div className="scrollable" mousewheel={(event, delta)=>mousewheel(event, delta)}>
          {decorated}
        </div>
      </div>
    )
  }
}
