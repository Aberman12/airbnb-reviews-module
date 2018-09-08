import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Reviews from './components/Reviews.jsx';
import './Styles.css';
import Review from './components/Review.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      totalReview: 0,
        accuracy: 0,
        communication: 0,
        cleanliness: 0,
        location: 0,
        checkIn: 0,
        value: 0,
    }
  }


  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log('data', data)
        if(typeof data === 'string'){
          data = JSON.parse(data)
        }
        data = data.concat(data[0],data[1],data[2],data[3], data[4])
        console.log('data post concat',typeof data);
        var add = (arr) => {
          // console.log('arr in add(): ', arr)
          var total = 0;
          for(var a = 0; a < arr.length; a++){
            total = total + arr[a];
          }
          // console.log('total inside add(): ', total)
          return total;
        }

        const obj = {
          totalReview: [],
          accuracy: [],
          communication: [],
          cleanliness: [],
          location: [],
          checkIn: [],
          value: [],
        };

        for(var i = 0; i < data.length; i++){
          obj.totalReview.push(data[i].totalReview);
          obj.accuracy.push(data[i].accuracy);
          obj.communication.push(data[i].communication);
          obj.cleanliness.push(data[i].cleanliness);
          obj.location.push(data[i].location);
          obj.checkIn.push(data[i].checkIn);
          obj.value.push(data[i].value);
        }

        for(var prop in obj){
          var long = obj[prop].length;
          var total = add(obj[prop]);
          obj[prop] = total / long;
          // console.log('obj prop: ',obj[prop], 'long: ', long, 'total: ', total)
        }

        this.setState({
          items: data,
          totalReview: Number((obj.totalReview + 2).toFixed(1)),
          accuracy: Number((obj.accuracy + 2).toFixed(1)),
          communication: Number((obj.communication + 2).toFixed(1)),
          cleanliness: Number((obj.cleanliness + 2).toFixed(1)),
          location: Number((obj.location + 2).toFixed(1)),
          checkIn: Number((obj.checkIn + 2).toFixed(1)),
          value: Number((obj.value + 2).toFixed(1))
        })
        setTimeout(() => {console.log('state in index ',this.state)},3000);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
              <div className="revlist" >
              {console.log('in render index ',this.state)}
        <Reviews reviews={this.state.items.length} 
        total={this.state.totalReview} 
        acc={this.state.accuracy} 
        communication={this.state.communication}
        cleanliness={this.state.cleanliness}
        location={this.state.location}
        checkIn={this.state.checkIn}
        value={this.state.value}/>
        <div className="d">
        <Review reviews={this.state.items}/>
        </div>
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;