import React from 'react'
import Button from './button.js'

class RadioRow extends React.Component{

    render(){
        return(
        <div className = 'radioBlock'>
            {this.props.data.map((el,ind)=>{
                return(
                    <div className = {'RadioRow ' + el.type} key = {ind}>
                        {
                        el.values.map(
                            (item, index)=>{
                                return(
                                    <MyRadio
                                        //onInput = {this.props.onInput}
                                        handler = {this.props.handler}
                                        handlerName = {el.handler}
                                        text = {item.text}
                                        name = {el.name}
                                        type = {el.type}
                                        key = {index}
                                        value = {item.value}
                                        ident = {item.name}
                                        defaultChecked = {item.select}
                                    />
                                )
                            }
                        )
                        }
                    </div>
                )
            })
            }
        </div>
        )
    }
}

class MyRadio extends React.Component{
    constructor(props){
        super(props)
        this.ref = React.createRef()
        this.handler = this.handler.bind(this)
    }
    handler(event){
        (this.props.handlerName!== undefined)&&this.props.handler[this.props.handlerName](event)
    }
    render(){
        return(
        <div className = 'Radio'>
            <input 
            //onInput = {this.props.onInput}
            id = {this.props.ident}
            name = {this.props.name} 
            value = {this.props.value}
            type = 'radio'
            onChange = {this.handler}
            defaultChecked = {this.props.defaultChecked}
            />
            {
            this.props.type === "color"?
            <label 
            className = {'colorRadio ' + this.props.text}
            htmlFor ={this.props.ident}>
            </label>:
            <label 
            htmlFor ={this.props.ident}>
                {this.props.text}
            </label>
            }
        </div>
        )
    }
}

class ButtonRow extends React.Component{
    render(){
        return(
            <div className = 'buttonRow'>
                {this.props.data.map(
                    (button, index)=>{
                        return(
                            <Button text = {button.text} key = {index} file = {button.file}/>
                        )
                    }
                )}
            </div>
        )
    }
}

class RangeRow extends React.Component{
    render(){
        return(
            <div className = 'rangeRow'>
                {this.props.data.map(
                    (item, index) =>{
                        return(
                            <MyRange 
                                key = {'range' + index}
                                handler = {this.props.handler}
                                value = {this.props.generator[item.name]}
                                name = {item.name}
                                text = {item.text}
                                handlerName = {item.handler}
                            />
                        )
                    }
                )}
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
        this.handler = this.handler.bind(this)
        
    }
    componentDidMount(){
        this.point.current.style.marginLeft = this.props.value + '%'
        this.fill.current.style.width = this.props.value + '%'
    }
    componentDidUpdate(){
        this.point.current.style.marginLeft = this.props.value + '%'
        this.fill.current.style.width = this.props.value + '%'
    }
    handler(event){
        (this.props.handlerName!== undefined)&&this.props.handler[this.props.handlerName](event)
    }

    render(){
        return(
        <div className = 'range'>
            <div className = 'rangeInfo'>
            <div className = 'rangeName'>
                {this.props.text}
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
                onInput = {this.handler} 
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

export {RadioRow, ButtonRow, RangeRow}
