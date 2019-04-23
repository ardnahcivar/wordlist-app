import React,{Component} from 'react';
import './practice-word.css';

export default class PracticeWord extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            showMeaning:false
        }
    }


    componentDidMount(){
    }

    componentDidUpdate(){
    }


    render(){
        let meaning;
        if(this.state.showMeaning){
            meaning = <div className="wordinfo"> <p>{ this.props.word && this.props.word.information}</p>  </div>
        }else{
            meaning  = null;
        }

        return (
            <div className="word-info-container">
                <div className="word-box">
                    <div className="title"> 
                        <p>{ this.props.word && this.props.word.name}</p>
                        <p>{ this.props.word && this.props.word.type}</p>  
                    </div>
                    { meaning }
                    <div className="word-meaning">
                        <p onClick={() => this.toggleMeaning()}> Click to See Meaning</p>
                    </div>
                </div>
            </div>
        )
    }

    toggleMeaning = () => {
        console.log(this.state.showMeaning);
        this.setState({showMeaning: !this.state.showMeaning})
    }
}