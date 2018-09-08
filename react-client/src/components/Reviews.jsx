import React from 'react';
import Ratings from 'react-ratings-declarative';



class Reviews extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            rating: 0,
            numReviews: 0,
            accuracyRating: 0,
            communicationRating: 0,
            cleanlinessRating: 0,
            locationRating: 0,
            checkInRating: 0,
            valueRating: 0
        }

        setTimeout(() => {console.log('state in reviews: ', this.state, 'props in reviews: ', this.props.value)}, 9000)
    }

    componentWillReceiveProps(nextProps) {
        console.log('next props ',nextProps)
        if(this.props != nextProps) {
          this.setState({
            reviews: nextProps.reviews,
            rating: nextProps.total,
            numReviews: nextProps.reviews,
            accuracyRating: nextProps.acc,
            communicationRating: nextProps.communication,
            cleanlinessRating: nextProps.cleanliness,
            locationRating: nextProps.location,
            checkInRating: nextProps.checkIn,
            valueRating: nextProps.value
          });
        }
      }


    render(){
        return(
            <div className="container">
                <h2 style={{color: '#484848'}} className="header">{this.state.numReviews} Reviews</h2>
                <Ratings
                className="header2"
                rating={this.state.rating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="3.2px"
                >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="19px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="19px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="19px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="19px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="19px" widgetRatedColor="#347b8a" />
                </Ratings>
                <input className ="input" type="text" placeholder="&#x1F50D;Search reviews" />
                <hr className="hr2" />

                
                {/* <div className="container2" >
                <div className="sub"> */}
                <div className="col1">
                <h4 style={{color: '#484848'}} className="h4Acc">Accuracy</h4>
                <br/>
                <h4 style={{color: '#484848'}} className="h4Com">Communication</h4>
                <br/>
                <h4 style={{color: '#484848'}} className="h4Clen">Cleanliness</h4>
                </div>

                <div className="col2">
                <div className="Accuracy">
                <Ratings
                rating={this.state.accuracyRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                <br/>
                
                <div className="Communication">
                <Ratings
                rating={this.state.communicationRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                <br/>
                
                <div className="Cleanliness">
                <Ratings
                rating={this.state.cleanlinessRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                </div>

                <div className="col3">
                <h4 style={{color: '#484848'}} className="h4Loc">Location</h4>
                <br/>
                <h4 style={{color: '#484848'}} className="h4Chec">Check-in</h4>
                <br/>
                <h4 style={{color: '#484848'}} className="h4Value">Value</h4>
                </div>


                <div className="col4">
                <div className="Location">
                <Ratings
                rating={this.state.locationRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                <br/>
                
                <div className="Check-in">
                <Ratings
                rating={this.state.checkInRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                <br/>
                
                <div className="Value">
                <Ratings
                rating={this.state.valueRating}
                svgIconPaths='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                svgIconViewBoxes="0 0 576 512"
                widgetSpacings="2px"
                 >
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                <Ratings.Widget widgetSpacings="5px" widgetDimension="17px" widgetRatedColor="#347b8a" />
                </Ratings>
                </div>
                </div>
                

            </div>    
        )
    }
}

export default Reviews;