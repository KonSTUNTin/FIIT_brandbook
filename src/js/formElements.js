import React from 'react'
import Button from './button.js'

class RadioRow extends React.Component{

    render(){
        return(
        <div className = 'radioBlock'>
            {this.props.data.map((el,ind)=>{
                return(
                    <div className = 'RadioRow' key = {ind}>
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
            id = {this.props.text}
            name = {this.props.name} 
            value = {this.props.text}
            type = 'radio'
            onChange = { this.handler}
            defaultChecked = {this.props.defaultChecked}
            />
            {
            this.props.type === "color"?
            <label 
            className = {'colorRadio ' + this.props.text}
            htmlFor ={this.props.text}>
            </label>:
            <label 
            htmlFor ={this.props.text}>
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
                            <Button text = {button.text} key = {index}/>
                        )
                    }
                )}
            </div>
        )
    }
}

export {RadioRow, ButtonRow}
