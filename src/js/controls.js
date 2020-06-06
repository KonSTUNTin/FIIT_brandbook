import React from 'react';

class Controls extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      let rangeList = []
      return(
        <div id = 'ControlsPanel' className = 'column'>
            {
            this.props.settings.map(
                (item, index)=>{
                    if(item.options){
                        return(
                            <ControlsCard
                            key = {index}
                            options = {item.options}
                            type = {item.type}
                            value = {item.value}
                            name = {item.name} 
                            onInput = {this.props.onInput}/>
                        )
                    } else {
                        if(item.type == 'range'){
                            let value = item;
                            value.value = this.props.data[item.name]
                            rangeList.push(value)
                        }
                    }
                }
            )    
            }
         <ControlsCard
            options = {rangeList}
            type = 'range'
            name = "Generator" 
            onInput = {this.props.onInput}/>
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
                            if(this.props.type == 'radio'){
                                return(<MyRadio
                                    key = {index}
                                    name = {this.props.name}
                                    id = {item.name}
                                    value = {item.value}
                                    select = {item.select}
                                    onInput = {this.props.onInput}/>)
                            } else {
                                return(<MyRange
                                    key = {index}
                                    name = {item.name}
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
        this.state = {
            value: this.props.value
        }
        this.ref = React.createRef()
        this.point = React.createRef()
        this.fill = React.createRef()
    }
    componentDidUpdate(){
        this.point.current.style.marginLeft = this.props.value + '%'
        this.fill.current.style.width = this.props.value + '%'
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
            
            <div className = 'rangeLineDiv'>
                <input 
                name = {this.props.name}
                ref = {this.ref} 
                onInput = {this.props.onInput} 
                type = "range" 
                className = 'myRange'>
                </input>
                <div ref = {this.fill} className = 'rangeFillDiv'>
                
                </div>
                <div ref = {this.point} className = 'rangePointDiv'></div>
            </div>
            
            </div>
        </div>
        )
    }
}

export default Controls;
  