import React from "react";
import {Provider} from "react-redux";

class Root extends React.Component{

  constructor(props){
    super(props)
  }


  render(){
    return (
      <Provider store={this.props.store} >
        <div> </div>
      </Provider>
    )
  }
}

export default Roo