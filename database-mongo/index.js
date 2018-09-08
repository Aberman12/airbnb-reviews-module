var mongoose = require('mongoose');
// const faker = require('faker');
var MONGOLAB_URI = 'mongodb://heroku_1wbgqsjk:acvq699itrk76oh6ui3f26cg7e@ds149742.mlab.com:49742/heroku_1wbgqsjk';
mongoose.connect('mongodb://localhost/airbnbClone1');
// MONGOLAB_URI ||
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const reviewsSchema = mongoose.Schema({
  totalReview: Number,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  username: String,
  date: Date,
  img: String,
  text: String
});

const Reviews = mongoose.model('Reviews', reviewsSchema);


var selectAll = function(callback) {
  Reviews.find({}, function(err, reviews) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, reviews);
    }
  });
};
const saveFunc = (obj) => {
  console.log('obj', obj)
  new Reviews(obj).save(function(err){
    if(err){
      console.log('err', err);
    } else {
      console.log('saved successfully')
    }
  })
}


// for(var i = 0; i < 432; i++){
//   const user = {
//       totalReview: Math.floor(Math.random() * Math.floor(6)),
//       accuracy: Math.floor(Math.random() * Math.floor(6)),
//       communication: Math.floor(Math.random() * Math.floor(6)),
//       cleanliness: Math.floor(Math.random() * Math.floor(6)),
//       location: Math.floor(Math.random() * Math.floor(6)),
//       checkIn: Math.floor(Math.random() * Math.floor(6)),
//       value: Math.floor(Math.random() * Math.floor(6)),
//       username: faker.name.findName(),
//       date: faker.date.past(),
//       img: faker.image.avatar(),
//       text: faker.lorem.paragraphs()
//   };

//   saveFunc(user);
// }

module.exports = {
  db,
  Reviews,
  saveFunc, 
  selectAll
};