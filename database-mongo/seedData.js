const faker = require('faker');
const save = require('./').saveFunc;
const db = require('./')

for(var i = 0; i < 432; i++){
    const user = {
        totalReview: Math.floor(Math.random() * Math.floor(6)),
        accuracy: Math.floor(Math.random() * Math.floor(6)),
        communication: Math.floor(Math.random() * Math.floor(6)),
        cleanliness: Math.floor(Math.random() * Math.floor(6)),
        location: Math.floor(Math.random() * Math.floor(6)),
        checkIn: Math.floor(Math.random() * Math.floor(6)),
        value: Math.floor(Math.random() * Math.floor(6)),
        username: faker.name.findName(),
        date: faker.date.past(),
        img: faker.image.avatar(),
        text: faker.lorem.paragraphs()
    };

    save(user);
}

