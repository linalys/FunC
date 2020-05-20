import React from "react";

const message = ['F', 'U', 'N', 'C', 'T', 'A', 'S', 'T', 'I', 'C', '!'];


export default class CongratsMessage extends React.Component{
    constructor() {
        super();
        this.state = {
            text: '',
            seconds: 0,
            i: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.i === message.length){
                return
            }
            this.setState((previousState) => ({
                text: previousState.text + (message[previousState.i].toString()),
                i: previousState.i + 1
            }))
        }, 100)
    }

    render(){
        return(
            <>
                <div className="congratsMessage superRainbowText outlineForRainbowTextTHICC">
                    {this.state.text}
                </div>
            </>
        )
    }

}