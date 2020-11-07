import React from 'react'


class Picture extends React.Component{
    shouldComponentUpdate(){
        return false
    }
    render(){
        return(
            <>
            {!Array.isArray(this.props.data)&&
            <img src = {this.props.data}/>}
            {Array.isArray(this.props.data)&&
            this.props.data.map(
                (pic)=>{
                    return(
                        <img 
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