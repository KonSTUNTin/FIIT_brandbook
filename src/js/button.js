import React from 'react';


class Button extends React.Component{
  render(){
    return(
      <a onClick = {this.props.handler} href = {this.props.file} download className='button'>
        {this.props.text}
      </a>
    )
  }
}

export default Button