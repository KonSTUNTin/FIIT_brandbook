import React from 'react'
import Button from './button.js'

class RadioRow extends React.Component{
    render(){
        return(
        <div className = 'radioBlock'>
            {this.props.data.map((el,ind)=>{
                return(
                    <div className = 'RadioRow'>
                        {
                        el.values.map(
                            (item, index)=>{
                                return(
                                    <MyRadio
                                        //onInput = {this.props.onInput}
                                        text = {item.text}
                                        name = {el.name}
                                        type = {el.type}
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
            defaultChecked = {this.props.defaultChecked}
            />
            {
            this.props.type == "color"?
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
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'buttonRow'>
                {this.props.data.map(
                    (button)=>{
                        return(
                            <Button text = {button.text}/>
                        )
                    }
                )}
            </div>
        )
    }
}

export {RadioRow, ButtonRow}
