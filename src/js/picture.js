import React from 'react'


class Picture extends React.Component{
  
    shouldComponentUpdate(){
        return false
    }

    render(){
        return(
            <>
            {!Array.isArray(this.props.data)&&
            <img onLoad = {this.props.handlerLoad} src = {this.props.data}/>}
            {Array.isArray(this.props.data)&&
            this.props.data.map(
                (pic)=>{
                    return(
                        <img 
                        onLoad = {this.props.handlerLoad}
                        className = 'examples' 
                        src = {pic}
                        alt = ''
                        />
                    )
                }
            )}
            </>
        )
    }
}

export default Picture