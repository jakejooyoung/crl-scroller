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
      <div className="columns" href={item+""}>
        <a href={"#"+item}>
          <div className="thumbnail"
            key={item.toString()}
            onClick={(e)=>this.handleSelection(item,e)}
            >{item}</div>
        </a>
      </div>
    );

    return (
      <div className={"innerContainer "+this.props.className}>
        <div className="scrollable" mousewheel={(e)=>mousewheel(e)}>
          {decorated}
        </div>
      </div>
    )
  }
}
