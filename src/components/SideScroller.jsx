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

  render(){
    console.log(arr);
    const arr=this.state.arr;
    const decorated=arr.map(item=>
      <button 
        key={item.toString()}
        onClick={(e)=>this.handleSelection(item,e)}
        >{item}</button>
    );

    return <div className="">{decorated}</div>;
  }
}
