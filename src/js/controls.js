import React from 'react';

class Controls extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div className = 'column'>
            {this.props.settings.map(
                (item, index)=>{
                    return(
                        <ControlsCard 
                        options = {item.options}
                        key = {index}
                        type = {item.type}
                        name = {item.title} 
                        onInput = {this.props.onInput}/>
                    )
                }
            )    
            }
        </div>
      )
    }
  }
  
class ControlsCard extends React.Component{
constructor(props){
    super(props)
}
render(){
    return(
    <div className = 'controlsCard'>
        <div className = 'controlsHeader'>
        {this.props.name}
        </div>
        <div className = 'controlsBlock'>
            {
                this.props.options.map(
                (item, index)=>{
                        if(this.props.type == 'range'){
                            return(<MyRange 
                                key = {index}
                                name = {item.name}
                                value = {item.value}
                                onInput = {this.props.onInput}/>)
                        } 
                        if(this.props.type == 'radio'){
                            return(<MyRadio
                                key = {index}
                                name = {this.props.name}
                                id = {item.name}
                                value = {item.value}
                                select = {item.select}
                                onInput = {this.props.onInput}/>)
                        } 
                        
                    
                }
                )
            }
        
        </div>
    </div>
    )
}
}

class MyRadio extends React.Component{
    constructor(props){
        super(props)
        this.ref = React.createRef()
    }
    render(){
        return(
        <div className = 'Radio'>
            <input 
            onInput = {this.props.onInput}
            id = {this.props.id}
            name = {this.props.name} 
            value = {this.props.value}
            type = 'radio'
            defaultChecked = {this.props.select}
            />
            <label 
            htmlFor ={this.props.id}>
                {this.props.id}
            </label>
        </div>
        )
    }
}

class MyRange extends React.Component{
    constructor(props){
        super(props)
        this.ref = React.createRef()
        
    }

    render(){
        return(
        <div className = 'range'>
            <div className = 'rangeInfo'>
            <div className = 'rangeName'>
                {this.props.name}
            </div>
            <div className = 'rangeValue'>
                {this.props.value}
            </div>
            </div>
            <div className = 'RangeLine'>
            <input 
            name = {this.props.name}
            ref = {this.ref} 
            onInput = {this.props.onInput} 
            type = "range" 
            className = 'myRange'>
            </input>
            </div>
        </div>
        )
    }
}

export default Controls;
  