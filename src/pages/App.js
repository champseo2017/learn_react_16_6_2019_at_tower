import React, { Component } from 'react'
import Header from '../components/Header'
import FbButton from '../components/FbButton'


class App extends Component {
    state = {like:0, dislike:0}
    componentWillMount(){
        console.log('App: willMoint');
    }
    componentDidMount(){
        console.log('App: didMoint')
    }
    render() {
        let {like, dislike} = this.state
        console.log('App: render')
        return ( 
            <div>
            <Header title="I am Header" like={like}/>
            <h4>Like: {like}</h4>
            <h4>DisLike: {dislike}</h4>
            <FbButton handleClick={this.onLike} caption="Like"/>
            <FbButton handleClick={this.onDisLike} caption="DisLike"/>
            </div>
        )
    }

    onLike = () => {

        this.setState(prevState =>{
            return {
                like:prevState.like +1 
            }
        })

        this.setState(prevState =>{
            return {
                like:prevState.like +1
            }
        })


    }

    onDisLike = () => {
        let {dislike} = this.state
        this.setState({dislike:dislike + 1})
    }


}
export default App