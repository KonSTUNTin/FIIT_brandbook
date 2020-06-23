import React from 'react';

class Button extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div onClick = {this.props.onClick} className='button'>
          {this.props.text}
        </div>
      )
    }
  }

  export default Button