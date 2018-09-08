import React from 'react';

class Rev extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img: '',
            username: '',
            date: '',
            text: ''
        }
    }

    componentWillReceiveProps(props){
        console.log(props.review.img)
        this.setState({
            img: props.review.img,
            username: props.review.username,
            date: props.review.date,
            text: props.review.text
        })
    }

    render() {
        var dateMonth = this.state.date.slice(5,7);
        var newDate = this.state.date.slice(0,4);
        console.log('new dates', dateMonth, newDate)
        return (<div className="rev">
        {/* {console.log('props in rev ',props)} */}
                <div className="stuff">
                <img className="revImg" src={this.state.img} />
                <div className="personInfo">
                <h4 style={{color: '#484848'}} className="username">{this.state.username}</h4>
                <p style={{color: '#484848'}} className="date">{"March " + newDate}</p>
                <p className="flag">⚐</p>
                </div>
                </div>
                <p style={{color: '#484848'}} className="review">{this.state.text}</p>
               <hr className="hr" style={{color: '#767676'}} />
                </div>)
    }
} 




export default Rev;