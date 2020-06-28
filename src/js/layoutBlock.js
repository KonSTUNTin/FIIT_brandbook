import React from 'react'

class GeraldicBlock extends React.Component{

    render(){
        return(
            this.props.data.map(
                (geraldic)=>{
                    return(
                        <div className = 'aboutGeraldic'>
                        <img className = 'aboutGeraldic' src = {geraldic.img}/>
                        <div>
                            <h3>
                                {geraldic.title}
                            </h3>
                            <p>
                                {geraldic.text}
                            </p>
                        </div>
                        </div>
                    )
                }
            )
        )
    }
}

class Person extends React.Component{

    render(){
        return(
            <div className = 'person'>
            <img className = 'person' alt = '' src = {this.props.data.photo}/>
            <div>
                <h4>
                    {this.props.data.name}
                </h4>
                <p>
                    {this.props.data.role}
                </p>
            </div>
            </div>
        )
    }
}


class ColorSwatches extends React.Component{
    render(){
        return(
            <div className = 'colorSwatches'>
            {this.props.data.map(
                (item, index)=>{
                    return(
                        <ColorSwatch
                            inClass = {item.class}
                            title = {item.name}
                            text = {item.rgb}
                        />
                    )
                }
            )}
            </div>
        )
    }
}

class ColorSwatch extends React.Component{
    render(){
        return(
            <div className = {'colorSwatch ' + this.props.inClass} >
                <h4>
                    {this.props.title}
                </h4>
                <p>
                {this.props.text}
                </p>
            </div>
        )
    }
}


export {GeraldicBlock, Person, ColorSwatches}