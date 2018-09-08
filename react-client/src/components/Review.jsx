import React from 'react';
import Rev from './Rev.jsx';
import style from '../Styles.css'

class Review extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalReviews: ['asdf','asdf','asdf','asdf','asdf','asdf','asdf'],
            reviewNum: 0,
            firstSliceIndex:0,
            secondSliceIndex: 7
            
        }
    }

    componentWillReceiveProps(props){
        let totalReviews = props.reviews.length / 7;
        totalReviews = Math.round(totalReviews);
        this.setState({reviewNum:totalReviews});
        this.setState({
            totalReviews: props.reviews
        });
    }

    render(){
        var renderReviews = this.state.totalReviews.slice(this.state.firstSliceIndex,this.state.secondSliceIndex);
        return(<div className="d">
            {renderReviews.map(review => 
                <Rev review={review} />
            )}
                <ul>
                <li style={{ color: 'white', backgroundColor: '#347b8a', border: "solid 10px #347b8a", borderWidth: '6px 13px 6px 13px', borderRadius: '100%'  }} className="num">1</li>
                <li style={{ color: '#347b8a' }} className="num">2</li>
                <li style={{ color: '#347b8a' }} className="num">3</li>
                <li>...</li>
                <li style={{ color: '#347b8a' }} className="num">{this.state.reviewNum}</li>
                <li style={{ color: '#347b8a', border: "solid 1px #347b8a", borderRadius: '100%', padding: '5px 10px 5px 10px' }} >></li>
                </ul>
        </div>)
    }
}

export default Review;