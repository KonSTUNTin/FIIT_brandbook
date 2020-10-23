import React from 'react';
import './App.css';
import Header from './js/header.js'
import HeroBlock from './js/heroBlock.js'
import LottieAnimation from './js/lottieAnimation'
import MyCanvas from './js/myCanvas.js'


class App extends React.Component{
    
    render(){
        return(
            <>
                <Header/>
                <Wrapper>
                    <HeroBlock/>
                </Wrapper>
                <Wrapper>
                    <Section>
                        <Column w = "4">
                            <h2>Концепция</h2>
                        </Column>
                        <Column w = "4">
                            <h3>Берем фигурную скобку</h3>
                        </Column>
                        <Column w = "4">
                            <h3>Берем фигурную скобку</h3>
                        </Column>
                    </Section>
                </Wrapper>
            </>
        )
    }
}

class Wrapper extends React.Component{
    render(){
        return(
            <div className = 'wrapper'>
               {this.props.children}
            </div>
        )
    }
}

class Column extends React.Component{
    render(){
        return(
            <div className = {'column width' + this.props.w}>
               {this.props.children}
            </div>
        )
    }
}

class Section extends React.Component{
    render(){
        return(
            <div className = {'section width' + this.props.w}>
               {this.props.children}
            </div>
        )
    }
}

export default App;
